.. title:: Package Recipe 'bioconductor-go.db'
.. highlight: bash


bioconductor-go.db
==================

.. conda:recipe:: bioconductor-go.db
   :replaces_section_title:

   A set of annotation maps describing the entire Gene Ontology assembled using data from GO

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/GO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-go.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-go.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-go.db/meta.yaml>`_

   


.. conda:package:: bioconductor-go.db

   |downloads_bioconductor-go.db| |docker_bioconductor-go.db|

   :versions: 3.7.0, 3.6.0, 3.5.0, 3.4.2, 3.4.1, 3.4.0, 3.3.0, 3.2.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-go.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-go.db

   and update with::

      conda update bioconductor-go.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-go.db


.. |required_by_bioconductor-go.db| conda:required_by:: bioconductor-go.db
.. |downloads_bioconductor-go.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-go.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-go.db| image:: https://quay.io/repository/biocontainers/bioconductor-go.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-go.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-go.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-go.db/README.html

