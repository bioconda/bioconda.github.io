:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocomp'
.. highlight: bash

nanocomp
========

.. conda:recipe:: nanocomp
   :replaces_section_title:
   :noindex:

   Comparing runs of Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoComp
   :license: GPL / GPL-3.0-only
   :recipe: /`nanocomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp/meta.yaml>`_

   


.. conda:package:: nanocomp

   |downloads_nanocomp| |docker_nanocomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.3-0</code>,  <code>1.11.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  </span></summary>
      

      ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.23.1-0``,  ``0.23.0-1``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.12.4-0``,  ``0.7.0-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends joypy: 
   :depends matplotlib-base: ``>=2.1.0``
   :depends nanoget: ``>=1.4.0``
   :depends nanomath: ``>=1.0.0``
   :depends nanoplot: ``>=1.21.0``
   :depends pandas: 
   :depends plotly: ``>=3.4.2``
   :depends psutil: 
   :depends pyarrow: 
   :depends python: ``>=3``
   :depends seaborn: ``>=0.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocomp

   and update with::

      conda update nanocomp

   or use the docker container::

      docker pull quay.io/biocontainers/nanocomp:<tag>

   (see `nanocomp/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocomp| image:: https://img.shields.io/conda/dn/bioconda/nanocomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocomp
   :alt:   (downloads)
.. |docker_nanocomp| image:: https://quay.io/repository/biocontainers/nanocomp/status
   :target: https://quay.io/repository/biocontainers/nanocomp
.. _`nanocomp/tags`: https://quay.io/repository/biocontainers/nanocomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocomp/README.html