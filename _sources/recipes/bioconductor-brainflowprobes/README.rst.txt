:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainflowprobes'
.. highlight: bash

bioconductor-brainflowprobes
============================

.. conda:recipe:: bioconductor-brainflowprobes
   :replaces_section_title:
   :noindex:

   Plots and annotation for choosing BrainFlow target probe sequence

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/brainflowprobes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainflowprobes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes/meta.yaml>`_

   Use these functions to characterize genomic regions for BrainFlow target probe design.


.. conda:package:: bioconductor-brainflowprobes

   |downloads_bioconductor-brainflowprobes| |docker_bioconductor-brainflowprobes|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bumphunter: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-derfinder: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-derfinderplot: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicstate: ``>=0.99.0,<0.100.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cowplot: ``>=1.0.0``
   :depends on r-ggplot2: ``>=3.1.1``
   :depends on r-rcolorbrewer: ``>=1.1``

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

    pixi global install bioconductor-brainflowprobes

to add into an existing workspace instead, run::

    pixi add bioconductor-brainflowprobes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-brainflowprobes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-brainflowprobes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-brainflowprobes:<tag>

(see `bioconductor-brainflowprobes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-brainflowprobes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainflowprobes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainflowprobes
   :alt:   (downloads)
.. |docker_bioconductor-brainflowprobes| image:: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes
.. _`bioconductor-brainflowprobes/tags`: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brainflowprobes";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html