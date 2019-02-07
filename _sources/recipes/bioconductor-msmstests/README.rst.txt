.. title:: Package Recipe 'bioconductor-msmstests'
.. highlight: bash


bioconductor-msmstests
======================

.. conda:recipe:: bioconductor-msmstests
   :replaces_section_title:

   Statistical tests for label\-free LC\-MS\/MS data by spectral counts\, to discover differentially expressed proteins between two biological conditions. Three tests are available\: Poisson GLM regression\, quasi\-likelihood GLM regression\, and the negative binomial of the edgeR package.The three models admit blocking factors to control for nuissance variables.To assure a good level of reproducibility a post\-test filter is available\, where we may set the minimum effect size considered biologicaly relevant\, and the minimum expression of the most abundant condition.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/msmsTests.html
   :license: GPL-2
   :recipe: /`bioconductor-msmstests <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmstests>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmstests/meta.yaml>`_

   


.. conda:package:: bioconductor-msmstests

   |downloads_bioconductor-msmstests| |docker_bioconductor-msmstests|

   :versions: 1.20.1

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-msmseda` >=1.20.0,<1.21.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-msmstests|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msmstests

   and update with::

      conda update bioconductor-msmstests

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msmstests


.. |required_by_bioconductor-msmstests| conda:required_by:: bioconductor-msmstests
.. |downloads_bioconductor-msmstests| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmstests.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msmstests| image:: https://quay.io/repository/biocontainers/bioconductor-msmstests/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmstests







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmstests/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmstests/README.html

