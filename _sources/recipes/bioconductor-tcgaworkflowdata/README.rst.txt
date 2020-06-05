:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgaworkflowdata'
.. highlight: bash

bioconductor-tcgaworkflowdata
=============================

.. conda:recipe:: bioconductor-tcgaworkflowdata
   :replaces_section_title:
   :noindex:

   Data for TCGA Workflow

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/TCGAWorkflowData.html
   :license: GPL-3
   :recipe: /`bioconductor-tcgaworkflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata/meta.yaml>`_

   This experimental data package contains 11 data sets necessary to follow the \"TCGA Workflow\: Analyze cancer genomics and epigenomics data using Bioconductor packages\".


.. conda:package:: bioconductor-tcgaworkflowdata

   |downloads_bioconductor-tcgaworkflowdata| |docker_bioconductor-tcgaworkflowdata|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgaworkflowdata

   and update with::

      conda update bioconductor-tcgaworkflowdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgaworkflowdata:<tag>

   (see `bioconductor-tcgaworkflowdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgaworkflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgaworkflowdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgaworkflowdata
   :alt:   (downloads)
.. |docker_bioconductor-tcgaworkflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata
.. _`bioconductor-tcgaworkflowdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html