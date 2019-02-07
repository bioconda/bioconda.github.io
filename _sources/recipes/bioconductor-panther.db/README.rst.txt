.. title:: Package Recipe 'bioconductor-panther.db'
.. highlight: bash


bioconductor-panther.db
=======================

.. conda:recipe:: bioconductor-panther.db
   :replaces_section_title:

   A set of annotation maps describing the entire Gene Ontology assembled using data from PANTHER.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/PANTHER.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panther.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db/meta.yaml>`_

   


.. conda:package:: bioconductor-panther.db

   |downloads_bioconductor-panther.db| |docker_bioconductor-panther.db|

   :versions: 1.0.4

   :depends: :conda:package:`bioconductor-annotationdbi`  :conda:package:`r-base` 3.4.1* :conda:package:`r-rsqlite`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-panther.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panther.db

   and update with::

      conda update bioconductor-panther.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-panther.db


.. |required_by_bioconductor-panther.db| conda:required_by:: bioconductor-panther.db
.. |downloads_bioconductor-panther.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panther.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-panther.db| image:: https://quay.io/repository/biocontainers/bioconductor-panther.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panther.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panther.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panther.db/README.html

