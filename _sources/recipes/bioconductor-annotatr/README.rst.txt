:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotatr'
.. highlight: bash

bioconductor-annotatr
=====================

.. conda:recipe:: bioconductor-annotatr
   :replaces_section_title:
   :noindex:

   Annotation of Genomic Regions to Genomic Annotations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/annotatr.html
   :license: GPL-3
   :recipe: /`bioconductor-annotatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotatr/meta.yaml>`_

   Given a set of genomic sites\/regions \(e.g. ChIP\-seq peaks\, CpGs\, differentially methylated CpGs or regions\, SNPs\, etc.\) it is often of interest to investigate the intersecting genomic annotations. Such annotations include those relating to gene models \(promoters\, 5\'UTRs\, exons\, introns\, and 3\'UTRs\)\, CpGs \(CpG islands\, CpG shores\, CpG shelves\)\, or regulatory sequences such as enhancers. The annotatr package provides an easy way to summarize and visualize the intersection of genomic sites\/regions with genomic annotations.


.. conda:package:: bioconductor-annotatr

   |downloads_bioconductor-annotatr| |docker_bioconductor-annotatr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-regioner: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-readr: 
   :depends r-reshape2: 
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

      mamba install bioconductor-annotatr

   and update with::

      mamba update bioconductor-annotatr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-annotatr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotatr:<tag>

   (see `bioconductor-annotatr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotatr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotatr
   :alt:   (downloads)
.. |docker_bioconductor-annotatr| image:: https://quay.io/repository/biocontainers/bioconductor-annotatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotatr
.. _`bioconductor-annotatr/tags`: https://quay.io/repository/biocontainers/bioconductor-annotatr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotatr";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotatr/README.html