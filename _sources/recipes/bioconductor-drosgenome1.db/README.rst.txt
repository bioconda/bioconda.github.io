.. title:: Package Recipe 'bioconductor-drosgenome1.db'
.. highlight: bash


bioconductor-drosgenome1.db
===========================

.. conda:recipe:: bioconductor-drosgenome1.db
   :replaces_section_title:

   Affymetrix Drosophila Genome Array annotation data \(chip drosgenome1\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/drosgenome1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-drosgenome1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1.db/meta.yaml>`_

   


.. conda:package:: bioconductor-drosgenome1.db

   |downloads_bioconductor-drosgenome1.db| |docker_bioconductor-drosgenome1.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.dm.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-drosgenome1.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drosgenome1.db

   and update with::

      conda update bioconductor-drosgenome1.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-drosgenome1.db


.. |required_by_bioconductor-drosgenome1.db| conda:required_by:: bioconductor-drosgenome1.db
.. |downloads_bioconductor-drosgenome1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drosgenome1.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-drosgenome1.db| image:: https://quay.io/repository/biocontainers/bioconductor-drosgenome1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drosgenome1.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drosgenome1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drosgenome1.db/README.html

