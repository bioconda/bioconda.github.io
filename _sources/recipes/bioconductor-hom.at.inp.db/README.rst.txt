:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hom.at.inp.db'
.. highlight: bash

bioconductor-hom.at.inp.db
==========================

.. conda:recipe:: bioconductor-hom.at.inp.db
   :replaces_section_title:

   Homology information for Arabidopsis thaliana from Inparanoid assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hom.At.inp.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hom.at.inp.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.at.inp.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.at.inp.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hom.at.inp.db

   |downloads_bioconductor-hom.at.inp.db| |docker_bioconductor-hom.at.inp.db|

   :versions: 3.1.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hom.at.inp.db

   and update with::

      conda update bioconductor-hom.at.inp.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hom.at.inp.db:<tag>

   (see `bioconductor-hom.at.inp.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hom.at.inp.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hom.at.inp.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hom.at.inp.db| image:: https://quay.io/repository/biocontainers/bioconductor-hom.at.inp.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hom.at.inp.db
.. _`bioconductor-hom.at.inp.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hom.at.inp.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hom.at.inp.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hom.at.inp.db/README.html