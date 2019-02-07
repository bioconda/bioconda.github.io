.. title:: Package Recipe 'bioconductor-simbindprofiles'
.. highlight: bash


bioconductor-simbindprofiles
============================

.. conda:recipe:: bioconductor-simbindprofiles
   :replaces_section_title:

   SimBindProfiles identifies common and unique binding regions in genome tiling array data. This package does not rely on peak calling\, but directly compares binding profiles processed on the same array platform. It implements a simple threshold approach\, thus allowing retrieval of commonly and differentially bound regions between datasets as well as events of compensation and increased binding.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SimBindProfiles.html
   :license: GPL-3
   :recipe: /`bioconductor-simbindprofiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles/meta.yaml>`_
   :links: biotools: :biotools:`simbindprofiles`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-simbindprofiles

   |downloads_bioconductor-simbindprofiles| |docker_bioconductor-simbindprofiles|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-ringo` >=1.46.0,<1.47.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mclust`  

   :required~by: |required_by_bioconductor-simbindprofiles|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simbindprofiles

   and update with::

      conda update bioconductor-simbindprofiles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-simbindprofiles


.. |required_by_bioconductor-simbindprofiles| conda:required_by:: bioconductor-simbindprofiles
.. |downloads_bioconductor-simbindprofiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbindprofiles.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simbindprofiles| image:: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html

