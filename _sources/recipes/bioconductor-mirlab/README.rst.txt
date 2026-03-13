:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirlab'
.. highlight: bash

bioconductor-mirlab
===================

.. conda:recipe:: bioconductor-mirlab
   :replaces_section_title:
   :noindex:

   Dry lab for exploring miRNA\-mRNA relationships

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miRLAB.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-mirlab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab/meta.yaml>`_

   Provide tools exploring miRNA\-mRNA relationships\, including popular miRNA target prediction methods\, ensemble methods that integrate individual methods\, functions to get data from online resources\, functions to validate the results\, and functions to conduct enrichment analyses.


.. conda:package:: bioconductor-mirlab

   |downloads_bioconductor-mirlab| |docker_bioconductor-mirlab|

   :versions:
      
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends on bioconductor-category: ``>=2.76.0,<2.77.0``
   :depends on bioconductor-ctc: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-gostats: ``>=2.76.0,<2.77.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tcgabiolinks: ``>=2.38.0,<2.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-energy: 
   :depends on r-entropy: 
   :depends on r-glmnet: 
   :depends on r-gplots: 
   :depends on r-hmisc: 
   :depends on r-httr: 
   :depends on r-invariantcausalprediction: 
   :depends on r-pcalg: 
   :depends on r-rcurl: 
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

    pixi global install bioconductor-mirlab

to add into an existing workspace instead, run::

    pixi add bioconductor-mirlab

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirlab

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirlab

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirlab:<tag>

(see `bioconductor-mirlab/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirlab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirlab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirlab
   :alt:   (downloads)
.. |docker_bioconductor-mirlab| image:: https://quay.io/repository/biocontainers/bioconductor-mirlab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirlab
.. _`bioconductor-mirlab/tags`: https://quay.io/repository/biocontainers/bioconductor-mirlab?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirlab";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirlab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirlab/README.html