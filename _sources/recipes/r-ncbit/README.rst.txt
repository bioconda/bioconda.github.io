:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ncbit'
.. highlight: bash

r-ncbit
=======

.. conda:recipe:: r-ncbit
   :replaces_section_title:

   making NCBI taxonomic data locally available and searchable as an R object

   :homepage: https://CRAN.R-project.org/package=ncbit
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-ncbit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ncbit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ncbit/meta.yaml>`_

   


.. conda:package:: r-ncbit

   |downloads_r-ncbit| |docker_r-ncbit|

   :versions: 2013.03.29-3, 2013.03.29-2, 2013.03.29-1, 2013.03.29-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ncbit

   and update with::

      conda update r-ncbit

   or use the docker container::

      docker pull quay.io/biocontainers/r-ncbit:<tag>

   (see `r-ncbit/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ncbit| image:: https://img.shields.io/conda/dn/bioconda/r-ncbit.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ncbit
   :alt:   (downloads)
.. |docker_r-ncbit| image:: https://quay.io/repository/biocontainers/r-ncbit/status
   :target: https://quay.io/repository/biocontainers/r-ncbit
.. _`r-ncbit/tags`: https://quay.io/repository/biocontainers/r-ncbit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ncbit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ncbit/README.html