:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scde'
.. highlight: bash

bioconductor-scde
=================

.. conda:recipe:: bioconductor-scde
   :replaces_section_title:
   :noindex:

   Single Cell Differential Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scde.html
   :license: GPL-2
   :recipe: /`bioconductor-scde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde/meta.yaml>`_
   :links: biotools: :biotools:`scde`, doi: :doi:`10.1038/nmeth.2967`

   The scde package implements a set of statistical methods for analyzing single\-cell RNA\-seq data. scde fits individual error models for single\-cell RNA\-seq measurements. These models can then be used for assessment of differential expression between groups of cells\, as well as other types of analysis. The scde package also contains the pagoda framework which applies pathway and gene set overdispersion analysis to identify and characterize putative cell subpopulations based on transcriptional signatures. The overall approach to the differential expression analysis is detailed in the following publication\: \"Bayesian approach to single\-cell differential expression analysis\" \(Kharchenko PV\, Silberstein L\, Scadden DT\, Nature Methods\, doi\: 10.1038\/nmeth.2967\). The overall approach to subpopulation identification and characterization is detailed in the following pre\-print\: \"Characterizing transcriptional heterogeneity through pathway and gene set overdispersion analysis\" \(Fan J\, Salathia N\, Liu R\, Kaeser G\, Yung Y\, Herman J\, Kaper F\, Fan JB\, Zhang K\, Chun J\, and Kharchenko PV\, Nature Methods\, doi\:10.1038\/nmeth.3734\).


.. conda:package:: bioconductor-scde

   |downloads_bioconductor-scde| |docker_bioconductor-scde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.28.2-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.22.0-2</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.28.2-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.22.0-2``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-edger: ``>=4.0.2,<4.1.0a0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cairo: 
   :depends r-extremes: 
   :depends r-flexmix: 
   :depends r-mass: 
   :depends r-mgcv: 
   :depends r-nnet: 
   :depends r-quantreg: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.10.4``
   :depends r-rcpparmadillo: ``>=0.5.400.2.0``
   :depends r-rjson: 
   :depends r-rmtstat: 
   :depends r-rook: 
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

      mamba install bioconductor-scde

   and update with::

      mamba update bioconductor-scde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scde:<tag>

   (see `bioconductor-scde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scde
   :alt:   (downloads)
.. |docker_bioconductor-scde| image:: https://quay.io/repository/biocontainers/bioconductor-scde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scde
.. _`bioconductor-scde/tags`: https://quay.io/repository/biocontainers/bioconductor-scde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scde";
        var versions = ["2.30.0","2.28.2","2.26.0","2.26.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scde/README.html