:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-purecn'
.. highlight: bash

bioconductor-purecn
===================

.. conda:recipe:: bioconductor-purecn
   :replaces_section_title:
   :noindex:

   Copy number calling and SNV classification using targeted short read sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PureCN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-purecn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn/meta.yaml>`_
   :links: biotools: :biotools:`purecn`

   This package estimates tumor purity\, copy number\, and loss of heterozygosity \(LOH\)\, and classifies single nucleotide variants \(SNVs\) by somatic status and clonality. PureCN is designed for targeted short read sequencing data\, integrates well with standard somatic variant detection and copy number pipelines\, and has support for tumor samples without matching normal samples.


.. conda:package:: bioconductor-purecn

   |downloads_bioconductor-purecn| |docker_bioconductor-purecn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.8.1-0</code>,  <code>2.6.4-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.8.1-0``,  ``2.6.4-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.13.1-2``,  ``1.12.1-0``,  ``1.11.20-2``,  ``1.11.20-1``,  ``1.11.13-1``,  ``1.11.13-0``,  ``1.8.0-0``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-rcolorbrewer: 
   :depends r-vgam: 
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

      mamba install bioconductor-purecn

   and update with::

      mamba update bioconductor-purecn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-purecn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-purecn:<tag>

   (see `bioconductor-purecn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-purecn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-purecn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-purecn
   :alt:   (downloads)
.. |docker_bioconductor-purecn| image:: https://quay.io/repository/biocontainers/bioconductor-purecn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-purecn
.. _`bioconductor-purecn/tags`: https://quay.io/repository/biocontainers/bioconductor-purecn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-purecn";
        var versions = ["2.12.0","2.8.1","2.6.4","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-purecn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-purecn/README.html