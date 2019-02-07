.. title:: Package Recipe 'r-leapp'
.. highlight: bash


r-leapp
=======

.. conda:recipe:: r-leapp
   :replaces_section_title:

   These functions take a gene expression value matrix\, a primary covariate vector\, an additional known covariates matrix.  A two stage analysis is applied to counter the effects of latent variables on the rankings of hypotheses.  The estimation and adjustment of latent effects are proposed by Sun\, Zhang and Owen \(2011\).  \"leapp\" is developed in the context of microarray experiments\, but may be used as a general tool for high throughput data sets where dependence may be involved.

   :homepage: https://CRAN.R-project.org/package=leapp
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-leapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leapp/meta.yaml>`_

   


.. conda:package:: r-leapp

   |downloads_r-leapp| |docker_r-leapp|

   :versions: 1.2

   :depends: :conda:package:`bioconductor-sva`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-mass`  

   :required~by: |required_by_r-leapp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-leapp

   and update with::

      conda update r-leapp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-leapp


.. |required_by_r-leapp| conda:required_by:: r-leapp
.. |downloads_r-leapp| image:: https://img.shields.io/conda/dn/bioconda/r-leapp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-leapp| image:: https://quay.io/repository/biocontainers/r-leapp/status
   :target: https://quay.io/repository/biocontainers/r-leapp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-leapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-leapp/README.html

