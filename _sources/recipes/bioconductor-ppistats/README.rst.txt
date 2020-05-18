:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppistats'
.. highlight: bash

bioconductor-ppistats
=====================

.. conda:recipe:: bioconductor-ppistats
   :replaces_section_title:

   Protein\-Protein Interaction Statistical Package

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ppiStats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ppistats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppistats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppistats/meta.yaml>`_
   :links: biotools: :biotools:`ppistats`, doi: :doi:`10.1186/gb-2007-8-9-r186`

   Tools for the analysis of protein interaction data.


.. conda:package:: bioconductor-ppistats

   |downloads_bioconductor-ppistats| |docker_bioconductor-ppistats|

   :versions: 1.54.0-0, 1.52.0-1, 1.50.0-1, 1.48.0-0, 1.46.0-0, 1.44.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-category: >=2.54.0,<2.55.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-ppidata: >=0.26.0,<0.27.0
   :depends bioconductor-scisi: >=1.60.0,<1.61.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ppistats

   and update with::

      conda update bioconductor-ppistats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ppistats:<tag>

   (see `bioconductor-ppistats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ppistats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppistats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ppistats
   :alt:   (downloads)
.. |docker_bioconductor-ppistats| image:: https://quay.io/repository/biocontainers/bioconductor-ppistats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppistats
.. _`bioconductor-ppistats/tags`: https://quay.io/repository/biocontainers/bioconductor-ppistats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppistats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppistats/README.html