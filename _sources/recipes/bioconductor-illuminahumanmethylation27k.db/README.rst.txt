:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation27k.db'
.. highlight: bash

bioconductor-illuminahumanmethylation27k.db
===========================================

.. conda:recipe:: bioconductor-illuminahumanmethylation27k.db
   :replaces_section_title:

   Illumina Illumina Human Methylation 27k annotation data \(chip IlluminaHumanMethylation27k\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/IlluminaHumanMethylation27k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylation27k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db/meta.yaml>`_

   


.. conda:package:: bioconductor-illuminahumanmethylation27k.db

   |downloads_bioconductor-illuminahumanmethylation27k.db| |docker_bioconductor-illuminahumanmethylation27k.db|

   :versions: 1.4.8-2, 1.4.8-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanmethylation27k.db

   and update with::

      conda update bioconductor-illuminahumanmethylation27k.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation27k.db:<tag>

   (see `bioconductor-illuminahumanmethylation27k.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylation27k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation27k.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation27k.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation27k.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db
.. _`bioconductor-illuminahumanmethylation27k.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html