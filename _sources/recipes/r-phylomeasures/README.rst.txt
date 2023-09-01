:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phylomeasures'
.. highlight: bash

r-phylomeasures
===============

.. conda:recipe:: r-phylomeasures
   :replaces_section_title:
   :noindex:

   Given a phylogenetic tree T and an assemblage S of species represented as  a subset of tips in T\, we want to compute a measure of the diversity  of the species in S with respect to T. The current package offers  efficient algorithms that can process large phylogenetic data for several such measures.  Most importantly\, the package includes algorithms for computing  efficiently the standardized versions of phylogenetic measures and their p\-values\, which are  essential for null model comparisons. Among other functions\,  the package provides efficient computation of richness\-standardized versions  for indices such as the net relatedness index \(NRI\)\,  nearest taxon index \(NTI\)\, phylogenetic diversity index \(PDI\)\, and the corresponding indices of two\-sample measures.  The package also introduces a new single\-sample measure\, the Core Ancestor Cost \(CAC\)\; the package provides functions for computing the value and the standardised index of the CAC and\, more than that\, there is an extra function available that can compute exactly  any statistical moment of the measure. The package supports computations under different null models\, including abundance\-weighted models.

   :homepage: https://CRAN.R-project.org/package=PhyloMeasures
   :license: GPL3 / GPL-3
   :recipe: /`r-phylomeasures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylomeasures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylomeasures/meta.yaml>`_

   


.. conda:package:: r-phylomeasures

   |downloads_r-phylomeasures| |docker_r-phylomeasures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-9</code>,  <code>2.1-8</code>,  <code>2.1-7</code>,  <code>2.1-6</code>,  <code>2.1-5</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.1-1</code>,  </span></summary>
      

      ``2.1-9``,  ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-phylomeasures

   and update with::

      mamba update r-phylomeasures

  To create a new environment, run::

      mamba create --name myenvname r-phylomeasures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-phylomeasures:<tag>

   (see `r-phylomeasures/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phylomeasures| image:: https://img.shields.io/conda/dn/bioconda/r-phylomeasures.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phylomeasures
   :alt:   (downloads)
.. |docker_r-phylomeasures| image:: https://quay.io/repository/biocontainers/r-phylomeasures/status
   :target: https://quay.io/repository/biocontainers/r-phylomeasures
.. _`r-phylomeasures/tags`: https://quay.io/repository/biocontainers/r-phylomeasures?tab=tags


.. raw:: html

    <script>
        var package = "r-phylomeasures";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phylomeasures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phylomeasures/README.html