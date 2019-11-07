:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-promise'
.. highlight: bash

bioconductor-promise
====================

.. conda:recipe:: bioconductor-promise
   :replaces_section_title:

   PRojection Onto the Most Interesting Statistical Evidence

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/PROMISE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-promise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-promise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-promise/meta.yaml>`_
   :links: biotools: :biotools:`promise`, doi: :doi:`10.1093/bioinformatics/btp357`

   A general tool to identify genomic features with a specific biologically interesting pattern of associations with multiple endpoint variables as described in Pounds et. al. \(2009\) Bioinformatics 25\: 2013\-2019


.. conda:package:: bioconductor-promise

   |downloads_bioconductor-promise| |docker_bioconductor-promise|

   :versions: 1.38.0-0, 1.36.0-1, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-gseabase: >=1.48.0,<1.49.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-promise

   and update with::

      conda update bioconductor-promise

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-promise:<tag>

   (see `bioconductor-promise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-promise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-promise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-promise
   :alt:   (downloads)
.. |docker_bioconductor-promise| image:: https://quay.io/repository/biocontainers/bioconductor-promise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-promise
.. _`bioconductor-promise/tags`: https://quay.io/repository/biocontainers/bioconductor-promise?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-promise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-promise/README.html