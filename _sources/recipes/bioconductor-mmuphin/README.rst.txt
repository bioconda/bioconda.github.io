:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmuphin'
.. highlight: bash

bioconductor-mmuphin
====================

.. conda:recipe:: bioconductor-mmuphin
   :replaces_section_title:
   :noindex:

   Meta\-analysis Methods with Uniform Pipeline for Heterogeneity in Microbiome Studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MMUPHin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mmuphin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmuphin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmuphin/meta.yaml>`_

   MMUPHin is an R package for meta\-analysis tasks of microbiome cohorts. It has function interfaces for\: a\) covariate\-controlled batch\- and cohort effect adjustment\, b\) meta\-analysis differential abundance testing\, c\) meta\-analysis unsupervised discrete structure \(clustering\) discovery\, and d\) meta\-analysis unsupervised continuous structure discovery.


.. conda:package:: bioconductor-mmuphin

   |downloads_bioconductor-mmuphin| |docker_bioconductor-mmuphin|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-maaslin2: ``>=1.16.0,<1.17.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-fpc: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-metafor: 
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

    pixi global install bioconductor-mmuphin

to add into an existing workspace instead, run::

    pixi add bioconductor-mmuphin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mmuphin

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mmuphin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mmuphin:<tag>

(see `bioconductor-mmuphin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mmuphin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmuphin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmuphin
   :alt:   (downloads)
.. |docker_bioconductor-mmuphin| image:: https://quay.io/repository/biocontainers/bioconductor-mmuphin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmuphin
.. _`bioconductor-mmuphin/tags`: https://quay.io/repository/biocontainers/bioconductor-mmuphin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmuphin";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmuphin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmuphin/README.html