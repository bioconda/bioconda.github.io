.. title:: Package Recipe 'bioconductor-hgu95av2.db'
.. highlight: bash


bioconductor-hgu95av2.db
========================

.. conda:recipe:: bioconductor-hgu95av2.db
   :replaces_section_title:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95av2\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95av2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95av2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95av2.db

   |downloads_bioconductor-hgu95av2.db| |docker_bioconductor-hgu95av2.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.34.3 :conda:package:`bioconductor-org.hs.eg.db` >=3.3.0 :conda:package:`r-base` 3.4.1* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgu95av2.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95av2.db

   and update with::

      conda update bioconductor-hgu95av2.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95av2.db


.. |required_by_bioconductor-hgu95av2.db| conda:required_by:: bioconductor-hgu95av2.db
.. |downloads_bioconductor-hgu95av2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95av2.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95av2.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95av2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95av2.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95av2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95av2.db/README.html

