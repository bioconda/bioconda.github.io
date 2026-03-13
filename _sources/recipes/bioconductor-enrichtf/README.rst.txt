:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichtf'
.. highlight: bash

bioconductor-enrichtf
=====================

.. conda:recipe:: bioconductor-enrichtf
   :replaces_section_title:
   :noindex:

   Transcription Factors Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/enrichTF.html
   :license: GPL-3
   :recipe: /`bioconductor-enrichtf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichtf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichtf/meta.yaml>`_

   As transcription factors \(TFs\) play a crucial role in regulating the transcription process through binding on the genome alone or in a combinatorial manner\, TF enrichment analysis is an efficient and important procedure to locate the candidate functional TFs from a set of experimentally defined regulatory regions. While it is commonly accepted that structurally related TFs may have similar binding preference to sequences \(i.e. motifs\) and one TF may have multiple motifs\, TF enrichment analysis is much more challenging than motif enrichment analysis. Here we present a R package for TF enrichment analysis which combine motif enrichment with the PECA model.


.. conda:package:: bioconductor-enrichtf

   |downloads_bioconductor-enrichtf| |docker_bioconductor-enrichtf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-jaspar2018: ``>=1.1.0,<1.2.0``
   :depends on bioconductor-motifmatchr: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-pipeframe: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-heatmap3: 
   :depends on r-magrittr: 
   :depends on r-r.utils: 
   :depends on r-rmarkdown: 

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

    pixi global install bioconductor-enrichtf

to add into an existing workspace instead, run::

    pixi add bioconductor-enrichtf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-enrichtf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-enrichtf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-enrichtf:<tag>

(see `bioconductor-enrichtf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-enrichtf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichtf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichtf
   :alt:   (downloads)
.. |docker_bioconductor-enrichtf| image:: https://quay.io/repository/biocontainers/bioconductor-enrichtf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichtf
.. _`bioconductor-enrichtf/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichtf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichtf";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichtf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichtf/README.html