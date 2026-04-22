:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-finfomds'
.. highlight: bash

bioconductor-finfomds
=====================

.. conda:recipe:: bioconductor-finfomds
   :replaces_section_title:
   :noindex:

   Multidimensional Scaling with F\-ratio for microbiome visualization

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/FinfoMDS.html
   :license: GPL-3
   :recipe: /`bioconductor-finfomds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-finfomds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-finfomds/meta.yaml>`_

   F\-informed MDS is a new multidimensional scaling\-based ordination method that configures data distribution based on the F\-statistic \(i.e.\, the ratio of dispersion between groups with shared or differing labels\).


.. conda:package:: bioconductor-finfomds

   |downloads_bioconductor-finfomds| |docker_bioconductor-finfomds|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
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

    pixi global install bioconductor-finfomds

to add into an existing workspace instead, run::

    pixi add bioconductor-finfomds

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-finfomds

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-finfomds

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-finfomds:<tag>

(see `bioconductor-finfomds/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-finfomds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-finfomds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-finfomds
   :alt:   (downloads)
.. |docker_bioconductor-finfomds| image:: https://quay.io/repository/biocontainers/bioconductor-finfomds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-finfomds
.. _`bioconductor-finfomds/tags`: https://quay.io/repository/biocontainers/bioconductor-finfomds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-finfomds";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-finfomds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-finfomds/README.html