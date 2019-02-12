:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hom.dr.inp.db'
.. highlight: bash

bioconductor-hom.dr.inp.db
==========================

.. conda:recipe:: bioconductor-hom.dr.inp.db
   :replaces_section_title:

   Homology information for Danio rerio from Inparanoid assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hom.Dr.inp.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hom.dr.inp.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.dr.inp.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hom.dr.inp.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hom.dr.inp.db

   |downloads_bioconductor-hom.dr.inp.db| |docker_bioconductor-hom.dr.inp.db|

   :versions: 3.1.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hom.dr.inp.db

   and update with::

      conda update bioconductor-hom.dr.inp.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hom.dr.inp.db:<tag>

   (see `bioconductor-hom.dr.inp.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hom.dr.inp.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hom.dr.inp.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hom.dr.inp.db| image:: https://quay.io/repository/biocontainers/bioconductor-hom.dr.inp.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hom.dr.inp.db
.. _`bioconductor-hom.dr.inp.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hom.dr.inp.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hom.dr.inp.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hom.dr.inp.db/README.html