:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplot'
.. highlight: bash

nanoplot
========

.. conda:recipe:: nanoplot
   :replaces_section_title:
   :noindex:

   Plotting suite for long read sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoPlot
   :license: GPL / GPL-3.0-only
   :recipe: /`nanoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot/meta.yaml>`_

   


.. conda:package:: nanoplot

   |downloads_nanoplot| |docker_nanoplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.1-0</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.29.1-0</code>,  <code>1.29.0-0</code>,  <code>1.28.4-0</code>,  <code>1.28.2-0</code>,  </span></summary>
      

      ``1.32.1-0``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.29.1-0``,  ``1.29.0-0``,  ``1.28.4-0``,  ``1.28.2-0``,  ``1.28.1-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.3-0``,  ``1.26.2-0``,  ``1.26.1-0``,  ``1.25.1-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.23.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.2-1``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.11.0-0``,  ``1.10.4-0``,  ``1.8.1-0``,  ``1.2.2-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.16.4-0``,  ``0.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends nanoget: ``>=1.14.0``
   :depends nanomath: ``>=0.23.1``
   :depends numpy: 
   :depends pandas: ``>=0.22.0``
   :depends pauvre: ``>=0.2.0``
   :depends plotly: ``>=4.1.1``
   :depends pyarrow: 
   :depends pysam: ``>0.10.0.0``
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends scipy: 
   :depends seaborn: ``>=0.10.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplot

   and update with::

      conda update nanoplot

   or use the docker container::

      docker pull quay.io/biocontainers/nanoplot:<tag>

   (see `nanoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplot| image:: https://img.shields.io/conda/dn/bioconda/nanoplot.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplot
   :alt:   (downloads)
.. |docker_nanoplot| image:: https://quay.io/repository/biocontainers/nanoplot/status
   :target: https://quay.io/repository/biocontainers/nanoplot
.. _`nanoplot/tags`: https://quay.io/repository/biocontainers/nanoplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplot/README.html