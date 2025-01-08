:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structuralvariantannotation'
.. highlight: bash

bioconductor-structuralvariantannotation
========================================

.. conda:recipe:: bioconductor-structuralvariantannotation
   :replaces_section_title:
   :noindex:

   Variant annotations for structural variants

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/StructuralVariantAnnotation.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-structuralvariantannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structuralvariantannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structuralvariantannotation/meta.yaml>`_

   StructuralVariantAnnotation provides a framework for analysis of structural variants within the Bioconductor ecosystem. This package contains contains useful helper functions for dealing with structural variants in VCF format. The packages contains functions for parsing VCFs from a number of popular callers as well as functions for dealing with breakpoints involving two separate genomic loci encoded as GRanges objects.


.. conda:package:: bioconductor-structuralvariantannotation

   |downloads_bioconductor-structuralvariantannotation| |docker_bioconductor-structuralvariantannotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-structuralvariantannotation

   and update with::

      mamba update bioconductor-structuralvariantannotation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-structuralvariantannotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-structuralvariantannotation:<tag>

   (see `bioconductor-structuralvariantannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-structuralvariantannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structuralvariantannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structuralvariantannotation
   :alt:   (downloads)
.. |docker_bioconductor-structuralvariantannotation| image:: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation
.. _`bioconductor-structuralvariantannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-structuralvariantannotation";
        var versions = ["1.22.0","1.18.0","1.16.0","1.13.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structuralvariantannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structuralvariantannotation/README.html