:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicegear'
.. highlight: bash

bioconductor-splicegear
=======================

.. conda:recipe:: bioconductor-splicegear
   :replaces_section_title:

   splicegear

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/splicegear.html
   :license: LGPL
   :recipe: /`bioconductor-splicegear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicegear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicegear/meta.yaml>`_
   :links: biotools: :biotools:`splicegear`, doi: :doi:`10.1038/nmeth.3252`

   A set of tools to work with alternative splicing


.. conda:package:: bioconductor-splicegear

   |downloads_bioconductor-splicegear| |docker_bioconductor-splicegear|

   :versions: 1.58.0-0, 1.56.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-annotate: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicegear

   and update with::

      conda update bioconductor-splicegear

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicegear:<tag>

   (see `bioconductor-splicegear/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicegear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicegear.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicegear
   :alt:   (downloads)
.. |docker_bioconductor-splicegear| image:: https://quay.io/repository/biocontainers/bioconductor-splicegear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicegear
.. _`bioconductor-splicegear/tags`: https://quay.io/repository/biocontainers/bioconductor-splicegear?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicegear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicegear/README.html