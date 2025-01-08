:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mutationalpatterns'
.. highlight: bash

bioconductor-mutationalpatterns
===============================

.. conda:recipe:: bioconductor-mutationalpatterns
   :replaces_section_title:
   :noindex:

   Comprehensive genome\-wide analysis of mutational processes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MutationalPatterns.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mutationalpatterns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mutationalpatterns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mutationalpatterns/meta.yaml>`_

   Mutational processes leave characteristic footprints in genomic DNA. This package provides a comprehensive set of flexible functions that allows researchers to easily evaluate and visualize a multitude of mutational patterns in base substitution catalogues of e.g. healthy samples\, tumour samples\, or DNA\-repair deficient cells. The package covers a wide range of patterns including\: mutational signatures\, transcriptional and replicative strand bias\, lesion segregation\, genomic distribution and association with genomic features\, which are collectively meaningful for studying the activity of mutational processes. The package works with single nucleotide variants \(SNVs\)\, insertions and deletions \(Indels\)\, double base substitutions \(DBSs\) and larger multi base substitutions \(MBSs\). The package provides functionalities for both extracting mutational signatures de novo and determining the contribution of previously identified mutational signatures on a single sample level. MutationalPatterns integrates with common R genomic analysis workflows and allows easy association with \(publicly available\) annotation data.


.. conda:package:: bioconductor-mutationalpatterns

   |downloads_bioconductor-mutationalpatterns| |docker_bioconductor-mutationalpatterns|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.16.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``3.16.0-0``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.4.0-0``,  ``3.2.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: ``>=0.9.2``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-ggalluvial: ``>=0.12.2``
   :depends r-ggdendro: ``>=0.1-20``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-magrittr: ``>=1.5``
   :depends r-nmf: ``>=0.20.6``
   :depends r-pracma: ``>=1.8.8``
   :depends r-purrr: ``>=0.3.2``
   :depends r-rcolorbrewer: 
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: ``>=2.1.3``
   :depends r-tidyr: ``>=1.0.0``
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

      mamba install bioconductor-mutationalpatterns

   and update with::

      mamba update bioconductor-mutationalpatterns

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mutationalpatterns

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mutationalpatterns:<tag>

   (see `bioconductor-mutationalpatterns/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mutationalpatterns| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mutationalpatterns.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mutationalpatterns
   :alt:   (downloads)
.. |docker_bioconductor-mutationalpatterns| image:: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns
.. _`bioconductor-mutationalpatterns/tags`: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mutationalpatterns";
        var versions = ["3.16.0","3.12.0","3.10.0","3.8.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mutationalpatterns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mutationalpatterns/README.html