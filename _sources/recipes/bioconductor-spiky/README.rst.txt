:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiky'
.. highlight: bash

bioconductor-spiky
==================

.. conda:recipe:: bioconductor-spiky
   :replaces_section_title:
   :noindex:

   Spike\-in calibration for cell\-free MeDIP

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/spiky.html
   :license: GPL-2
   :recipe: /`bioconductor-spiky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky/meta.yaml>`_

   spiky implements methods and model generation for cfMeDIP \(cell\-free methylated DNA immunoprecipitation\) with spike\-in controls. CfMeDIP is an enrichment protocol which avoids destructive conversion of scarce template\, making it ideal as a \"liquid biopsy\,\" but creating certain challenges in comparing results across specimens\, subjects\, and experiments. The use of synthetic spike\-in standard oligos allows diagnostics performed with cfMeDIP to quantitatively compare samples across subjects\, experiments\, and time points in both relative and absolute terms.


.. conda:package:: bioconductor-spiky

   |downloads_bioconductor-spiky| |docker_bioconductor-spiky|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-bamlss: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-blandaltmanleh: 
   :depends r-ggplot2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spiky

   and update with::

      conda update bioconductor-spiky

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spiky:<tag>

   (see `bioconductor-spiky/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spiky| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiky.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiky
   :alt:   (downloads)
.. |docker_bioconductor-spiky| image:: https://quay.io/repository/biocontainers/bioconductor-spiky/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiky
.. _`bioconductor-spiky/tags`: https://quay.io/repository/biocontainers/bioconductor-spiky?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiky";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiky/README.html