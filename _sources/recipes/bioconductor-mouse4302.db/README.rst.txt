.. title:: Package Recipe 'bioconductor-mouse4302.db'
.. highlight: bash


bioconductor-mouse4302.db
=========================

.. conda:recipe:: bioconductor-mouse4302.db
   :replaces_section_title:

   Affymetrix Mouse Genome 430 2.0 Array annotation data \(chip mouse4302\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mouse4302.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mouse4302.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mouse4302.db

   |downloads_bioconductor-mouse4302.db| |docker_bioconductor-mouse4302.db|

   :versions: 3.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mouse4302.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mouse4302.db

   and update with::

      conda update bioconductor-mouse4302.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mouse4302.db


.. |required_by_bioconductor-mouse4302.db| conda:required_by:: bioconductor-mouse4302.db
.. |downloads_bioconductor-mouse4302.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mouse4302.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mouse4302.db| image:: https://quay.io/repository/biocontainers/bioconductor-mouse4302.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mouse4302.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mouse4302.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mouse4302.db/README.html

