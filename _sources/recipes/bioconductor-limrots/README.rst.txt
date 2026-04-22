:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-limrots'
.. highlight: bash

bioconductor-limrots
====================

.. conda:recipe:: bioconductor-limrots
   :replaces_section_title:
   :noindex:

   LimROTS\: A Hybrid Method Integrating Empirical Bayes and Reproducibility\-Optimized Statistics for Robust Differential Expression Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/LimROTS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-limrots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limrots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limrots/meta.yaml>`_

   Differential expression analysis is a prevalent method utilised in the examination of diverse biological data. The reproducibility\-optimized test statistic \(ROTS\) modifies a t\-statistic based on the data\'s intrinsic characteristics and ranks features according to their statistical significance for differential expression between two or more groups \(f\-statistic\). Focussing on proteomics and metabolomics\, the current ROTS implementation cannot account for technical or biological covariates such as MS batches or gender differences among the samples. Consequently\, we developed LimROTS\, which employs a reproducibility\-optimized test statistic utilising the limma methodology to simulate complex experimental designs. LimROTS is a hybrid method integrating empirical bayes and reproducibility\-optimized statistics for robust analysis of proteomics and metabolomics data.


.. conda:package:: bioconductor-limrots

   |downloads_bioconductor-limrots| |docker_bioconductor-limrots|

   :versions:
      
      

      ``1.2.8-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
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

    pixi global install bioconductor-limrots

to add into an existing workspace instead, run::

    pixi add bioconductor-limrots

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-limrots

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-limrots

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-limrots:<tag>

(see `bioconductor-limrots/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-limrots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limrots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-limrots
   :alt:   (downloads)
.. |docker_bioconductor-limrots| image:: https://quay.io/repository/biocontainers/bioconductor-limrots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limrots
.. _`bioconductor-limrots/tags`: https://quay.io/repository/biocontainers/bioconductor-limrots?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-limrots";
        var versions = ["1.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limrots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limrots/README.html