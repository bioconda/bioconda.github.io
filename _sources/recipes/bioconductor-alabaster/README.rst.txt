:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster'
.. highlight: bash

bioconductor-alabaster
======================

.. conda:recipe:: bioconductor-alabaster
   :replaces_section_title:
   :noindex:

   Umbrella for the Alabaster Framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster/meta.yaml>`_

   Umbrella for the alabaster suite\, providing a single\-line import for all alabaster.\* packages. Installing this package ensures that all known alabaster.\* packages are also installed\, avoiding problems with missing packages when a staging method or loading function is dynamically requested. Obviously\, this comes at the cost of needing to install more packages\, so advanced users and application developers may prefer to install the required alabaster.\* packages individually.


.. conda:package:: bioconductor-alabaster

   |downloads_bioconductor-alabaster| |docker_bioconductor-alabaster|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.bumpy: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.mae: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.matrix: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.ranges: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.sce: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.se: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.spatial: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.string: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.vcf: ``>=1.10.0,<1.11.0``
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

    pixi global install bioconductor-alabaster

to add into an existing workspace instead, run::

    pixi add bioconductor-alabaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alabaster

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alabaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alabaster:<tag>

(see `bioconductor-alabaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alabaster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster
   :alt:   (downloads)
.. |docker_bioconductor-alabaster| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster
.. _`bioconductor-alabaster/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster/README.html