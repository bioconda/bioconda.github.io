.. title:: Package Recipe 'bioconductor-kegg.db'
.. highlight: bash


bioconductor-kegg.db
====================

.. conda:recipe:: bioconductor-kegg.db
   :replaces_section_title:

   A set of annotation maps for KEGG assembled using data from KEGG

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/KEGG.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-kegg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-kegg.db

   |downloads_bioconductor-kegg.db| |docker_bioconductor-kegg.db|

   :versions: 3.2.3, 3.2.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.34.3 :conda:package:`r` 3.3.1* 

   :required~by: |required_by_bioconductor-kegg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kegg.db

   and update with::

      conda update bioconductor-kegg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-kegg.db


.. |required_by_bioconductor-kegg.db| conda:required_by:: bioconductor-kegg.db
.. |downloads_bioconductor-kegg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-kegg.db| image:: https://quay.io/repository/biocontainers/bioconductor-kegg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegg.db/README.html

