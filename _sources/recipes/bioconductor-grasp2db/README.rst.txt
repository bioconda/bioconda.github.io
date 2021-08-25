:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grasp2db'
.. highlight: bash

bioconductor-grasp2db
=====================

.. conda:recipe:: bioconductor-grasp2db
   :replaces_section_title:
   :noindex:

   grasp2db\, sqlite wrap of GRASP 2.0

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/grasp2db.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-grasp2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grasp2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grasp2db/meta.yaml>`_

   grasp2db\, sqlite wrap of NHLBI GRASP 2.0\, an extended GWAS catalog.


.. conda:package:: bioconductor-grasp2db

   |downloads_bioconductor-grasp2db| |docker_bioconductor-grasp2db|

   :versions:
      
      

      ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.0.0,<3.1.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbplyr: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grasp2db

   and update with::

      conda update bioconductor-grasp2db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grasp2db:<tag>

   (see `bioconductor-grasp2db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grasp2db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grasp2db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grasp2db
   :alt:   (downloads)
.. |docker_bioconductor-grasp2db| image:: https://quay.io/repository/biocontainers/bioconductor-grasp2db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grasp2db
.. _`bioconductor-grasp2db/tags`: https://quay.io/repository/biocontainers/bioconductor-grasp2db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-grasp2db";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grasp2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grasp2db/README.html