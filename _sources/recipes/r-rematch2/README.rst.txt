:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rematch2'
.. highlight: bash

r-rematch2
==========

.. conda:recipe:: r-rematch2
   :replaces_section_title:

   Wrappers on \'regexpr\' and \'gregexpr\' to return the match results in tidy data frames.

   :homepage: https://github.com/r-lib/rematch2#readme
   :license: MIT / MIT
   :recipe: /`r-rematch2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rematch2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rematch2/meta.yaml>`_

   


.. conda:package:: r-rematch2

   |downloads_r-rematch2| |docker_r-rematch2|

   :versions: 2.0.1-0
   
   :depends r-base: 3.3.2*
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rematch2

   and update with::

      conda update r-rematch2

   or use the docker container::

      docker pull quay.io/biocontainers/r-rematch2:<tag>

   (see `r-rematch2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rematch2| image:: https://img.shields.io/conda/dn/bioconda/r-rematch2.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rematch2| image:: https://quay.io/repository/biocontainers/r-rematch2/status
   :target: https://quay.io/repository/biocontainers/r-rematch2
.. _`r-rematch2/tags`: https://quay.io/repository/biocontainers/r-rematch2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rematch2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rematch2/README.html