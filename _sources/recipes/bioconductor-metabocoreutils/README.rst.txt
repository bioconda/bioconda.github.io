:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabocoreutils'
.. highlight: bash

bioconductor-metabocoreutils
============================

.. conda:recipe:: bioconductor-metabocoreutils
   :replaces_section_title:
   :noindex:

   Core Utils for Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetaboCoreUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metabocoreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabocoreutils/meta.yaml>`_

   MetaboCoreUtils defines metabolomics\-related core functionality provided as low\-level functions to allow a data structure\-independent usage across various R packages. This includes functions to calculate between ion \(adduct\) and compound mass\-to\-charge ratios and masses or functions to work with chemical formulas. The package provides also a set of adduct definitions and information on some commercially available internal standard mixes commonly used in MS experiments.


.. conda:package:: bioconductor-metabocoreutils

   |downloads_bioconductor-metabocoreutils| |docker_bioconductor-metabocoreutils|

   :versions:
      
      

      ``1.18.1-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
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

    pixi global install bioconductor-metabocoreutils

to add into an existing workspace instead, run::

    pixi add bioconductor-metabocoreutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metabocoreutils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metabocoreutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metabocoreutils:<tag>

(see `bioconductor-metabocoreutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metabocoreutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabocoreutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabocoreutils
   :alt:   (downloads)
.. |docker_bioconductor-metabocoreutils| image:: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils
.. _`bioconductor-metabocoreutils/tags`: https://quay.io/repository/biocontainers/bioconductor-metabocoreutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabocoreutils";
        var versions = ["1.18.1","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabocoreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabocoreutils/README.html