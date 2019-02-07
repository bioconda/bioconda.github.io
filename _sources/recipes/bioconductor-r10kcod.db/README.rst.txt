.. title:: Package Recipe 'bioconductor-r10kcod.db'
.. highlight: bash


bioconductor-r10kcod.db
=======================

.. conda:recipe:: bioconductor-r10kcod.db
   :replaces_section_title:

   Codelink UniSet Rat I Bioarray \(\~10 000 rat gene targets\) annotation data \(chip r10kcod\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/r10kcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-r10kcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r10kcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r10kcod.db/meta.yaml>`_

   


.. conda:package:: bioconductor-r10kcod.db

   |downloads_bioconductor-r10kcod.db| |docker_bioconductor-r10kcod.db|

   :versions: 3.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-r10kcod.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r10kcod.db

   and update with::

      conda update bioconductor-r10kcod.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-r10kcod.db


.. |required_by_bioconductor-r10kcod.db| conda:required_by:: bioconductor-r10kcod.db
.. |downloads_bioconductor-r10kcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r10kcod.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-r10kcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-r10kcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r10kcod.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r10kcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r10kcod.db/README.html

