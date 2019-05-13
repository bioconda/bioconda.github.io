:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-taxa'
.. highlight: bash

r-taxa
======

.. conda:recipe:: r-taxa
   :replaces_section_title:

   Provides taxonomic classes for groupings of taxonomic names without data\, and those with data. Methods provided are \"taxonomically aware\"\, in that they know about ordering of ranks\, and methods that filter based on taxonomy also filter associated data.

   :homepage: https://github.com/ropensci/taxa
   :license: MIT / MIT
   :recipe: /`r-taxa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-taxa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-taxa/meta.yaml>`_

   


.. conda:package:: r-taxa

   |downloads_r-taxa| |docker_r-taxa|

   :versions: 0.3.2-0, 0.3.1-1, 0.3.1-0, 0.2.1-1, 0.2.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-lazyeval: 
   :depends r-magrittr: 
   :depends r-r6: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-taxize: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-taxa

   and update with::

      conda update r-taxa

   or use the docker container::

      docker pull quay.io/biocontainers/r-taxa:<tag>

   (see `r-taxa/tags`_ for valid values for ``<tag>``)


.. |downloads_r-taxa| image:: https://img.shields.io/conda/dn/bioconda/r-taxa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-taxa
   :alt:   (downloads)
.. |docker_r-taxa| image:: https://quay.io/repository/biocontainers/r-taxa/status
   :target: https://quay.io/repository/biocontainers/r-taxa
.. _`r-taxa/tags`: https://quay.io/repository/biocontainers/r-taxa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-taxa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-taxa/README.html