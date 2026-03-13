:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easycelltype'
.. highlight: bash

bioconductor-easycelltype
=========================

.. conda:recipe:: bioconductor-easycelltype
   :replaces_section_title:
   :noindex:

   Annotate cell types for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EasyCellType.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easycelltype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easycelltype/meta.yaml>`_

   We developed EasyCellType which can automatically examine the input marker lists obtained from existing software such as Seurat over the cell markerdatabases. Two quantification approaches to annotate cell types are provided\: Gene set enrichment analysis \(GSEA\) and a modified versio of Fisher\'s exact test. The function presents annotation recommendations in graphical outcomes\: bar plots for each cluster showing candidate cell types\, as well as a dot plot summarizing the top 5 significant annotations for each cluster.


.. conda:package:: bioconductor-easycelltype

   |downloads_bioconductor-easycelltype| |docker_bioconductor-easycelltype|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rlang: 
   :depends on r-vctrs: ``>=0.6.4``

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

    pixi global install bioconductor-easycelltype

to add into an existing workspace instead, run::

    pixi add bioconductor-easycelltype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-easycelltype

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-easycelltype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-easycelltype:<tag>

(see `bioconductor-easycelltype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-easycelltype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easycelltype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easycelltype
   :alt:   (downloads)
.. |docker_bioconductor-easycelltype| image:: https://quay.io/repository/biocontainers/bioconductor-easycelltype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easycelltype
.. _`bioconductor-easycelltype/tags`: https://quay.io/repository/biocontainers/bioconductor-easycelltype?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easycelltype";
        var versions = ["1.12.0","1.8.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easycelltype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easycelltype/README.html