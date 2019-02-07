.. title:: Package Recipe 'bioconductor-huo22.db'
.. highlight: bash


bioconductor-huo22.db
=====================

.. conda:recipe:: bioconductor-huo22.db
   :replaces_section_title:

   FHCRC Genomics Shared Resource HuO22 Annotation Data \(HuO22\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/HuO22.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-huo22.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huo22.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huo22.db/meta.yaml>`_

   


.. conda:package:: bioconductor-huo22.db

   |downloads_bioconductor-huo22.db| |docker_bioconductor-huo22.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-huo22.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-huo22.db

   and update with::

      conda update bioconductor-huo22.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-huo22.db


.. |required_by_bioconductor-huo22.db| conda:required_by:: bioconductor-huo22.db
.. |downloads_bioconductor-huo22.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huo22.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-huo22.db| image:: https://quay.io/repository/biocontainers/bioconductor-huo22.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huo22.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huo22.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huo22.db/README.html

