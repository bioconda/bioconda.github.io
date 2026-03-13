:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgoslin'
.. highlight: bash

bioconductor-rgoslin
====================

.. conda:recipe:: bioconductor-rgoslin
   :replaces_section_title:
   :noindex:

   Lipid Shorthand Name Parsing and Normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rgoslin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgoslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgoslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgoslin/meta.yaml>`_

   The R implementation for the Grammar of Succint Lipid Nomenclature parses different short hand notation dialects for lipid names. It normalizes them to a standard name. It further provides calculated monoisotopic masses and sum formulas for each successfully parsed lipid name and supplements it with LIPID MAPS Category and Class information. Also\, the structural level and further structural details about the head group\, fatty acyls and functional groups are returned\, where applicable.


.. conda:package:: bioconductor-rgoslin

   |downloads_bioconductor-rgoslin| |docker_bioconductor-rgoslin|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-rcpp: ``>=1.0.3``

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

    pixi global install bioconductor-rgoslin

to add into an existing workspace instead, run::

    pixi add bioconductor-rgoslin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgoslin

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgoslin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgoslin:<tag>

(see `bioconductor-rgoslin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgoslin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgoslin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgoslin
   :alt:   (downloads)
.. |docker_bioconductor-rgoslin| image:: https://quay.io/repository/biocontainers/bioconductor-rgoslin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgoslin
.. _`bioconductor-rgoslin/tags`: https://quay.io/repository/biocontainers/bioconductor-rgoslin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgoslin";
        var versions = ["1.14.0","1.10.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgoslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgoslin/README.html