:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-guilds'
.. highlight: bash

r-guilds
========

.. conda:recipe:: r-guilds
   :replaces_section_title:

   A collection of sampling formulas for the unified neutral model of biogeography and biodiversity. Alongside the sampling formulas\, it includes methods to perform maximum likelihood optimization of the sampling formulas\, methods to generate data given the neutral model\, and methods to estimate the expected species abundance distribution. Sampling formulas included in the GUILDS package are the Etienne Sampling Formula \(Etienne 2005\)\, the guild sampling formula\, where guilds are assumed to differ in dispersal ability \(Janzen et al. 2015\)\, and  the guilds sampling formula conditioned on guild size \(Janzen et al. 2015\).

   :homepage: https://github.com/thijsjanzen/GUILDS
   :license: GPL2 / GPL-2
   :recipe: /`r-guilds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-guilds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-guilds/meta.yaml>`_

   


.. conda:package:: r-guilds

   |downloads_r-guilds| |docker_r-guilds|

   :versions: 1.3-1, 1.3-0
   
   :depends libcxx: >=4.0.1
   :depends libgfortran: >=3.0.1,<4.0.0.a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-pracma: 
   :depends r-rcpp: >=0.11.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-guilds

   and update with::

      conda update r-guilds

   or use the docker container::

      docker pull quay.io/biocontainers/r-guilds:<tag>

   (see `r-guilds/tags`_ for valid values for ``<tag>``)


.. |downloads_r-guilds| image:: https://img.shields.io/conda/dn/bioconda/r-guilds.svg?style=flat
   :target: https://anaconda.org/bioconda/r-guilds
   :alt:   (downloads)
.. |docker_r-guilds| image:: https://quay.io/repository/biocontainers/r-guilds/status
   :target: https://quay.io/repository/biocontainers/r-guilds
.. _`r-guilds/tags`: https://quay.io/repository/biocontainers/r-guilds?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-guilds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-guilds/README.html