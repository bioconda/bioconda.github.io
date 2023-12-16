:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lineagepulse'
.. highlight: bash

bioconductor-lineagepulse
=========================

.. conda:recipe:: bioconductor-lineagepulse
   :replaces_section_title:
   :noindex:

   Differential expression analysis and model fitting for single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/LineagePulse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lineagepulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse/meta.yaml>`_

   LineagePulse is a differential expression and expression model fitting package tailored to single\-cell RNA\-seq data \(scRNA\-seq\). LineagePulse accounts for batch effects\, drop\-out and variable sequencing depth. One can use LineagePulse to perform longitudinal differential expression analysis across pseudotime as a continuous coordinate or between discrete groups of cells \(e.g. pre\-defined clusters or experimental conditions\). Expression model fits can be directly extracted from LineagePulse.


.. conda:package:: bioconductor-lineagepulse

   |downloads_bioconductor-lineagepulse| |docker_bioconductor-lineagepulse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-lineagepulse

   and update with::

      mamba update bioconductor-lineagepulse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lineagepulse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lineagepulse:<tag>

   (see `bioconductor-lineagepulse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lineagepulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagepulse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lineagepulse
   :alt:   (downloads)
.. |docker_bioconductor-lineagepulse| image:: https://quay.io/repository/biocontainers/bioconductor-lineagepulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagepulse
.. _`bioconductor-lineagepulse/tags`: https://quay.io/repository/biocontainers/bioconductor-lineagepulse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lineagepulse";
        var versions = ["1.21.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html