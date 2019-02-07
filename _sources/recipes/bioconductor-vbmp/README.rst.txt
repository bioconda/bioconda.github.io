.. title:: Package Recipe 'bioconductor-vbmp'
.. highlight: bash


bioconductor-vbmp
=================

.. conda:recipe:: bioconductor-vbmp
   :replaces_section_title:

   Variational Bayesian Multinomial Probit Regression with Gaussian Process Priors. It estimates class membership posterior probability employing variational and sparse approximation to the full posterior. This software also incorporates feature weighting by means of Automatic Relevance Determination.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/vbmp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-vbmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vbmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vbmp/meta.yaml>`_
   :links: biotools: :biotools:`vbmp`, doi: :doi:`10.1093/bioinformatics/btm535`

   


.. conda:package:: bioconductor-vbmp

   |downloads_bioconductor-vbmp| |docker_bioconductor-vbmp|

   :versions: 1.50.0, 1.48.0, 1.46.0, 1.44.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-vbmp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vbmp

   and update with::

      conda update bioconductor-vbmp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-vbmp


.. |required_by_bioconductor-vbmp| conda:required_by:: bioconductor-vbmp
.. |downloads_bioconductor-vbmp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vbmp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-vbmp| image:: https://quay.io/repository/biocontainers/bioconductor-vbmp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vbmp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vbmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vbmp/README.html

