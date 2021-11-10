:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rattus.norvegicus'
.. highlight: bash

bioconductor-rattus.norvegicus
==============================

.. conda:recipe:: bioconductor-rattus.norvegicus
   :replaces_section_title:
   :noindex:

   Annotation package for the Rattus.norvegicus object

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/Rattus.norvegicus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rattus.norvegicus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus/meta.yaml>`_

   Contains the Rattus.norvegicus object to access data from several related annotation packages.


.. conda:package:: bioconductor-rattus.norvegicus

   |downloads_bioconductor-rattus.norvegicus| |docker_bioconductor-rattus.norvegicus|

   :versions:
      
      

      ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-go.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-organismdbi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-txdb.rnorvegicus.ucsc.rn5.refgene: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rattus.norvegicus

   and update with::

      conda update bioconductor-rattus.norvegicus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rattus.norvegicus:<tag>

   (see `bioconductor-rattus.norvegicus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rattus.norvegicus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rattus.norvegicus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rattus.norvegicus
   :alt:   (downloads)
.. |docker_bioconductor-rattus.norvegicus| image:: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus
.. _`bioconductor-rattus.norvegicus/tags`: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rattus.norvegicus";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html