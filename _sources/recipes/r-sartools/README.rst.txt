:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sartools'
.. highlight: bash

r-sartools
==========

.. conda:recipe:: r-sartools
   :replaces_section_title:
   :noindex:

   Statistical Analysis of RNA\-Seq data.

   :homepage: https://github.com/PF2-pasteur-fr/SARTools
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-sartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools/meta.yaml>`_
   :links: biotools: :biotools:`sartools`

   SARTools provides R tools and an environment for the statistical 
   analysis of RNA\-Seq projects load and clean data\, produce figures\, 
   perform statistical analysis\/testing with DESeq2 or edgeR\, export 
   results and create final report.



.. conda:package:: r-sartools

   |downloads_r-sartools| |docker_r-sartools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.2-0</code>,  <code>1.8.1-3</code>,  <code>1.8.1-2</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-3</code>,  <code>1.7.3-2</code>,  </span></summary>
      

      ``1.8.2-0``,  ``1.8.1-3``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.4-0``,  ``1.7.3-3``,  ``1.7.3-2``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.9-0``,  ``1.6.8-0``,  ``1.6.6-3``,  ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.4.1-0``,  ``1.3.2-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: ``>=1.32.0``
   :depends on bioconductor-edger: ``>=3.34.0``
   :depends on bioconductor-genefilter: 
   :depends on bioconductor-summarizedexperiment: ``>=1.6``
   :depends on r-ashr: ``>=2.2-54``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bit64: 
   :depends on r-blob: 
   :depends on r-ggally: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-kableextra: 
   :depends on r-knitr: 
   :depends on r-optparse: 
   :depends on r-rmarkdown: ``>=1.4``

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

    pixi global install r-sartools

to add into an existing workspace instead, run::

    pixi add r-sartools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sartools

Alternatively, to install into a new environment, run::

    conda create -n envname r-sartools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sartools:<tag>

(see `r-sartools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sartools| image:: https://img.shields.io/conda/dn/bioconda/r-sartools.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sartools
   :alt:   (downloads)
.. |docker_r-sartools| image:: https://quay.io/repository/biocontainers/r-sartools/status
   :target: https://quay.io/repository/biocontainers/r-sartools
.. _`r-sartools/tags`: https://quay.io/repository/biocontainers/r-sartools?tab=tags


.. raw:: html

    <script>
        var package = "r-sartools";
        var versions = ["1.8.2","1.8.1","1.8.1","1.8.1","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sartools/README.html