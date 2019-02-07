.. title:: Package Recipe 'bioconductor-mirnatap.db'
.. highlight: bash


bioconductor-mirnatap.db
========================

.. conda:recipe:: bioconductor-mirnatap.db
   :replaces_section_title:

   This package holds the database for miRNAtap.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/miRNAtap.db.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mirnatap.db

   |downloads_bioconductor-mirnatap.db| |docker_bioconductor-mirnatap.db|

   :versions: 0.99.10

   :depends: :conda:package:`bioconductor-annotationdbi`  :conda:package:`bioconductor-mirnatap`  :conda:package:`r-base` 3.4.1* :conda:package:`r-dbi`  :conda:package:`r-rsqlite`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mirnatap.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnatap.db

   and update with::

      conda update bioconductor-mirnatap.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirnatap.db


.. |required_by_bioconductor-mirnatap.db| conda:required_by:: bioconductor-mirnatap.db
.. |downloads_bioconductor-mirnatap.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html

