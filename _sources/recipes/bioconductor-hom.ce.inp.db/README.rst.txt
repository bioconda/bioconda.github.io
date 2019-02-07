.. title:: Package Recipe 'bioconductor-hom.ce.inp.db'
.. highlight: bash


bioconductor-hom.ce.inp.db
==========================

.. conda:recipe:: bioconductor-hom.ce.inp.db
   :replaces_section_title:

   Homology information for Caenorhabditis elegans from Inparanoid assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hom.Ce.inp.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hom.ce.inp.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.ce.inp.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.ce.inp.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hom.ce.inp.db

   |downloads_bioconductor-hom.ce.inp.db| |docker_bioconductor-hom.ce.inp.db|

   :versions: 3.1.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hom.ce.inp.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hom.ce.inp.db

   and update with::

      conda update bioconductor-hom.ce.inp.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hom.ce.inp.db


.. |required_by_bioconductor-hom.ce.inp.db| conda:required_by:: bioconductor-hom.ce.inp.db
.. |downloads_bioconductor-hom.ce.inp.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hom.ce.inp.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hom.ce.inp.db| image:: https://quay.io/repository/biocontainers/bioconductor-hom.ce.inp.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hom.ce.inp.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hom.ce.inp.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hom.ce.inp.db/README.html

