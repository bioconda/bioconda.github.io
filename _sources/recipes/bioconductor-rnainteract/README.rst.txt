:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnainteract'
.. highlight: bash

bioconductor-rnainteract
========================

.. conda:recipe:: bioconductor-rnainteract
   :replaces_section_title:
   :noindex:

   Estimate Pairwise Interactions from multidimensional features

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RNAinteract.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract/meta.yaml>`_

   RNAinteract estimates genetic interactions from multi\-dimensional read\-outs like features extracted from images. The screen is assumed to be performed in multi\-well plates or similar designs. Starting from a list of features \(e.g. cell number\, area\, fluorescence intensity\) per well\, genetic interactions are estimated. The packages provides functions for reporting interacting gene pairs\, plotting heatmaps and double RNAi plots. An HTML report can be written for quality control and analysis.


.. conda:package:: bioconductor-rnainteract

   |downloads_bioconductor-rnainteract| |docker_bioconductor-rnainteract|

   :versions:
      
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-cellhts2: ``>=2.62.0,<2.63.0``
   :depends bioconductor-geneplotter: ``>=1.76.0,<1.77.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-splots: ``>=1.64.0,<1.65.0``
   :depends r-abind: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gplots: 
   :depends r-hwriter: 
   :depends r-ics: 
   :depends r-icsnp: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnainteract

   and update with::

      conda update bioconductor-rnainteract

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnainteract:<tag>

   (see `bioconductor-rnainteract/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnainteract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteract.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnainteract
   :alt:   (downloads)
.. |docker_bioconductor-rnainteract| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteract
.. _`bioconductor-rnainteract/tags`: https://quay.io/repository/biocontainers/bioconductor-rnainteract?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnainteract";
        var versions = ["1.46.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html