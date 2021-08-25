:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicdistributions'
.. highlight: bash

bioconductor-genomicdistributions
=================================

.. conda:recipe:: bioconductor-genomicdistributions
   :replaces_section_title:
   :noindex:

   Produces Summaries and Plots of Features Distributed Across Genomes

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GenomicDistributions.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-genomicdistributions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributions/meta.yaml>`_

   If you have a set of genomic ranges\, this package can help you with visualization and comparison. It produces several kinds of plots\, for example\: Chromosome distribution plots\, which visualize how your regions are distributed over chromosomes\; feature distance distribution plots\, which visualizes how your regions are distributed relative to a feature of interest\, like Transcription Start Sites \(TSSs\)\; genomic partition plots\, which visualize how your regions overlap given genomic features such as promoters\, introns\, exons\, or intergenic regions. It also makes it easy to compare one set of ranges to another.


.. conda:package:: bioconductor-genomicdistributions

   |downloads_bioconductor-genomicdistributions| |docker_bioconductor-genomicdistributions|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicdistributions

   and update with::

      conda update bioconductor-genomicdistributions

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicdistributions:<tag>

   (see `bioconductor-genomicdistributions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicdistributions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdistributions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicdistributions
   :alt:   (downloads)
.. |docker_bioconductor-genomicdistributions| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions
.. _`bioconductor-genomicdistributions/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicdistributions";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdistributions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdistributions/README.html