:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rebird'
.. highlight: bash

r-rebird
========

.. conda:recipe:: r-rebird
   :replaces_section_title:

   A programmatic client for the eBird database\, including functions for searching for bird observations by geographic location \(latitude\, longitude\)\, eBird hotspots\, location identifiers\, by notable sightings\, by region\, and by taxonomic name.

   :homepage: http://github.com/ropensci/rebird
   :license: MIT / MIT
   :recipe: /`r-rebird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rebird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rebird/meta.yaml>`_

   


.. conda:package:: r-rebird

   |downloads_r-rebird| |docker_r-rebird|

   :versions: 1.0.0-1, 1.0.0-0, 0.5.0-2, 0.4.0-0
   
   :depends r-assertthat: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: 
   
   :depends r-httr: >=1.0.0
   
   :depends r-jsonlite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rebird

   and update with::

      conda update r-rebird

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rebird:<tag>

   (see `r-rebird/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rebird| image:: https://img.shields.io/conda/dn/bioconda/r-rebird.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rebird| image:: https://quay.io/repository/biocontainers/r-rebird/status
   :target: https://quay.io/repository/biocontainers/r-rebird
.. _`r-rebird/tags`: https://quay.io/repository/biocontainers/r-rebird?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rebird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rebird/README.html