:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mobilitytransformr'
.. highlight: bash

bioconductor-mobilitytransformr
===============================

.. conda:recipe:: bioconductor-mobilitytransformr
   :replaces_section_title:
   :noindex:

   Effective mobility scale transformation of CE\-MS\(\/MS\) data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MobilityTransformR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mobilitytransformr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr/meta.yaml>`_

   MobilityTransformR collects a tool set for effective mobility scale transformation of CE\-MS\/MS data in order to increase reproducibility. It provides functionality to determine the migration times from mobility markers that have been added to the analysis and performs the transformation based on these markers. MobilityTransformR supports the conversion of numeric vectors\, Spectra\-objects\, and MSnOnDiskExp.


.. conda:package:: bioconductor-mobilitytransformr

   |downloads_bioconductor-mobilitytransformr| |docker_bioconductor-mobilitytransformr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-metabocoreutils: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends on bioconductor-spectra: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-xcms: ``>=4.0.0,<4.1.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-mobilitytransformr

to add into an existing workspace instead, run::

    pixi add bioconductor-mobilitytransformr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mobilitytransformr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mobilitytransformr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mobilitytransformr:<tag>

(see `bioconductor-mobilitytransformr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mobilitytransformr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mobilitytransformr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mobilitytransformr
   :alt:   (downloads)
.. |docker_bioconductor-mobilitytransformr| image:: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr
.. _`bioconductor-mobilitytransformr/tags`: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mobilitytransformr";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html