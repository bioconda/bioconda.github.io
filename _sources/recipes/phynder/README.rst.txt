:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynder'
.. highlight: bash

phynder
=======

.. conda:recipe:: phynder
   :replaces_section_title:
   :noindex:

   Efficient likelihood calculations to place samples into a phylogenetic tree.

   :homepage: https://github.com/richarddurbin/phynder
   :license: MIT / MIT
   :recipe: /`phynder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynder/meta.yaml>`_

   Efficient likelihood calculations to place samples into a phylogenetic tree. 
   In particular\, phynder was originally designed for placing male ancient DNA 
   samples into the Y chromosome phylogeny\, when there are arbitrarily high rates 
   of missing data. It has also been used for assigning ancient samples to whole 
   mitochondrial genome phylogenies.



.. conda:package:: phynder

   |downloads_phynder| |docker_phynder|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.3,<4.0a0``

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

    pixi global install phynder

to add into an existing workspace instead, run::

    pixi add phynder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phynder

Alternatively, to install into a new environment, run::

    conda create -n envname phynder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phynder:<tag>

(see `phynder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phynder| image:: https://img.shields.io/conda/dn/bioconda/phynder.svg?style=flat
   :target: https://anaconda.org/bioconda/phynder
   :alt:   (downloads)
.. |docker_phynder| image:: https://quay.io/repository/biocontainers/phynder/status
   :target: https://quay.io/repository/biocontainers/phynder
.. _`phynder/tags`: https://quay.io/repository/biocontainers/phynder?tab=tags


.. raw:: html

    <script>
        var package = "phynder";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynder/README.html