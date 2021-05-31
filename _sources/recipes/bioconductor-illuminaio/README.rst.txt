:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminaio'
.. highlight: bash

bioconductor-illuminaio
=======================

.. conda:recipe:: bioconductor-illuminaio
   :replaces_section_title:
   :noindex:

   Parsing Illumina Microarray Output Files

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/illuminaio.html
   :license: GPL-2
   :recipe: /`bioconductor-illuminaio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio/meta.yaml>`_
   :links: biotools: :biotools:`illuminaio`

   Tools for parsing Illumina\'s microarray output files\, including IDAT.


.. conda:package:: bioconductor-illuminaio

   |downloads_bioconductor-illuminaio| |docker_bioconductor-illuminaio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.34.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-0</code>,  <code>0.26.0-1</code>,  <code>0.26.0-0</code>,  <code>0.24.0-0</code>,  <code>0.22.0-0</code>,  </span></summary>
      

      ``0.34.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-1``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-0``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.14.0-0``,  ``0.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-base64: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminaio

   and update with::

      conda update bioconductor-illuminaio

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminaio:<tag>

   (see `bioconductor-illuminaio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminaio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminaio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminaio
   :alt:   (downloads)
.. |docker_bioconductor-illuminaio| image:: https://quay.io/repository/biocontainers/bioconductor-illuminaio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminaio
.. _`bioconductor-illuminaio/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminaio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html