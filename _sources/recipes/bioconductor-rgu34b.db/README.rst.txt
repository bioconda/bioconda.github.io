.. title:: Package Recipe 'bioconductor-rgu34b.db'
.. highlight: bash


bioconductor-rgu34b.db
======================

.. conda:recipe:: bioconductor-rgu34b.db
   :replaces_section_title:

   Affymetrix Rat Genome U34 Set annotation data \(chip rgu34b\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rgu34b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgu34b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34b.db/meta.yaml>`_

   


.. conda:package:: bioconductor-rgu34b.db

   |downloads_bioconductor-rgu34b.db| |docker_bioconductor-rgu34b.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rgu34b.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgu34b.db

   and update with::

      conda update bioconductor-rgu34b.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgu34b.db


.. |required_by_bioconductor-rgu34b.db| conda:required_by:: bioconductor-rgu34b.db
.. |downloads_bioconductor-rgu34b.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgu34b.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgu34b.db| image:: https://quay.io/repository/biocontainers/bioconductor-rgu34b.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgu34b.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgu34b.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgu34b.db/README.html

