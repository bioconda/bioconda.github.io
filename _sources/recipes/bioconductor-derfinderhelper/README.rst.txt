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

   :versions: 1.16.1, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-derfinderhelper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderhelper

   and update with::

      conda update bioconductor-derfinderhelper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-derfinderhelper


.. |required_by_bioconductor-derfinderhelper| conda:required_by:: bioconductor-derfinderhelper
.. |downloads_bioconductor-derfinderhelper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderhelper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-derfinderhelper| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html

