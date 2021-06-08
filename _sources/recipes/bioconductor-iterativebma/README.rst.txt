:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterativebma'
.. highlight: bash

bioconductor-iterativebma
=========================

.. conda:recipe:: bioconductor-iterativebma
   :replaces_section_title:
   :noindex:

   The Iterative Bayesian Model Averaging \(BMA\) algorithm

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/iterativeBMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebma/meta.yaml>`_
   :links: biotools: :biotools:`iterativebma`, doi: :doi:`10.1186/gb-2008-9-7-r118`

   The iterative Bayesian Model Averaging \(BMA\) algorithm is a variable selection and classification algorithm with an application of classifying 2\-class microarray samples\, as described in Yeung\, Bumgarner and Raftery \(Bioinformatics 2005\, 21\: 2394\-2402\).


.. conda:package:: bioconductor-iterativebma

   |downloads_bioconductor-iterativebma| |docker_bioconductor-iterativebma|

   :versions:
      
      

      ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bma: 
   :depends r-leaps: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterativebma

   and update with::

      conda update bioconductor-iterativebma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterativebma:<tag>

   (see `bioconductor-iterativebma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterativebma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterativebma
   :alt:   (downloads)
.. |docker_bioconductor-iterativebma| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebma
.. _`bioconductor-iterativebma/tags`: https://quay.io/repository/biocontainers/bioconductor-iterativebma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebma/README.html