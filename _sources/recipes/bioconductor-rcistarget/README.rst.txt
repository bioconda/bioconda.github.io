:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget'
.. highlight: bash

bioconductor-rcistarget
=======================

.. conda:recipe:: bioconductor-rcistarget
   :replaces_section_title:
   :noindex:

   RcisTarget Identify transcription factor binding motifs enriched on a list of genes or genomic regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RcisTarget.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget/meta.yaml>`_

   RcisTarget identifies transcription factor binding motifs \(TFBS\) over\-represented on a gene list. In a first step\, RcisTarget selects DNA motifs that are significantly over\-represented in the surroundings of the transcription start site \(TSS\) of the genes in the gene\-set. This is achieved by using a database that contains genome\-wide cross\-species rankings for each motif. The motifs that are then annotated to TFs and those that have a high Normalized Enrichment Score \(NES\) are retained. Finally\, for each motif and gene\-set\, RcisTarget predicts the candidate target genes \(i.e. genes in the gene\-set that are ranked above the leading edge\).


.. conda:package:: bioconductor-rcistarget

   |downloads_bioconductor-rcistarget| |docker_bioconductor-rcistarget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-aucell: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-arrow: ``>=2.0.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-r.utils: 
   :depends r-tibble: 
   :depends r-zoo: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rcistarget

   and update with::

      mamba update bioconductor-rcistarget

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcistarget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcistarget:<tag>

   (see `bioconductor-rcistarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcistarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget
.. _`bioconductor-rcistarget/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcistarget";
        var versions = ["1.26.0","1.20.0","1.17.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html