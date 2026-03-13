:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustall'
.. highlight: bash

bioconductor-clustall
=====================

.. conda:recipe:: bioconductor-clustall
   :replaces_section_title:
   :noindex:

   ClustAll\: Data driven strategy to robustly identify stratification of patients within complex diseases

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClustAll.html
   :license: GPL-2
   :recipe: /`bioconductor-clustall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustall/meta.yaml>`_

   Data driven strategy to find hidden groups of patients with complex diseases using clinical data. ClustAll facilitates the unsupervised identification of multiple robust stratifications. ClustAll\, is able to overcome the most common limitations found when dealing with clinical data \(missing values\, correlated data\, mixed data types\).


.. conda:package:: bioconductor-clustall

   |downloads_bioconductor-clustall| |docker_bioconductor-clustall|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bigstatsr: 
   :depends on r-circlize: 
   :depends on r-cluster: 
   :depends on r-clvalid: 
   :depends on r-dosnow: 
   :depends on r-dplyr: 
   :depends on r-factominer: 
   :depends on r-flock: 
   :depends on r-foreach: 
   :depends on r-fpc: 
   :depends on r-ggplot2: 
   :depends on r-mice: 
   :depends on r-modeest: 
   :depends on r-networkd3: 
   :depends on r-pbapply: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-clustall

to add into an existing workspace instead, run::

    pixi add bioconductor-clustall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clustall

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clustall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clustall:<tag>

(see `bioconductor-clustall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clustall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustall
   :alt:   (downloads)
.. |docker_bioconductor-clustall| image:: https://quay.io/repository/biocontainers/bioconductor-clustall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustall
.. _`bioconductor-clustall/tags`: https://quay.io/repository/biocontainers/bioconductor-clustall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustall";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustall/README.html