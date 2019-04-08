:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu15v1.db'
.. highlight: bash

bioconductor-mu15v1.db
======================

.. conda:recipe:: bioconductor-mu15v1.db
   :replaces_section_title:

   FHCRC Genomics Shared Resource Mu15v1 Annotation Data \(Mu15v1\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Mu15v1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mu15v1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu15v1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu15v1.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mu15v1.db

   |downloads_bioconductor-mu15v1.db| |docker_bioconductor-mu15v1.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu15v1.db

   and update with::

      conda update bioconductor-mu15v1.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu15v1.db:<tag>

   (see `bioconductor-mu15v1.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu15v1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu15v1.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mu15v1.db| image:: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db
.. _`bioconductor-mu15v1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu15v1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu15v1.db/README.html