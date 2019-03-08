:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bac'
.. highlight: bash

bioconductor-bac
================

.. conda:recipe:: bioconductor-bac
   :replaces_section_title:

   This package uses a Bayesian hierarchical model to detect enriched regions from ChIP\-chip experiments

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BAC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bac/meta.yaml>`_
   :links: biotools: :biotools:`bac`, doi: :doi:`10.1111/j.1541-0420.2007.00899.x`

   


.. conda:package:: bioconductor-bac

   |downloads_bioconductor-bac| |docker_bioconductor-bac|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bac

   and update with::

      conda update bioconductor-bac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bac:<tag>

   (see `bioconductor-bac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bac| image:: https://quay.io/repository/biocontainers/bioconductor-bac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bac
.. _`bioconductor-bac/tags`: https://quay.io/repository/biocontainers/bioconductor-bac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bac/README.html