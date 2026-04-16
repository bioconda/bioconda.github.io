:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rarr'
.. highlight: bash

bioconductor-rarr
=================

.. conda:recipe:: bioconductor-rarr
   :replaces_section_title:
   :noindex:

   Read Zarr Files in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rarr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rarr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarr/meta.yaml>`_

   The Zarr specification defines a format for chunked\, compressed\, N\-dimensional arrays.  It\'s design allows efficient access to subsets of the stored array\, and supports both local and cloud storage systems. Rarr aims to implement this specifcation in R with minimal reliance on an external tools or libraries.


.. conda:package:: bioconductor-rarr

   |downloads_bioconductor-rarr| |docker_bioconductor-rarr|

   :versions:
      
      

      ``1.10.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-jsonlite: 
   :depends on r-paws.storage: 
   :depends on r-r.utils: 

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

    pixi global install bioconductor-rarr

to add into an existing workspace instead, run::

    pixi add bioconductor-rarr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rarr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rarr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rarr:<tag>

(see `bioconductor-rarr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rarr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rarr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rarr
   :alt:   (downloads)
.. |docker_bioconductor-rarr| image:: https://quay.io/repository/biocontainers/bioconductor-rarr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rarr
.. _`bioconductor-rarr/tags`: https://quay.io/repository/biocontainers/bioconductor-rarr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rarr";
        var versions = ["1.10.1","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rarr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rarr/README.html