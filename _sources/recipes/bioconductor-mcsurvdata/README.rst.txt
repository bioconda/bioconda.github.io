.. title:: Package Recipe 'bioconductor-mcsurvdata'
.. highlight: bash


bioconductor-mcsurvdata
=======================

.. conda:recipe:: bioconductor-mcsurvdata
   :replaces_section_title:

   This package stores two merged expressionSet objects that contain the gene expression profile and clinical information of \-a\- six breast cancer cohorts and \-b\- four colorectal cancer cohorts. Breast cancer data are employed in the vignette of the hrunbiased package for survival analysis of gene signatures.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/mcsurvdata.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-mcsurvdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsurvdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsurvdata/meta.yaml>`_

   


.. conda:package:: bioconductor-mcsurvdata

   |downloads_bioconductor-mcsurvdata| |docker_bioconductor-mcsurvdata|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mcsurvdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcsurvdata

   and update with::

      conda update bioconductor-mcsurvdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mcsurvdata


.. |required_by_bioconductor-mcsurvdata| conda:required_by:: bioconductor-mcsurvdata
.. |downloads_bioconductor-mcsurvdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcsurvdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mcsurvdata| image:: https://quay.io/repository/biocontainers/bioconductor-mcsurvdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcsurvdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcsurvdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcsurvdata/README.html

