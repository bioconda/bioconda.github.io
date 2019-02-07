.. title:: Package Recipe 'bioconductor-illuminahumanv2.db'
.. highlight: bash


bioconductor-illuminahumanv2.db
===============================

.. conda:recipe:: bioconductor-illuminahumanv2.db
   :replaces_section_title:

   Illumina HumanWG6v2 annotation data \(chip illuminaHumanv2\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/illuminaHumanv2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanv2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2.db/meta.yaml>`_

   


.. conda:package:: bioconductor-illuminahumanv2.db

   |downloads_bioconductor-illuminahumanv2.db| |docker_bioconductor-illuminahumanv2.db|

   :versions: 1.26.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-illuminahumanv2.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanv2.db

   and update with::

      conda update bioconductor-illuminahumanv2.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db


.. |required_by_bioconductor-illuminahumanv2.db| conda:required_by:: bioconductor-illuminahumanv2.db
.. |downloads_bioconductor-illuminahumanv2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanv2.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanv2.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanv2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanv2.db/README.html

