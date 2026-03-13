:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvranger'
.. highlight: bash

bioconductor-cnvranger
======================

.. conda:recipe:: bioconductor-cnvranger
   :replaces_section_title:
   :noindex:

   Summarization and expression\/phenotype association of CNV ranges

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CNVRanger.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvranger/meta.yaml>`_

   The CNVRanger package implements a comprehensive tool suite for CNV analysis. This includes functionality for summarizing individual CNV calls across a population\, assessing overlap with functional genomic regions\, and association analysis with gene expression and quantitative phenotypes.


.. conda:package:: bioconductor-cnvranger

   |downloads_bioconductor-cnvranger| |docker_bioconductor-cnvranger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.4-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.4-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-gdsarray: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-raggedexperiment: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-snprelate: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-lattice: 
   :depends on r-plyr: 
   :depends on r-qqman: 
   :depends on r-rappdirs: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-cnvranger

to add into an existing workspace instead, run::

    pixi add bioconductor-cnvranger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cnvranger

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cnvranger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cnvranger:<tag>

(see `bioconductor-cnvranger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cnvranger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvranger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvranger
   :alt:   (downloads)
.. |docker_bioconductor-cnvranger| image:: https://quay.io/repository/biocontainers/bioconductor-cnvranger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvranger
.. _`bioconductor-cnvranger/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvranger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvranger";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.4","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvranger/README.html