.. title:: Package Recipe 'bioconductor-org.ce.eg.db'
.. highlight: bash


bioconductor-org.ce.eg.db
=========================

.. conda:recipe:: bioconductor-org.ce.eg.db
   :replaces_section_title:

   Genome wide annotation for Worm\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.Ce.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.ce.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ce.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ce.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.ce.eg.db

   |downloads_bioconductor-org.ce.eg.db| |docker_bioconductor-org.ce.eg.db|

   :versions: 3.7.0, 3.6.0, 3.5.0, 3.4.1, 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-org.ce.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.ce.eg.db

   and update with::

      conda update bioconductor-org.ce.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-org.ce.eg.db


.. |required_by_bioconductor-org.ce.eg.db| conda:required_by:: bioconductor-org.ce.eg.db
.. |downloads_bioconductor-org.ce.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.ce.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.ce.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.ce.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.ce.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.ce.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.ce.eg.db/README.html

