:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-categorycompare'
.. highlight: bash

bioconductor-categorycompare
============================

.. conda:recipe:: bioconductor-categorycompare
   :replaces_section_title:
   :noindex:

   Meta\-analysis of high\-throughput experiments using feature annotations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/categoryCompare.html
   :license: GPL-2
   :recipe: /`bioconductor-categorycompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare/meta.yaml>`_

   Calculates significant annotations \(categories\) in each of two \(or more\) feature \(i.e. gene\) lists\, determines the overlap between the annotations\, and returns graphical and tabular data about the significant annotations and which combinations of feature lists the annotations were found to be significant. Interactive exploration is facilitated through the use of RCytoscape \(heavily suggested\).


.. conda:package:: bioconductor-categorycompare

   |downloads_bioconductor-categorycompare| |docker_bioconductor-categorycompare|

   :versions:
      
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.76.0,<1.77.0``
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-category: ``>=2.64.0,<2.65.0``
   :depends bioconductor-gostats: ``>=2.64.0,<2.65.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-gseabase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-rcy3: ``>=2.18.0,<2.19.0``
   :depends cytoscape: ``>=3.6.1``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-colorspace: 
   :depends r-hwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-categorycompare

   and update with::

      conda update bioconductor-categorycompare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-categorycompare:<tag>

   (see `bioconductor-categorycompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-categorycompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-categorycompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-categorycompare
   :alt:   (downloads)
.. |docker_bioconductor-categorycompare| image:: https://quay.io/repository/biocontainers/bioconductor-categorycompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-categorycompare
.. _`bioconductor-categorycompare/tags`: https://quay.io/repository/biocontainers/bioconductor-categorycompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-categorycompare";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html