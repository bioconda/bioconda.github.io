:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zenith'
.. highlight: bash

bioconductor-zenith
===================

.. conda:recipe:: bioconductor-zenith
   :replaces_section_title:
   :noindex:

   Gene set analysis following differential expression using linear \(mixed\) modeling with dream

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zenith.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zenith <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zenith>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zenith/meta.yaml>`_

   Zenith performs gene set analysis on the result of differential expression using linear \(mixed\) modeling with dream by considering the correlation between gene expression traits.  This package implements the camera method from the limma package proposed by Wu and Smyth \(2012\).  Zenith is a simple extension of camera to be compatible with linear mixed models implemented in variancePartition\:\:dream\(\).


.. conda:package:: bioconductor-zenith

   |downloads_bioconductor-zenith| |docker_bioconductor-zenith|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-enrichmentbrowser: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-variancepartition: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-msigdbr: 
   :depends on r-progress: 
   :depends on r-rdpack: 
   :depends on r-reshape2: 
   :depends on r-rfast: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-zenith

to add into an existing workspace instead, run::

    pixi add bioconductor-zenith

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-zenith

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-zenith

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-zenith:<tag>

(see `bioconductor-zenith/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-zenith| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zenith.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zenith
   :alt:   (downloads)
.. |docker_bioconductor-zenith| image:: https://quay.io/repository/biocontainers/bioconductor-zenith/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zenith
.. _`bioconductor-zenith/tags`: https://quay.io/repository/biocontainers/bioconductor-zenith?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zenith";
        var versions = ["1.12.0","1.8.0","1.4.2","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zenith/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zenith/README.html