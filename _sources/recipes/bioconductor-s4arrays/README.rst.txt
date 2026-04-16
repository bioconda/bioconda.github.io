:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-s4arrays'
.. highlight: bash

bioconductor-s4arrays
=====================

.. conda:recipe:: bioconductor-s4arrays
   :replaces_section_title:
   :noindex:

   Foundation of array\-like containers in Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/S4Arrays.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-s4arrays <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4arrays>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4arrays/meta.yaml>`_

   The S4Arrays package defines the Array virtual class to be extended by other S4 classes that wish to implement a container with an array\-like semantic. It also provides\: \(1\) low\-level functionality meant to help the developer of such container to implement basic operations like display\, subsetting\, or coercion of their array\-like objects to an ordinary matrix or array\, and \(2\) a framework that facilitates block processing of array\-like objects \(typically on\-disk objects\).


.. conda:package:: bioconductor-s4arrays

   |downloads_bioconductor-s4arrays| |docker_bioconductor-s4arrays|

   :versions:
      
      

      ``1.10.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.4-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-s4arrays

to add into an existing workspace instead, run::

    pixi add bioconductor-s4arrays

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-s4arrays

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-s4arrays

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-s4arrays:<tag>

(see `bioconductor-s4arrays/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-s4arrays| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-s4arrays.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-s4arrays
   :alt:   (downloads)
.. |docker_bioconductor-s4arrays| image:: https://quay.io/repository/biocontainers/bioconductor-s4arrays/status
   :target: https://quay.io/repository/biocontainers/bioconductor-s4arrays
.. _`bioconductor-s4arrays/tags`: https://quay.io/repository/biocontainers/bioconductor-s4arrays?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-s4arrays";
        var versions = ["1.10.1","1.6.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-s4arrays/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-s4arrays/README.html