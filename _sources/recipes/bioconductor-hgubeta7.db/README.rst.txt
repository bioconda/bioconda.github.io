.. title:: Package Recipe 'bioconductor-hgubeta7.db'
.. highlight: bash


bioconductor-hgubeta7.db
========================

.. conda:recipe:: bioconductor-hgubeta7.db
   :replaces_section_title:

   Unknown annotation data \(chip hgubeta7\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgubeta7.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgubeta7.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgubeta7.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgubeta7.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgubeta7.db

   |downloads_bioconductor-hgubeta7.db| |docker_bioconductor-hgubeta7.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgubeta7.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgubeta7.db

   and update with::

      conda update bioconductor-hgubeta7.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgubeta7.db


.. |required_by_bioconductor-hgubeta7.db| conda:required_by:: bioconductor-hgubeta7.db
.. |downloads_bioconductor-hgubeta7.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgubeta7.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgubeta7.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgubeta7.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgubeta7.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgubeta7.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgubeta7.db/README.html

