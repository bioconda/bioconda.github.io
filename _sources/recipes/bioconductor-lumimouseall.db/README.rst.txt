.. title:: Package Recipe 'bioconductor-lumimouseall.db'
.. highlight: bash


bioconductor-lumimouseall.db
============================

.. conda:recipe:: bioconductor-lumimouseall.db
   :replaces_section_title:

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/lumiMouseAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumimouseall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db/meta.yaml>`_

   


.. conda:package:: bioconductor-lumimouseall.db

   |downloads_bioconductor-lumimouseall.db| |docker_bioconductor-lumimouseall.db|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lumimouseall.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumimouseall.db

   and update with::

      conda update bioconductor-lumimouseall.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lumimouseall.db


.. |required_by_bioconductor-lumimouseall.db| conda:required_by:: bioconductor-lumimouseall.db
.. |downloads_bioconductor-lumimouseall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseall.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html

