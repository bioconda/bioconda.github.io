:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-notame'
.. highlight: bash

bioconductor-notame
===================

.. conda:recipe:: bioconductor-notame
   :replaces_section_title:
   :noindex:

   Workflow for non\-targeted LC\-MS metabolic profiling

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/notame.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-notame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-notame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-notame/meta.yaml>`_

   Provides functionality for untargeted LC\-MS metabolomics research as specified in the associated protocol article in the \'Metabolomics Data Processing and Data Analysis—Current Best Practices\' special issue of the Metabolites journal \(2020\). This includes tabular data preprocessing and quality control\, uni\- and multivariate analysis as well as quality control visualizations\, feature\-wise visualizations and results visualizations. Raw data preprocessing and functionality related to biological context\, such as pathway analysis\, is not included.


.. conda:package:: bioconductor-notame

   |downloads_bioconductor-notame| |docker_bioconductor-notame|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-futile.logger: 
   :depends on r-ggplot2: 
   :depends on r-openxlsx: 
   :depends on r-scales: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-notame

to add into an existing workspace instead, run::

    pixi add bioconductor-notame

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-notame

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-notame

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-notame:<tag>

(see `bioconductor-notame/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-notame| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-notame.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-notame
   :alt:   (downloads)
.. |docker_bioconductor-notame| image:: https://quay.io/repository/biocontainers/bioconductor-notame/status
   :target: https://quay.io/repository/biocontainers/bioconductor-notame
.. _`bioconductor-notame/tags`: https://quay.io/repository/biocontainers/bioconductor-notame?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-notame";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-notame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-notame/README.html