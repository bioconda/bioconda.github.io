.. title:: Package Recipe 'r-mvr'
.. highlight: bash


r-mvr
=====

.. conda:recipe:: r-mvr
   :replaces_section_title:

   This is a non\-parametric method for joint adaptive mean\-variance regularization and variance stabilization of high\-dimensional data. It is suited for handling difficult problems posed by high\-dimensional multivariate datasets \(p \>\> n paradigm\). Among those are that the variance is often a function of the mean\, variable\-specific estimators of variances are not reliable\, and tests statistics have low powers due to a lack of degrees of freedom. Key features include\: \(i\) Normalization and\/or variance stabilization of the data\, \(ii\) Computation of mean\-variance\-regularized t\-statistics \(F\-statistics to follow\)\, \(iii\) Generation of diverse diagnostic plots\, \(iv\) Computationally efficient implementation using C\/C\+\+ interfacing and an option for parallel computing to enjoy a faster and easier experience in the R environment.

   :homepage: https://github.com/jedazard/MVR
   :license: GPL3 / GPL (>= 3) | file LICENSE
   :recipe: /`r-mvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mvr/meta.yaml>`_

   


.. conda:package:: r-mvr

   |downloads_r-mvr| |docker_r-mvr|

   :versions: 1.33.0

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-statmod`  

   :required~by: |required_by_r-mvr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mvr

   and update with::

      conda update r-mvr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-mvr


.. |required_by_r-mvr| conda:required_by:: r-mvr
.. |downloads_r-mvr| image:: https://img.shields.io/conda/dn/bioconda/r-mvr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mvr| image:: https://quay.io/repository/biocontainers/r-mvr/status
   :target: https://quay.io/repository/biocontainers/r-mvr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mvr/README.html

