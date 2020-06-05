:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vbmp'
.. highlight: bash

bioconductor-vbmp
=================

.. conda:recipe:: bioconductor-vbmp
   :replaces_section_title:
   :noindex:

   Variational Bayesian Multinomial Probit Regression

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/vbmp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-vbmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vbmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vbmp/meta.yaml>`_
   :links: biotools: :biotools:`vbmp`, doi: :doi:`10.1093/bioinformatics/btm535`

   Variational Bayesian Multinomial Probit Regression with Gaussian Process Priors. It estimates class membership posterior probability employing variational and sparse approximation to the full posterior. This software also incorporates feature weighting by means of Automatic Relevance Determination.


.. conda:package:: bioconductor-vbmp

   |downloads_bioconductor-vbmp| |docker_bioconductor-vbmp|

   :versions:
      
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vbmp

   and update with::

      conda update bioconductor-vbmp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vbmp:<tag>

   (see `bioconductor-vbmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vbmp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vbmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vbmp
   :alt:   (downloads)
.. |docker_bioconductor-vbmp| image:: https://quay.io/repository/biocontainers/bioconductor-vbmp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vbmp
.. _`bioconductor-vbmp/tags`: https://quay.io/repository/biocontainers/bioconductor-vbmp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vbmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vbmp/README.html