.. title:: Package Recipe 'bioconductor-hguatlas13k.db'
.. highlight: bash


bioconductor-hguatlas13k.db
===========================

.. conda:recipe:: bioconductor-hguatlas13k.db
   :replaces_section_title:

   Clontech BD Atlas Long Oligos Human 13K annotation data \(chip hguatlas13k\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hguatlas13k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hguatlas13k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hguatlas13k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hguatlas13k.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hguatlas13k.db

   |downloads_bioconductor-hguatlas13k.db| |docker_bioconductor-hguatlas13k.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hguatlas13k.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hguatlas13k.db

   and update with::

      conda update bioconductor-hguatlas13k.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hguatlas13k.db


.. |required_by_bioconductor-hguatlas13k.db| conda:required_by:: bioconductor-hguatlas13k.db
.. |downloads_bioconductor-hguatlas13k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hguatlas13k.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hguatlas13k.db| image:: https://quay.io/repository/biocontainers/bioconductor-hguatlas13k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hguatlas13k.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hguatlas13k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hguatlas13k.db/README.html

