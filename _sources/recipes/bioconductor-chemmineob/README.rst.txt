:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chemmineob'
.. highlight: bash

bioconductor-chemmineob
=======================

.. conda:recipe:: bioconductor-chemmineob
   :replaces_section_title:
   :noindex:

   R interface to a subset of OpenBabel functionalities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ChemmineOB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemmineob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemmineob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemmineob/meta.yaml>`_

   ChemmineOB provides an R interface to a subset of cheminformatics functionalities implemented by the OpelBabel C\+\+ project. OpenBabel is an open source cheminformatics toolbox that includes utilities for structure format interconversions\, descriptor calculations\, compound similarity searching and more. ChemineOB aims to make a subset of these utilities available from within R. For non\-developers\, ChemineOB is primarily intended to be used from ChemmineR as an add\-on package rather than used directly.


.. conda:package:: bioconductor-chemmineob

   |downloads_bioconductor-chemmineob| |docker_bioconductor-chemmineob|

   :versions:
      
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends on eigen: 
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on openbabel: ``>=3``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bh: 
   :depends on r-rcpp: ``>=0.11.0``

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

    pixi global install bioconductor-chemmineob

to add into an existing workspace instead, run::

    pixi add bioconductor-chemmineob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chemmineob

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chemmineob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chemmineob:<tag>

(see `bioconductor-chemmineob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chemmineob| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemmineob.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chemmineob
   :alt:   (downloads)
.. |docker_bioconductor-chemmineob| image:: https://quay.io/repository/biocontainers/bioconductor-chemmineob/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemmineob
.. _`bioconductor-chemmineob/tags`: https://quay.io/repository/biocontainers/bioconductor-chemmineob?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chemmineob";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemmineob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemmineob/README.html