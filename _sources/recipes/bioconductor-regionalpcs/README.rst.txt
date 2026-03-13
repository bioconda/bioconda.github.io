:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionalpcs'
.. highlight: bash

bioconductor-regionalpcs
========================

.. conda:recipe:: bioconductor-regionalpcs
   :replaces_section_title:
   :noindex:

   Summarizing Regional Methylation with Regional Principal Components Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/regionalpcs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-regionalpcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalpcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalpcs/meta.yaml>`_

   Functions to summarize DNA methylation data using regional principal components. Regional principal components are computed using principal components analysis within genomic regions to summarize the variability in methylation levels across CpGs. The number of principal components is chosen using either the Marcenko\-Pasteur or Gavish\-Donoho method to identify relevant signal in the data.


.. conda:package:: bioconductor-regionalpcs

   |downloads_bioconductor-regionalpcs| |docker_bioconductor-regionalpcs|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-pcatools: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-regionalpcs

to add into an existing workspace instead, run::

    pixi add bioconductor-regionalpcs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-regionalpcs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-regionalpcs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-regionalpcs:<tag>

(see `bioconductor-regionalpcs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-regionalpcs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionalpcs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionalpcs
   :alt:   (downloads)
.. |docker_bioconductor-regionalpcs| image:: https://quay.io/repository/biocontainers/bioconductor-regionalpcs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionalpcs
.. _`bioconductor-regionalpcs/tags`: https://quay.io/repository/biocontainers/bioconductor-regionalpcs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regionalpcs";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionalpcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionalpcs/README.html