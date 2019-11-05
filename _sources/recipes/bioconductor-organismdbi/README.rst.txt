:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-organismdbi'
.. highlight: bash

bioconductor-organismdbi
========================

.. conda:recipe:: bioconductor-organismdbi
   :replaces_section_title:

   The package enables a simple unified interface to several annotation packages each of which has its own schema by taking advantage of the fact that each of these packages implements a select methods.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/OrganismDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-organismdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organismdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organismdbi/meta.yaml>`_
   :links: biotools: :biotools:`organismdbi`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-organismdbi

   |downloads_bioconductor-organismdbi| |docker_bioconductor-organismdbi|

   :versions: 1.28.0-0, 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.1-0, 1.14.1-0, 1.12.1-0, 1.12.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rbgl: >=1.62.0,<1.63.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-organismdbi

   and update with::

      conda update bioconductor-organismdbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-organismdbi:<tag>

   (see `bioconductor-organismdbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-organismdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-organismdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-organismdbi
   :alt:   (downloads)
.. |docker_bioconductor-organismdbi| image:: https://quay.io/repository/biocontainers/bioconductor-organismdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-organismdbi
.. _`bioconductor-organismdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-organismdbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-organismdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-organismdbi/README.html