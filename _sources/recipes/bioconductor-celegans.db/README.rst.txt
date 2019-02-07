.. title:: Package Recipe 'bioconductor-celegans.db'
.. highlight: bash


bioconductor-celegans.db
========================

.. conda:recipe:: bioconductor-celegans.db
   :replaces_section_title:

   Affymetrix celegans annotation data \(chip celegans\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/celegans.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celegans.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celegans.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celegans.db/meta.yaml>`_

   


.. conda:package:: bioconductor-celegans.db

   |downloads_bioconductor-celegans.db| |docker_bioconductor-celegans.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.ce.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-celegans.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celegans.db

   and update with::

      conda update bioconductor-celegans.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-celegans.db


.. |required_by_bioconductor-celegans.db| conda:required_by:: bioconductor-celegans.db
.. |downloads_bioconductor-celegans.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celegans.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-celegans.db| image:: https://quay.io/repository/biocontainers/bioconductor-celegans.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celegans.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celegans.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celegans.db/README.html

