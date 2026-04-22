:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5mread'
.. highlight: bash

bioconductor-h5mread
====================

.. conda:recipe:: bioconductor-h5mread
   :replaces_section_title:
   :noindex:

   A fast HDF5 reader

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/h5mread.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-h5mread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5mread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5mread/meta.yaml>`_

   The main function in the h5mread package is h5mread\(\)\, which allows reading arbitrary data from an HDF5 dataset into R\, similarly to what the h5read\(\) function from the rhdf5 package does. In the case of h5mread\(\)\, the implementation has been optimized to make it as fast and memory\-efficient as possible.


.. conda:package:: bioconductor-h5mread

   |downloads_bioconductor-h5mread| |docker_bioconductor-h5mread|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on bioconductor-rhdf5filters: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rhdf5filters: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-sparsearray: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-sparsearray: ``>=1.10.8,<1.11.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-h5mread

to add into an existing workspace instead, run::

    pixi add bioconductor-h5mread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-h5mread

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-h5mread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-h5mread:<tag>

(see `bioconductor-h5mread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-h5mread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5mread.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5mread
   :alt:   (downloads)
.. |docker_bioconductor-h5mread| image:: https://quay.io/repository/biocontainers/bioconductor-h5mread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5mread
.. _`bioconductor-h5mread/tags`: https://quay.io/repository/biocontainers/bioconductor-h5mread?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h5mread";
        var versions = ["1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5mread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5mread/README.html