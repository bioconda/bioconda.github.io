.. title:: Package Recipe 'bioconductor-org.ss.eg.db'
.. highlight: bash


bioconductor-org.ss.eg.db
=========================

.. conda:recipe:: bioconductor-org.ss.eg.db
   :replaces_section_title:

   Genome wide annotation for Pig\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.Ss.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.ss.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ss.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ss.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.ss.eg.db

   |downloads_bioconductor-org.ss.eg.db| |docker_bioconductor-org.ss.eg.db|

   :versions: 3.7.0, 3.6.0, 3.5.0, 3.4.2, 3.4.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-org.ss.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.ss.eg.db

   and update with::

      conda update bioconductor-org.ss.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-org.ss.eg.db


.. |required_by_bioconductor-org.ss.eg.db| conda:required_by:: bioconductor-org.ss.eg.db
.. |downloads_bioconductor-org.ss.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.ss.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.ss.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.ss.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.ss.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.ss.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.ss.eg.db/README.html

