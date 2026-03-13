:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qfeatures'
.. highlight: bash

bioconductor-qfeatures
======================

.. conda:recipe:: bioconductor-qfeatures
   :replaces_section_title:
   :noindex:

   Quantitative features for mass spectrometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/QFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qfeatures/meta.yaml>`_

   The QFeatures infrastructure enables the management and processing of quantitative features for high\-throughput mass spectrometry assays. It provides a familiar Bioconductor user experience to manages quantitative data across different assay levels \(such as peptide spectrum matches\, peptides and proteins\) in a coherent and tractable format.


.. conda:package:: bioconductor-qfeatures

   |downloads_bioconductor-qfeatures| |docker_bioconductor-qfeatures|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-lazyeval: 
   :depends on r-plotly: 
   :depends on r-reshape2: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-qfeatures

to add into an existing workspace instead, run::

    pixi add bioconductor-qfeatures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qfeatures

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qfeatures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qfeatures:<tag>

(see `bioconductor-qfeatures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qfeatures
   :alt:   (downloads)
.. |docker_bioconductor-qfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-qfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qfeatures
.. _`bioconductor-qfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-qfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qfeatures";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qfeatures/README.html