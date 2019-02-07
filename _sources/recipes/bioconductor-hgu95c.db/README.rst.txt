.. title:: Package Recipe 'bioconductor-hgu95c.db'
.. highlight: bash


bioconductor-hgu95c.db
======================

.. conda:recipe:: bioconductor-hgu95c.db
   :replaces_section_title:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95c\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95c.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95c.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95c.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95c.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95c.db

   |downloads_bioconductor-hgu95c.db| |docker_bioconductor-hgu95c.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgu95c.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95c.db

   and update with::

      conda update bioconductor-hgu95c.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95c.db


.. |required_by_bioconductor-hgu95c.db| conda:required_by:: bioconductor-hgu95c.db
.. |downloads_bioconductor-hgu95c.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95c.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95c.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95c.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95c.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95c.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95c.db/README.html

