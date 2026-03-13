:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cimice'
.. highlight: bash

bioconductor-cimice
===================

.. conda:recipe:: bioconductor-cimice
   :replaces_section_title:
   :noindex:

   CIMICE\-R\: \(Markov\) Chain Method to Inferr Cancer Evolution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CIMICE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cimice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cimice/meta.yaml>`_

   CIMICE is a tool in the field of tumor phylogenetics and its goal is to build a Markov Chain \(called Cancer Progression Markov Chain\, CPMC\) in order to model tumor subtypes evolution. The input of CIMICE is a Mutational Matrix\, so a boolean matrix representing altered genes in a collection of samples. These samples are assumed to be obtained with single\-cell DNA analysis techniques and the tool is specifically written to use the peculiarities of this data for the CMPC construction.


.. conda:package:: bioconductor-cimice

   |downloads_bioconductor-cimice| |docker_bioconductor-cimice|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-expm: 
   :depends on r-ggcorrplot: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-glue: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-networkd3: 
   :depends on r-purrr: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-cimice

to add into an existing workspace instead, run::

    pixi add bioconductor-cimice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cimice

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cimice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cimice:<tag>

(see `bioconductor-cimice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cimice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cimice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cimice
   :alt:   (downloads)
.. |docker_bioconductor-cimice| image:: https://quay.io/repository/biocontainers/bioconductor-cimice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cimice
.. _`bioconductor-cimice/tags`: https://quay.io/repository/biocontainers/bioconductor-cimice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cimice";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cimice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cimice/README.html