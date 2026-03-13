:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarchrplus'
.. highlight: bash

bioconductor-seqarchrplus
=========================

.. conda:recipe:: bioconductor-seqarchrplus
   :replaces_section_title:
   :noindex:

   Downstream analyses of promoter sequence architectures and HTML report generation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqArchRplus.html
   :license: GPL-3
   :recipe: /`bioconductor-seqarchrplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchrplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchrplus/meta.yaml>`_

   seqArchRplus facilitates downstream analyses of promoter sequence architectures\/clusters identified by seqArchR \(or any other tool\/method\). With additional available information such as the TPM values and interquantile widths \(IQWs\) of the CAGE tag clusters\, seqArchRplus can order the input promoter clusters by their shape \(IQWs\)\, and write the cluster information as browser\/IGV track files. Provided visualizations are of two kind\: per sample\/stage and per cluster visualizations. Those of the first kind include\: plot panels for each sample showing per cluster shape\, TPM and other score distributions\, sequence logos\, and peak annotations. The second include per cluster chromosome\-wise and strand distributions\, motif occurrence heatmaps and GO term enrichments. Additionally\, seqArchRplus can also generate HTML reports for easy viewing and comparison of promoter architectures between samples\/stages.


.. conda:package:: bioconductor-seqarchrplus

   |downloads_bioconductor-seqarchrplus| |docker_bioconductor-seqarchrplus|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-chipseeker: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-heatmaps: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-seqarchr: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-seqpattern: ``>=1.34.0,<1.35.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cli: 
   :depends on r-cowplot: 
   :depends on r-factoextra: 
   :depends on r-ggimage: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-magick: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 

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

    pixi global install bioconductor-seqarchrplus

to add into an existing workspace instead, run::

    pixi add bioconductor-seqarchrplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqarchrplus

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqarchrplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqarchrplus:<tag>

(see `bioconductor-seqarchrplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqarchrplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarchrplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarchrplus
   :alt:   (downloads)
.. |docker_bioconductor-seqarchrplus| image:: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus
.. _`bioconductor-seqarchrplus/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarchrplus";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarchrplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarchrplus/README.html