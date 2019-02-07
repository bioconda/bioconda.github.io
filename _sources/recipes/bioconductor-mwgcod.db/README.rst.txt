.. title:: Package Recipe 'bioconductor-mwgcod.db'
.. highlight: bash


bioconductor-mwgcod.db
======================

.. conda:recipe:: bioconductor-mwgcod.db
   :replaces_section_title:

   Codelink Mouse Whole Genome Bioarray \(\~36 000 mouse gene targets\) annotation data \(chip mwgcod\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mwgcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mwgcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwgcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwgcod.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mwgcod.db

   |downloads_bioconductor-mwgcod.db| |docker_bioconductor-mwgcod.db|

   :versions: 3.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mwgcod.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mwgcod.db

   and update with::

      conda update bioconductor-mwgcod.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mwgcod.db


.. |required_by_bioconductor-mwgcod.db| conda:required_by:: bioconductor-mwgcod.db
.. |downloads_bioconductor-mwgcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwgcod.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mwgcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-mwgcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwgcod.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwgcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwgcod.db/README.html

