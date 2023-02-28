:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagene2'
.. highlight: bash

bioconductor-metagene2
======================

.. conda:recipe:: bioconductor-metagene2
   :replaces_section_title:
   :noindex:

   A package to produce metagene plots

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/metagene2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagene2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene2/meta.yaml>`_

   This package produces metagene plots to compare coverages of sequencing experiments at selected groups of genomic regions. It can be used for such analyses as assessing the binding of DNA\-interacting proteins at promoter regions or surveying antisense transcription over the length of a gene. The metagene2 package can manage all aspects of the analysis\, from normalization of coverages to plot facetting according to experimental metadata. Bootstraping analysis is used to provide confidence intervals of per\-sample mean coverages.


.. conda:package:: bioconductor-metagene2

   |downloads_bioconductor-metagene2| |docker_bioconductor-metagene2|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-r6: ``>=2.0``
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagene2

   and update with::

      conda update bioconductor-metagene2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagene2:<tag>

   (see `bioconductor-metagene2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagene2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagene2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagene2
   :alt:   (downloads)
.. |docker_bioconductor-metagene2| image:: https://quay.io/repository/biocontainers/bioconductor-metagene2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagene2
.. _`bioconductor-metagene2/tags`: https://quay.io/repository/biocontainers/bioconductor-metagene2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagene2";
        var versions = ["1.14.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagene2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagene2/README.html