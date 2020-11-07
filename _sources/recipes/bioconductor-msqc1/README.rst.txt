:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msqc1'
.. highlight: bash

bioconductor-msqc1
==================

.. conda:recipe:: bioconductor-msqc1
   :replaces_section_title:
   :noindex:

   Sigma mix MSQC1 data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/msqc1.html
   :license: GPL
   :recipe: /`bioconductor-msqc1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1/meta.yaml>`_

   contains eight technical replicate data set and a three replicate dilution series of the MS Qual\/Quant Quality Control Mix standard sample \(Sigma\-Aldrich\, Buchs\, Switzerland\) measured on five different mass spectrometer platforms at the Functional Genomics Center Zurich.


.. conda:package:: bioconductor-msqc1

   |downloads_bioconductor-msqc1| |docker_bioconductor-msqc1|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msqc1

   and update with::

      conda update bioconductor-msqc1

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msqc1:<tag>

   (see `bioconductor-msqc1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msqc1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msqc1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msqc1
   :alt:   (downloads)
.. |docker_bioconductor-msqc1| image:: https://quay.io/repository/biocontainers/bioconductor-msqc1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msqc1
.. _`bioconductor-msqc1/tags`: https://quay.io/repository/biocontainers/bioconductor-msqc1?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msqc1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msqc1/README.html