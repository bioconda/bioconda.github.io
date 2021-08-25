:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu15v1.db'
.. highlight: bash

bioconductor-mu15v1.db
======================

.. conda:recipe:: bioconductor-mu15v1.db
   :replaces_section_title:
   :noindex:

   FHCRC Genomics Shared Resource Mu15v1 Annotation Data \(Mu15v1\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/Mu15v1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mu15v1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu15v1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu15v1.db/meta.yaml>`_

   FHCRC Genomics Shared Resource Mu15v1 Annotation Data \(Mu15v1\) assembled using data from public repositories


.. conda:package:: bioconductor-mu15v1.db

   |downloads_bioconductor-mu15v1.db| |docker_bioconductor-mu15v1.db|

   :versions:
      
      

      ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-mu15v1.db
   :alt:   (downloads)
.. |docker_bioconductor-mu15v1.db| image:: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db
.. _`bioconductor-mu15v1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mu15v1.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mu15v1.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu15v1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu15v1.db/README.html