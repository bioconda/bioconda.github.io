.. title:: Package Recipe 'bioconductor-mirbaseversions.db'
.. highlight: bash


bioconductor-mirbaseversions.db
===============================

.. conda:recipe:: bioconductor-mirbaseversions.db
   :replaces_section_title:

   Annotation package containing all available miRNA names from 22 versions \(data from http\:\/\/www.mirbase.org\/\).

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/miRBaseVersions.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirbaseversions.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mirbaseversions.db

   |downloads_bioconductor-mirbaseversions.db| |docker_bioconductor-mirbaseversions.db|

   :versions: 1.1.0, 0.99.5

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.42.1,<1.44.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-gtools`  :conda:package:`r-rsqlite`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mirbaseversions.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirbaseversions.db

   and update with::

      conda update bioconductor-mirbaseversions.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirbaseversions.db


.. |required_by_bioconductor-mirbaseversions.db| conda:required_by:: bioconductor-mirbaseversions.db
.. |downloads_bioconductor-mirbaseversions.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseversions.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseversions.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html

