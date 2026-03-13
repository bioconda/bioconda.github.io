:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kboost'
.. highlight: bash

bioconductor-kboost
===================

.. conda:recipe:: bioconductor-kboost
   :replaces_section_title:
   :noindex:

   Inference of gene regulatory networks from gene expression data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/KBoost.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-kboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost/meta.yaml>`_

   Reconstructing gene regulatory networks and transcription factor activity is crucial to understand biological processes and holds potential for developing personalized treatment. Yet\, it is still an open problem as state\-of\-art algorithm are often not able to handle large amounts of data. Furthermore\, many of the present methods predict numerous false positives and are unable to integrate other sources of information such as previously known interactions. Here we introduce KBoost\, an algorithm that uses kernel PCA regression\, boosting and Bayesian model averaging for fast and accurate reconstruction of gene regulatory networks. KBoost can also use a prior network built on previously known transcription factor targets. We have benchmarked KBoost using three different datasets against other high performing algorithms. The results show that our method compares favourably to other methods across datasets.


.. conda:package:: bioconductor-kboost

   |downloads_bioconductor-kboost| |docker_bioconductor-kboost|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-kboost

to add into an existing workspace instead, run::

    pixi add bioconductor-kboost

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-kboost

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-kboost

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-kboost:<tag>

(see `bioconductor-kboost/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-kboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kboost
   :alt:   (downloads)
.. |docker_bioconductor-kboost| image:: https://quay.io/repository/biocontainers/bioconductor-kboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kboost
.. _`bioconductor-kboost/tags`: https://quay.io/repository/biocontainers/bioconductor-kboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kboost";
        var versions = ["1.18.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kboost/README.html