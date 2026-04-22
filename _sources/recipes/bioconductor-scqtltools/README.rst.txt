:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scqtltools'
.. highlight: bash

bioconductor-scqtltools
=======================

.. conda:recipe:: bioconductor-scqtltools
   :replaces_section_title:
   :noindex:

   scQTLtools\: an R\/Bioconductor package for comprehensive identification and visualization of single\-cell eQTLs

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/scQTLtools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scqtltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scqtltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scqtltools/meta.yaml>`_

   scQTLtools is a comprehensive R\/Bioconductor package that facilitates end\-to\-end single\-cell eQTL analysis\, from preprocessing to visualization


.. conda:package:: bioconductor-scqtltools

   |downloads_bioconductor-scqtltools| |docker_bioconductor-scqtltools|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.1.4``
   :depends on r-gamlss: ``>=5.4-22``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-magrittr: ``>=2.0.3``
   :depends on r-matrix: ``>=1.7-0``
   :depends on r-patchwork: ``>=1.2.0``
   :depends on r-progress: ``>=1.2.3``
   :depends on r-seuratobject: ``>=5.0.2``
   :depends on r-stringr: ``>=1.5.1``
   :depends on r-vgam: ``>=1.1-11``
   :depends on r-yulab.utils: ``>=0.2.3``

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

    pixi global install bioconductor-scqtltools

to add into an existing workspace instead, run::

    pixi add bioconductor-scqtltools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scqtltools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scqtltools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scqtltools:<tag>

(see `bioconductor-scqtltools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scqtltools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scqtltools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scqtltools
   :alt:   (downloads)
.. |docker_bioconductor-scqtltools| image:: https://quay.io/repository/biocontainers/bioconductor-scqtltools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scqtltools
.. _`bioconductor-scqtltools/tags`: https://quay.io/repository/biocontainers/bioconductor-scqtltools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scqtltools";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scqtltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scqtltools/README.html