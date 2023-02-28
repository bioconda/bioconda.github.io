:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosorensen'
.. highlight: bash

bioconductor-gosorensen
=======================

.. conda:recipe:: bioconductor-gosorensen
   :replaces_section_title:
   :noindex:

   Statistical inference based on the Sorensen\-Dice dissimilarity and the Gene Ontology \(GO\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/goSorensen.html
   :license: GPL-3
   :recipe: /`bioconductor-gosorensen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosorensen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosorensen/meta.yaml>`_

   This package implements inferential methods to compare gene lists \(in this first release\, to prove equivalence\) in terms of their biological meaning as expressed in the GO. The compared gene lists are characterized by cross\-tabulation frequency tables of enriched GO items. Dissimilarity between gene lists is evaluated using the Sorensen\-Dice index. The fundamental guiding principle is that two gene lists are taken as similar if they share a great proportion of common enriched GO items.


.. conda:package:: bioconductor-gosorensen

   |downloads_bioconductor-gosorensen| |docker_bioconductor-gosorensen|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-goprofiles: ``>=1.60.0,<1.61.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gosorensen

   and update with::

      conda update bioconductor-gosorensen

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosorensen:<tag>

   (see `bioconductor-gosorensen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosorensen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosorensen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosorensen
   :alt:   (downloads)
.. |docker_bioconductor-gosorensen| image:: https://quay.io/repository/biocontainers/bioconductor-gosorensen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosorensen
.. _`bioconductor-gosorensen/tags`: https://quay.io/repository/biocontainers/bioconductor-gosorensen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosorensen";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosorensen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosorensen/README.html