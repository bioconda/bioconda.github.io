:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoqc'
.. highlight: bash

nanoqc
======

.. conda:recipe:: nanoqc
   :replaces_section_title:
   :noindex:

   Create fastQC\-like plots for Oxford Nanopore sequencing data

   :homepage: https://github.com/wdecoster/nanoQC
   :license: MIT / MIT License
   :recipe: /`nanoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc/meta.yaml>`_

   


.. conda:package:: nanoqc

   |downloads_nanoqc| |docker_nanoqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.8.1-1</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.3-0</code>,  </span></summary>
      

      ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.1-1``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bokeh: 
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoqc

   and update with::

      conda update nanoqc

   or use the docker container::

      docker pull quay.io/biocontainers/nanoqc:<tag>

   (see `nanoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoqc| image:: https://img.shields.io/conda/dn/bioconda/nanoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoqc
   :alt:   (downloads)
.. |docker_nanoqc| image:: https://quay.io/repository/biocontainers/nanoqc/status
   :target: https://quay.io/repository/biocontainers/nanoqc
.. _`nanoqc/tags`: https://quay.io/repository/biocontainers/nanoqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoqc/README.html