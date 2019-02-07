.. title:: Package Recipe 'bioconductor-org.pt.eg.db'
.. highlight: bash


bioconductor-org.pt.eg.db
=========================

.. conda:recipe:: bioconductor-org.pt.eg.db
   :replaces_section_title:

   Genome wide annotation for Chimp\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.Pt.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.pt.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.pt.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.pt.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.pt.eg.db

   |downloads_bioconductor-org.pt.eg.db| |docker_bioconductor-org.pt.eg.db|

   :versions: 3.7.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-org.pt.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.pt.eg.db

   and update with::

      conda update bioconductor-org.pt.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-org.pt.eg.db


.. |required_by_bioconductor-org.pt.eg.db| conda:required_by:: bioconductor-org.pt.eg.db
.. |downloads_bioconductor-org.pt.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.pt.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.pt.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.pt.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.pt.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.pt.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.pt.eg.db/README.html

