.. title:: Package Recipe 'bioconductor-lrbase.dre.eg.db'
.. highlight: bash


bioconductor-lrbase.dre.eg.db
=============================

.. conda:recipe:: bioconductor-lrbase.dre.eg.db
   :replaces_section_title:

   Contains the LRBaseDb object to access data from several related annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/LRBase.Dre.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbase.dre.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.dre.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.dre.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-lrbase.dre.eg.db

   |downloads_bioconductor-lrbase.dre.eg.db| |docker_bioconductor-lrbase.dre.eg.db|

   :versions: 0.99.1

   :depends: :conda:package:`bioconductor-lrbasedbi` >=1.0.0,<1.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rsqlite`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lrbase.dre.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbase.dre.eg.db

   and update with::

      conda update bioconductor-lrbase.dre.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lrbase.dre.eg.db


.. |required_by_bioconductor-lrbase.dre.eg.db| conda:required_by:: bioconductor-lrbase.dre.eg.db
.. |downloads_bioconductor-lrbase.dre.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbase.dre.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lrbase.dre.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-lrbase.dre.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbase.dre.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbase.dre.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbase.dre.eg.db/README.html

