.. title:: Package Recipe 'bioconductor-do.db'
.. highlight: bash


bioconductor-do.db
==================

.. conda:recipe:: bioconductor-do.db
   :replaces_section_title:

   A set of annotation maps describing the entire Disease Ontology assembled using data from DO

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/DO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-do.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db/meta.yaml>`_

   


.. conda:package:: bioconductor-do.db

   |downloads_bioconductor-do.db| |docker_bioconductor-do.db|

   :versions: 2.9

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.9.7 :conda:package:`r` >=2.7.0 

   :required~by: |required_by_bioconductor-do.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-do.db

   and update with::

      conda update bioconductor-do.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-do.db


.. |required_by_bioconductor-do.db| conda:required_by:: bioconductor-do.db
.. |downloads_bioconductor-do.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-do.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-do.db| image:: https://quay.io/repository/biocontainers/bioconductor-do.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-do.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-do.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-do.db/README.html

