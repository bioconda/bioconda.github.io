:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-constand'
.. highlight: bash

bioconductor-constand
=====================

.. conda:recipe:: bioconductor-constand
   :replaces_section_title:
   :noindex:

   Data normalization by matrix raking

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CONSTANd.html
   :license: file LICENSE
   :recipe: /`bioconductor-constand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-constand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-constand/meta.yaml>`_

   Normalizes a data matrix \`data\` by raking \(using the RAS method by Bacharach\, see references\) the Nrows by Ncols matrix such that the row means and column means equal 1. The result is a normalized data matrix \`K\=RAS\`\, a product of row mulipliers \`R\` and column multipliers \`S\` with the original matrix \`A\`. Missing information needs to be presented as \`NA\` values and not as zero values\, because CONSTANd is able to ignore missing values when calculating the mean. Using CONSTANd normalization allows for the direct comparison of values between samples within the same and even across different CONSTANd\-normalized data matrices.


.. conda:package:: bioconductor-constand

   |downloads_bioconductor-constand| |docker_bioconductor-constand|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-constand

to add into an existing workspace instead, run::

    pixi add bioconductor-constand

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-constand

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-constand

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-constand:<tag>

(see `bioconductor-constand/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-constand| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-constand.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-constand
   :alt:   (downloads)
.. |docker_bioconductor-constand| image:: https://quay.io/repository/biocontainers/bioconductor-constand/status
   :target: https://quay.io/repository/biocontainers/bioconductor-constand
.. _`bioconductor-constand/tags`: https://quay.io/repository/biocontainers/bioconductor-constand?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-constand";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-constand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-constand/README.html