:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netdx'
.. highlight: bash

bioconductor-netdx
==================

.. conda:recipe:: bioconductor-netdx
   :replaces_section_title:
   :noindex:

   Network\-based patient classifier

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/netDx.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netdx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netdx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netdx/meta.yaml>`_

   netDx is a general\-purpose algorithm to build a patient classifier from heterogenous patient data. The method converts data into patient similarity networks at the level of features. Feature selection identifies features of predictive value to each class. Methods are provided for versatile predictor design and performance evaluation using standard measures. netDx natively groups molecular data into pathway\-level features and connects with Cytoscape for network visualization of pathway themes. For method details see\: Pai et al. \(2019\). netDx\: interpretable patient classification using integrated patient similarity networks. Molecular Systems Biology. 15\, e8497


.. conda:package:: bioconductor-netdx

   |downloads_bioconductor-netdx| |docker_bioconductor-netdx|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bigmemory: 
   :depends on r-combinat: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-plotrix: 
   :depends on r-pracma: 
   :depends on r-rappdirs: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rocr: 
   :depends on r-rtsne: 

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

    pixi global install bioconductor-netdx

to add into an existing workspace instead, run::

    pixi add bioconductor-netdx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-netdx

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-netdx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-netdx:<tag>

(see `bioconductor-netdx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-netdx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netdx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netdx
   :alt:   (downloads)
.. |docker_bioconductor-netdx| image:: https://quay.io/repository/biocontainers/bioconductor-netdx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netdx
.. _`bioconductor-netdx/tags`: https://quay.io/repository/biocontainers/bioconductor-netdx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netdx";
        var versions = ["1.14.0","1.12.0","1.9.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netdx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netdx/README.html