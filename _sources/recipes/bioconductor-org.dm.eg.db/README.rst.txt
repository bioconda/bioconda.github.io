.. title:: Package Recipe 'bioconductor-org.dm.eg.db'
.. highlight: bash


bioconductor-org.dm.eg.db
=========================

.. conda:recipe:: bioconductor-org.dm.eg.db
   :replaces_section_title:

   Genome wide annotation for Fly\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.Dm.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.dm.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dm.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dm.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.dm.eg.db

   |downloads_bioconductor-org.dm.eg.db| |docker_bioconductor-org.dm.eg.db|

   :versions: 3.7.0, 3.6.0, 3.5.0, 3.4.2, 3.4.1, 3.4.0, 3.3.0, 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-org.dm.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.dm.eg.db

   and update with::

      conda update bioconductor-org.dm.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-org.dm.eg.db


.. |required_by_bioconductor-org.dm.eg.db| conda:required_by:: bioconductor-org.dm.eg.db
.. |downloads_bioconductor-org.dm.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.dm.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.dm.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.dm.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.dm.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.dm.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.dm.eg.db/README.html

