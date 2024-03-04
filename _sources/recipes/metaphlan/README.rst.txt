:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphlan'
.. highlight: bash

metaphlan
=========

.. conda:recipe:: metaphlan
   :replaces_section_title:
   :noindex:

   Metagenomic Phylogenetic Analysis

   :homepage: https://github.com/biobakery/metaphlan
   :license: MIT / MIT License
   :recipe: /`metaphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan/meta.yaml>`_

   MetaPhlAn is a computational tool for profiling the composition of microbial
   communities \(Bacteria\, Archaea and Eukaryotes\) from metagenomic
   shotgun sequencing data with species level resolution. From version 2.0
   MetaPhlAn is also able to identify specific strains \(in the not\-so\-frequent
   cases in which the sample contains a previously sequenced strains\) and to
   track strains across samples for all species.


.. conda:package:: metaphlan

   |downloads_metaphlan| |docker_metaphlan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-0</code>,  <code>4.0.6-0</code>,  <code>4.0.5-0</code>,  <code>4.0.4-0</code>,  <code>4.0.3-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.1.0-0</code>,  </span></summary>
      

      ``4.1.0-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.1.0-0``,  ``3.0.14-0``,  ``3.0.13-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.10-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-2``,  ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``3.0.0.alpha-1``,  ``3.0.0.alpha-0``,  ``2.8.1-1``,  ``2.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-microbiome: 
   :depends biom-format: 
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends bowtie2: ``>=2.3.0``
   :depends dendropy: 
   :depends hclust2: 
   :depends matplotlib-base: 
   :depends muscle: ``>=3.8.1551``
   :depends numpy: 
   :depends pandas: 
   :depends phylophlan: ``>=3.1``
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends r-ape: 
   :depends r-base: ``>=4``
   :depends r-biocmanager: 
   :depends r-compositions: 
   :depends r-essentials: 
   :depends r-optparse: 
   :depends r-rbiom: 
   :depends raxml: ``>=8.2.10``
   :depends requests: 
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metaphlan

   and update with::

      mamba update metaphlan

  To create a new environment, run::

      mamba create --name myenvname metaphlan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaphlan:<tag>

   (see `metaphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_metaphlan| image:: https://img.shields.io/conda/dn/bioconda/metaphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphlan
   :alt:   (downloads)
.. |docker_metaphlan| image:: https://quay.io/repository/biocontainers/metaphlan/status
   :target: https://quay.io/repository/biocontainers/metaphlan
.. _`metaphlan/tags`: https://quay.io/repository/biocontainers/metaphlan?tab=tags


.. raw:: html

    <script>
        var package = "metaphlan";
        var versions = ["4.1.0","4.0.6","4.0.5","4.0.4","4.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphlan/README.html