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

   :versions: 1.0.0, 0.5.0, 0.4.0

   :depends: :conda:package:`r-assertthat`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-httr` >=1.0.0 :conda:package:`r-jsonlite`  

   :required~by: |required_by_r-rebird|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rebird

   and update with::

      conda update r-rebird

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rebird


.. |required_by_r-rebird| conda:required_by:: r-rebird
.. |downloads_r-rebird| image:: https://img.shields.io/conda/dn/bioconda/r-rebird.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rebird| image:: https://quay.io/repository/biocontainers/r-rebird/status
   :target: https://quay.io/repository/biocontainers/r-rebird







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rebird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rebird/README.html

