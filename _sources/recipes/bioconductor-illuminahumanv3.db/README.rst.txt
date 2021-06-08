:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanv3.db'
.. highlight: bash

bioconductor-illuminahumanv3.db
===============================

.. conda:recipe:: bioconductor-illuminahumanv3.db
   :replaces_section_title:
   :noindex:

   Illumina HumanHT12v3 annotation data \(chip illuminaHumanv3\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/illuminaHumanv3.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanv3.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv3.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv3.db/meta.yaml>`_

   Illumina HumanHT12v3 annotation data \(chip illuminaHumanv3\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanv3.db

   |downloads_bioconductor-illuminahumanv3.db| |docker_bioconductor-illuminahumanv3.db|

   :versions:
      
      

      ``1.26.0-7``,  ``1.26.0-6``,  ``1.26.0-5``,  ``1.26.0-4``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanv3.db

   and update with::

      conda update bioconductor-illuminahumanv3.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanv3.db:<tag>

   (see `bioconductor-illuminahumanv3.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanv3.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanv3.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanv3.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanv3.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv3.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv3.db
.. _`bioconductor-illuminahumanv3.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv3.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanv3.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanv3.db/README.html