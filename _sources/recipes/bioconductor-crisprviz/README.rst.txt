:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprviz'
.. highlight: bash

bioconductor-crisprviz
======================

.. conda:recipe:: bioconductor-crisprviz
   :replaces_section_title:
   :noindex:

   Visualization Functions for CRISPR gRNAs

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/crisprViz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprviz/meta.yaml>`_

   Provides functionalities to visualize and contextualize CRISPR guide RNAs \(gRNAs\) on genomic tracks across nucleases and applications. Works in conjunction with the crisprBase and crisprDesign Bioconductor packages. Plots are produced using the Gviz framework.


.. conda:package:: bioconductor-crisprviz

   |downloads_bioconductor-crisprviz| |docker_bioconductor-crisprviz|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-crisprbase: ``>=1.2.0,<1.3.0``
   :depends bioconductor-crisprdesign: ``>=1.0.0,<1.1.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gviz: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprviz

   and update with::

      conda update bioconductor-crisprviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprviz:<tag>

   (see `bioconductor-crisprviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprviz
   :alt:   (downloads)
.. |docker_bioconductor-crisprviz| image:: https://quay.io/repository/biocontainers/bioconductor-crisprviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprviz
.. _`bioconductor-crisprviz/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprviz";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprviz/README.html