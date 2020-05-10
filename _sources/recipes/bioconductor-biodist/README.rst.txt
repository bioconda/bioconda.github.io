:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodist'
.. highlight: bash

bioconductor-biodist
====================

.. conda:recipe:: bioconductor-biodist
   :replaces_section_title:

   Different distance measures

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/bioDist.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biodist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodist/meta.yaml>`_
   :links: biotools: :biotools:`biodist`, doi: :doi:`10.1038/nmeth.3252`

   A collection of software tools for calculating distance measures.


.. conda:package:: bioconductor-biodist

   |downloads_bioconductor-biodist| |docker_bioconductor-biodist|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodist

   and update with::

      conda update bioconductor-biodist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodist:<tag>

   (see `bioconductor-biodist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodist
   :alt:   (downloads)
.. |docker_bioconductor-biodist| image:: https://quay.io/repository/biocontainers/bioconductor-biodist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodist
.. _`bioconductor-biodist/tags`: https://quay.io/repository/biocontainers/bioconductor-biodist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodist/README.html