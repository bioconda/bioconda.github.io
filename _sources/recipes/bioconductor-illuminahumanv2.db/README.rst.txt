:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanv2.db'
.. highlight: bash

bioconductor-illuminahumanv2.db
===============================

.. conda:recipe:: bioconductor-illuminahumanv2.db
   :replaces_section_title:
   :noindex:

   Illumina HumanWG6v2 annotation data \(chip illuminaHumanv2\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/illuminaHumanv2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanv2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanv2.db/meta.yaml>`_

   Illumina HumanWG6v2 annotation data \(chip illuminaHumanv2\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanv2.db

   |downloads_bioconductor-illuminahumanv2.db| |docker_bioconductor-illuminahumanv2.db|

   :versions:
      
      

      ``1.26.0-8``,  ``1.26.0-7``,  ``1.26.0-6``,  ``1.26.0-5``,  ``1.26.0-4``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanv2.db

   and update with::

      conda update bioconductor-illuminahumanv2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanv2.db:<tag>

   (see `bioconductor-illuminahumanv2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanv2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanv2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanv2.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanv2.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db
.. _`bioconductor-illuminahumanv2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanv2.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanv2.db";
        var versions = ["1.26.0","1.26.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanv2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanv2.db/README.html