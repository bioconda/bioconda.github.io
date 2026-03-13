:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comethdmr'
.. highlight: bash

bioconductor-comethdmr
======================

.. conda:recipe:: bioconductor-comethdmr
   :replaces_section_title:
   :noindex:

   Accurate identification of co\-methylated and differentially methylated regions in epigenome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/coMethDMR.html
   :license: GPL-3
   :recipe: /`bioconductor-comethdmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr/meta.yaml>`_

   coMethDMR identifies genomic regions associated with continuous phenotypes by optimally leverages covariations among CpGs within predefined genomic regions. Instead of testing all CpGs within a genomic region\, coMethDMR carries out an additional step that selects co\-methylated sub\-regions first without using any outcome information. Next\, coMethDMR tests association between methylation within the sub\-region and continuous phenotype using a random coefficient mixed effects model\, which models both variations between CpG sites within the region and differential methylation simultaneously.


.. conda:package:: bioconductor-comethdmr

   |downloads_bioconductor-comethdmr| |docker_bioconductor-comethdmr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-bumphunter: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lmertest: 

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

    pixi global install bioconductor-comethdmr

to add into an existing workspace instead, run::

    pixi add bioconductor-comethdmr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-comethdmr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-comethdmr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-comethdmr:<tag>

(see `bioconductor-comethdmr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-comethdmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comethdmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comethdmr
   :alt:   (downloads)
.. |docker_bioconductor-comethdmr| image:: https://quay.io/repository/biocontainers/bioconductor-comethdmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comethdmr
.. _`bioconductor-comethdmr/tags`: https://quay.io/repository/biocontainers/bioconductor-comethdmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-comethdmr";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html