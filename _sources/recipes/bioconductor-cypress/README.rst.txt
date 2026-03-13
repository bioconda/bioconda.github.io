:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cypress'
.. highlight: bash

bioconductor-cypress
====================

.. conda:recipe:: bioconductor-cypress
   :replaces_section_title:
   :noindex:

   Cell\-Type\-Specific Power Assessment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cypress.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-cypress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress/meta.yaml>`_

   CYPRESS is a cell\-type\-specific power tool. This package aims to perform power analysis for the cell\-type\-specific data. It calculates FDR\, FDC\, and power\, under various study design parameters\, including but not limited to sample size\, and effect size. It takes the input of a SummarizeExperimental\(SE\) object with observed mixture data \(feature by sample matrix\)\, and the cell\-type mixture proportions \(sample by cell\-type matrix\). It can solve the cell\-type mixture proportions from the reference free panel from TOAST and conduct tests to identify cell\-type\-specific differential expression \(csDE\) genes.


.. conda:package:: bioconductor-cypress

   |downloads_bioconductor-cypress| |docker_bioconductor-cypress|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-cypress

to add into an existing workspace instead, run::

    pixi add bioconductor-cypress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cypress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cypress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cypress:<tag>

(see `bioconductor-cypress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cypress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cypress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cypress
   :alt:   (downloads)
.. |docker_bioconductor-cypress| image:: https://quay.io/repository/biocontainers/bioconductor-cypress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cypress
.. _`bioconductor-cypress/tags`: https://quay.io/repository/biocontainers/bioconductor-cypress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cypress";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cypress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cypress/README.html