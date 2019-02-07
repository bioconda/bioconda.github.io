.. title:: Package Recipe 'bioconductor-bovine.db'
.. highlight: bash


bioconductor-bovine.db
======================

.. conda:recipe:: bioconductor-bovine.db
   :replaces_section_title:

   Affymetrix bovine annotation data \(chip bovine\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/bovine.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bovine.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovine.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovine.db/meta.yaml>`_

   


.. conda:package:: bioconductor-bovine.db

   |downloads_bioconductor-bovine.db| |docker_bioconductor-bovine.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.bt.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-bovine.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bovine.db

   and update with::

      conda update bioconductor-bovine.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bovine.db


.. |required_by_bioconductor-bovine.db| conda:required_by:: bioconductor-bovine.db
.. |downloads_bioconductor-bovine.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bovine.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bovine.db| image:: https://quay.io/repository/biocontainers/bioconductor-bovine.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bovine.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bovine.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bovine.db/README.html

