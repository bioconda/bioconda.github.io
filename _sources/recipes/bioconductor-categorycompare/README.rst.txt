:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-categorycompare'
.. highlight: bash

bioconductor-categorycompare
============================

.. conda:recipe:: bioconductor-categorycompare
   :replaces_section_title:

   Calculates significant annotations \(categories\) in each of two \(or more\) feature \(i.e. gene\) lists\, determines the overlap between the annotations\, and returns graphical and tabular data about the significant annotations and which combinations of feature lists the annotations were found to be significant. Interactive exploration is facilitated through the use of RCytoscape \(heavily suggested\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/categoryCompare.html
   :license: GPL-2
   :recipe: /`bioconductor-categorycompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare/meta.yaml>`_

   


.. conda:package:: bioconductor-categorycompare

   |downloads_bioconductor-categorycompare| |docker_bioconductor-categorycompare|

   :versions: 1.26.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-category: >=2.48.0,<2.49.0
   
   :depends bioconductor-gostats: >=2.48.0,<2.49.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   
   :depends bioconductor-rcy3: >=2.2.0,<2.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-colorspace: 
   
   :depends r-hwriter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-categorycompare

   and update with::

      conda update bioconductor-categorycompare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-categorycompare:<tag>

   (see `bioconductor-categorycompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-categorycompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-categorycompare.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-categorycompare| image:: https://quay.io/repository/biocontainers/bioconductor-categorycompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-categorycompare
.. _`bioconductor-categorycompare/tags`: https://quay.io/repository/biocontainers/bioconductor-categorycompare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html