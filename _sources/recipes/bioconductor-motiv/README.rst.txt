:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motiv'
.. highlight: bash

bioconductor-motiv
==================

.. conda:recipe:: bioconductor-motiv
   :replaces_section_title:

   This package makes use of STAMP for comparing a set of motifs to a given database \(e.g. JASPAR\). It can also be used to visualize motifs\, motif distributions\, modules and filter motifs.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MotIV.html
   :license: GPL-2
   :recipe: /`bioconductor-motiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiv/meta.yaml>`_
   :links: biotools: :biotools:`motiv`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-motiv

   |downloads_bioconductor-motiv| |docker_bioconductor-motiv|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-1, 1.34.0-0, 1.32.0-1, 1.32.0-0, 1.30.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rgadem: >=2.30.0,<2.31.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends gsl: >=2.4,<2.5.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openblas: >=0.3.3,<0.3.4.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motiv

   and update with::

      conda update bioconductor-motiv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motiv:<tag>

   (see `bioconductor-motiv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motiv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motiv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motiv
   :alt:   (downloads)
.. |docker_bioconductor-motiv| image:: https://quay.io/repository/biocontainers/bioconductor-motiv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motiv
.. _`bioconductor-motiv/tags`: https://quay.io/repository/biocontainers/bioconductor-motiv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motiv/README.html