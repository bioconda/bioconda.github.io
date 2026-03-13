:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteomm'
.. highlight: bash

bioconductor-proteomm
=====================

.. conda:recipe:: bioconductor-proteomm
   :replaces_section_title:
   :noindex:

   Multi\-Dataset Model\-based Differential Expression Proteomics Analysis Platform

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ProteoMM.html
   :license: MIT
   :recipe: /`bioconductor-proteomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm/meta.yaml>`_

   ProteoMM is a statistical method to perform model\-based peptide\-level differential expression analysis of single or multiple datasets. For multiple datasets ProteoMM produces a single fold change and p\-value for each protein across multiple datasets. ProteoMM provides functionality for normalization\, missing value imputation and differential expression. Model\-based peptide\-level imputation and differential expression analysis component of package follows the analysis described in “A statistical framework for protein quantitation in bottom\-up MS based proteomics\" \(Karpievitch et al. Bioinformatics 2009\). EigenMS normalisation is implemented as described in \"Normalization of peak intensities in bottom\-up MS\-based proteomics using singular value decomposition.\" \(Karpievitch et al. Bioinformatics 2009\).


.. conda:package:: bioconductor-proteomm

   |downloads_bioconductor-proteomm| |docker_bioconductor-proteomm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gdata: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gtools: 
   :depends on r-matrixstats: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-proteomm

to add into an existing workspace instead, run::

    pixi add bioconductor-proteomm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-proteomm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-proteomm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-proteomm:<tag>

(see `bioconductor-proteomm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-proteomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteomm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteomm
   :alt:   (downloads)
.. |docker_bioconductor-proteomm| image:: https://quay.io/repository/biocontainers/bioconductor-proteomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteomm
.. _`bioconductor-proteomm/tags`: https://quay.io/repository/biocontainers/bioconductor-proteomm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteomm";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteomm/README.html