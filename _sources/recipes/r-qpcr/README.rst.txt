.. title:: Package Recipe 'r-qpcr'
.. highlight: bash


r-qpcr
======

.. conda:recipe:: r-qpcr
   :replaces_section_title:

   Model fitting\, optimal model selection and calculation of various features that are essential in the analysis of quantitative real\-time polymerase chain reaction \(qPCR\).

   :homepage: https://CRAN.R-project.org/package=qpcR
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-qpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qpcr/meta.yaml>`_

   


.. conda:package:: r-qpcr

   |downloads_r-qpcr| |docker_r-qpcr|

   :versions: 1.4_1

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-matrix`  :conda:package:`r-minpack.lm`  :conda:package:`r-rgl`  :conda:package:`r-robustbase`  

   :required~by: |required_by_r-qpcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qpcr

   and update with::

      conda update r-qpcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-qpcr


.. |required_by_r-qpcr| conda:required_by:: r-qpcr
.. |downloads_r-qpcr| image:: https://img.shields.io/conda/dn/bioconda/r-qpcr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-qpcr| image:: https://quay.io/repository/biocontainers/r-qpcr/status
   :target: https://quay.io/repository/biocontainers/r-qpcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qpcr/README.html

