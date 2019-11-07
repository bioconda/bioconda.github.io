:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hom.rn.inp.db'
.. highlight: bash

bioconductor-hom.rn.inp.db
==========================

.. conda:recipe:: bioconductor-hom.rn.inp.db
   :replaces_section_title:

   Homology information for Rattus norvegicus from Inparanoid

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/hom.Rn.inp.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hom.rn.inp.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.rn.inp.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.rn.inp.db/meta.yaml>`_

   Homology information for Rattus norvegicus from Inparanoid assembled using data from public repositories


.. conda:package:: bioconductor-hom.rn.inp.db

   |downloads_bioconductor-hom.rn.inp.db| |docker_bioconductor-hom.rn.inp.db|

   :versions: 3.1.2-3, 3.1.2-2, 3.1.2-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hom.rn.inp.db

   and update with::

      conda update bioconductor-hom.rn.inp.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hom.rn.inp.db:<tag>

   (see `bioconductor-hom.rn.inp.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hom.rn.inp.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hom.rn.inp.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hom.rn.inp.db
   :alt:   (downloads)
.. |docker_bioconductor-hom.rn.inp.db| image:: https://quay.io/repository/biocontainers/bioconductor-hom.rn.inp.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hom.rn.inp.db
.. _`bioconductor-hom.rn.inp.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hom.rn.inp.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hom.rn.inp.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hom.rn.inp.db/README.html