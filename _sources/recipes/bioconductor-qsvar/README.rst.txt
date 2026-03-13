:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsvar'
.. highlight: bash

bioconductor-qsvar
==================

.. conda:recipe:: bioconductor-qsvar
   :replaces_section_title:
   :noindex:

   Generate Quality Surrogate Variable Analysis for Degradation Correction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qsvaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qsvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar/meta.yaml>`_

   The qsvaR package contains functions for removing the effect of degration in rna\-seq data from postmortem brain tissue. The package is equipped to help users generate principal components associated with degradation. The components can be used in differential expression analysis to remove the effects of degradation.


.. conda:package:: bioconductor-qsvar

   |downloads_bioconductor-qsvar| |docker_bioconductor-qsvar|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-qsvar

to add into an existing workspace instead, run::

    pixi add bioconductor-qsvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qsvar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qsvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qsvar:<tag>

(see `bioconductor-qsvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qsvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsvar
   :alt:   (downloads)
.. |docker_bioconductor-qsvar| image:: https://quay.io/repository/biocontainers/bioconductor-qsvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsvar
.. _`bioconductor-qsvar/tags`: https://quay.io/repository/biocontainers/bioconductor-qsvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsvar";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsvar/README.html