:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaphor'
.. highlight: bash

bioconductor-metaphor
=====================

.. conda:recipe:: bioconductor-metaphor
   :replaces_section_title:
   :noindex:

   Metabolic Pathway Analysis of RNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetaPhOR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaphor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaphor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaphor/meta.yaml>`_

   MetaPhOR was developed to enable users to assess metabolic dysregulation using transcriptomic\-level data \(RNA\-sequencing and Microarray data\) and produce publication\-quality figures. A list of differentially expressed genes \(DEGs\)\, which includes fold change and p value\, from DESeq2 or limma\, can be used as input\, with sample size for MetaPhOR\, and will produce a data frame of scores for each KEGG pathway. These scores represent the magnitude and direction of transcriptional change within the pathway\, along with estimated p\-values.MetaPhOR then uses these scores to visualize metabolic profiles within and between samples through a variety of mechanisms\, including\: bubble plots\, heatmaps\, and pathway models.


.. conda:package:: bioconductor-metaphor

   |downloads_bioconductor-metaphor| |docker_bioconductor-metaphor|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-rcy3: ``>=2.30.0,<2.31.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-pheatmap: 
   :depends on r-recordlinkage: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-metaphor

to add into an existing workspace instead, run::

    pixi add bioconductor-metaphor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metaphor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metaphor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metaphor:<tag>

(see `bioconductor-metaphor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metaphor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaphor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaphor
   :alt:   (downloads)
.. |docker_bioconductor-metaphor| image:: https://quay.io/repository/biocontainers/bioconductor-metaphor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaphor
.. _`bioconductor-metaphor/tags`: https://quay.io/repository/biocontainers/bioconductor-metaphor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaphor";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaphor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaphor/README.html