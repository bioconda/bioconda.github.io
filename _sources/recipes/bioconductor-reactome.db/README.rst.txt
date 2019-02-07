.. title:: Package Recipe 'bioconductor-reactome.db'
.. highlight: bash


bioconductor-reactome.db
========================

.. conda:recipe:: bioconductor-reactome.db
   :replaces_section_title:

   A set of annotation maps for reactome assembled using data from reactome

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/reactome.db.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-reactome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db/meta.yaml>`_

   


.. conda:package:: bioconductor-reactome.db

   |downloads_bioconductor-reactome.db| |docker_bioconductor-reactome.db|

   :versions: 1.66.0, 1.64.0, 1.62.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-reactome.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactome.db

   and update with::

      conda update bioconductor-reactome.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-reactome.db


.. |required_by_bioconductor-reactome.db| conda:required_by:: bioconductor-reactome.db
.. |downloads_bioconductor-reactome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactome.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-reactome.db| image:: https://quay.io/repository/biocontainers/bioconductor-reactome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactome.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html

