:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tuberculosis'
.. highlight: bash

bioconductor-tuberculosis
=========================

.. conda:recipe:: bioconductor-tuberculosis
   :replaces_section_title:
   :noindex:

   Tuberculosis Gene Expression Data for Machine Learning

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/tuberculosis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tuberculosis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tuberculosis/meta.yaml>`_

   The tuberculosis R\/Bioconductor package features tuberculosis gene expression data for machine learning. All human samples from GEO that did not come from cell lines\, were not taken postmortem\, and did not feature recombination have been included. The package has more than 10\,000 samples from both microarray and sequencing studies that have been processed from raw data through a hyper\-standardized\, reproducible pipeline.


.. conda:package:: bioconductor-tuberculosis

   |downloads_bioconductor-tuberculosis| |docker_bioconductor-tuberculosis|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-tuberculosis

to add into an existing workspace instead, run::

    pixi add bioconductor-tuberculosis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tuberculosis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tuberculosis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tuberculosis:<tag>

(see `bioconductor-tuberculosis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tuberculosis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tuberculosis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tuberculosis
   :alt:   (downloads)
.. |docker_bioconductor-tuberculosis| image:: https://quay.io/repository/biocontainers/bioconductor-tuberculosis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tuberculosis
.. _`bioconductor-tuberculosis/tags`: https://quay.io/repository/biocontainers/bioconductor-tuberculosis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tuberculosis";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tuberculosis/README.html