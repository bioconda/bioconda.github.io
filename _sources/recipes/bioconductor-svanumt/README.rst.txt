:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svanumt'
.. highlight: bash

bioconductor-svanumt
====================

.. conda:recipe:: bioconductor-svanumt
   :replaces_section_title:
   :noindex:

   NUMT detection from structural variant calls

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/svaNUMT.html
   :license: GPL-3
   :recipe: /`bioconductor-svanumt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svanumt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svanumt/meta.yaml>`_

   svaNUMT contains functions for detecting NUMT events from structural variant calls. It takes structural variant calls in GRanges of breakend notation and identifies NUMTs by nuclear\-mitochondrial breakend junctions. The main function reports candidate NUMTs if there is a pair of valid insertion sites found on the nuclear genome within a certain distance threshold. The candidate NUMTs are reported by events.


.. conda:package:: bioconductor-svanumt

   |downloads_bioconductor-svanumt| |docker_bioconductor-svanumt|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-structuralvariantannotation: ``>=1.13.0,<1.14.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-svanumt

   and update with::

      conda update bioconductor-svanumt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svanumt:<tag>

   (see `bioconductor-svanumt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svanumt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svanumt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svanumt
   :alt:   (downloads)
.. |docker_bioconductor-svanumt| image:: https://quay.io/repository/biocontainers/bioconductor-svanumt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svanumt
.. _`bioconductor-svanumt/tags`: https://quay.io/repository/biocontainers/bioconductor-svanumt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-svanumt";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svanumt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svanumt/README.html