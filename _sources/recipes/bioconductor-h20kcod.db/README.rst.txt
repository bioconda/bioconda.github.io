:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h20kcod.db'
.. highlight: bash

bioconductor-h20kcod.db
=======================

.. conda:recipe:: bioconductor-h20kcod.db
   :replaces_section_title:
   :noindex:

   Codelink UniSet Human 20k I Bioarray annotation data \(chip h20kcod\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/h20kcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-h20kcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h20kcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h20kcod.db/meta.yaml>`_

   Codelink UniSet Human 20k I Bioarray annotation data \(chip h20kcod\) assembled using data from public repositories


.. conda:package:: bioconductor-h20kcod.db

   |downloads_bioconductor-h20kcod.db| |docker_bioconductor-h20kcod.db|

   :versions:
      
      

      ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-h20kcod.db

   and update with::

      conda update bioconductor-h20kcod.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h20kcod.db:<tag>

   (see `bioconductor-h20kcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h20kcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h20kcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h20kcod.db
   :alt:   (downloads)
.. |docker_bioconductor-h20kcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-h20kcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h20kcod.db
.. _`bioconductor-h20kcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-h20kcod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h20kcod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h20kcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h20kcod.db/README.html