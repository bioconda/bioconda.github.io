:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderhelper'
.. highlight: bash

bioconductor-derfinderhelper
============================

.. conda:recipe:: bioconductor-derfinderhelper
   :replaces_section_title:

   Helper package for speeding up the derfinder package when using multiple cores.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/derfinderHelper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderhelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper/meta.yaml>`_
   :links: biotools: :biotools:`derfinderhelper`

   


.. conda:package:: bioconductor-derfinderhelper

   |downloads_bioconductor-derfinderhelper| |docker_bioconductor-derfinderhelper|

   :versions: 1.16.1-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-matrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderhelper

   and update with::

      conda update bioconductor-derfinderhelper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-derfinderhelper:<tag>

   (see `bioconductor-derfinderhelper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderhelper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderhelper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-derfinderhelper| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper
.. _`bioconductor-derfinderhelper/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html