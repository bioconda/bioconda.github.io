:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2022'
.. highlight: bash

bioconductor-jaspar2022
=======================

.. conda:recipe:: bioconductor-jaspar2022
   :replaces_section_title:
   :noindex:

   Data package for JASPAR database \(version 2022\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/JASPAR2022.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2022 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2022>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2022/meta.yaml>`_

   JASPAR is an open\-access database containing manually curated\, non\-redundant transcription factor \(TF\) binding profiles for TFs across six taxonomic groups. In this 9th release\, we expanded the CORE collection with 341 new profiles \(148 for plants\, 101 for vertebrates\, 85 for urochordates\, and 7 for insects\)\, which corresponds to a 19\% expansion over the previous release. To search thisdatabases\, please use the package TFBSTools \(\>\= 1.31.2\).


.. conda:package:: bioconductor-jaspar2022

   |downloads_bioconductor-jaspar2022| |docker_bioconductor-jaspar2022|

   :versions:
      
      

      ``0.99.7-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jaspar2022

   and update with::

      conda update bioconductor-jaspar2022

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2022:<tag>

   (see `bioconductor-jaspar2022/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2022| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2022.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2022
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2022| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2022/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2022
.. _`bioconductor-jaspar2022/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2022?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2022";
        var versions = ["0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2022/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2022/README.html