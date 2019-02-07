.. title:: Package Recipe 'bioconductor-tcgaworkflowdata'
.. highlight: bash


bioconductor-tcgaworkflowdata
=============================

.. conda:recipe:: bioconductor-tcgaworkflowdata
   :replaces_section_title:

   This experimental data package contains 11 data sets necessary to follow the \"TCGA Workflow\: Analyze cancer genomics and epigenomics data using Bioconductor packages\".

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/TCGAWorkflowData.html
   :license: GPL-3
   :recipe: /`bioconductor-tcgaworkflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata/meta.yaml>`_

   


.. conda:package:: bioconductor-tcgaworkflowdata

   |downloads_bioconductor-tcgaworkflowdata| |docker_bioconductor-tcgaworkflowdata|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tcgaworkflowdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgaworkflowdata

   and update with::

      conda update bioconductor-tcgaworkflowdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata


.. |required_by_bioconductor-tcgaworkflowdata| conda:required_by:: bioconductor-tcgaworkflowdata
.. |downloads_bioconductor-tcgaworkflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgaworkflowdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tcgaworkflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html

