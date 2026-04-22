:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grit-genomics'
.. highlight: bash

grit-genomics
=============

.. conda:recipe:: grit-genomics
   :replaces_section_title:
   :noindex:

   GRIT\: Genomic Range Interval Toolkit \- high\-performance BED file operations

   :homepage: https://github.com/manish59/grit
   :documentation: https://manish59.github.io/grit
   
   :license: MIT / MIT
   :recipe: /`grit-genomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grit-genomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grit-genomics/meta.yaml>`_

   GRIT \(Genomic Range Interval Toolkit\) is a high\-performance Rust implementation                                                                                                                      
   of common BED file operations. It provides streaming algorithms with O\(k\) memory                                                                                                                     
   complexity\, achieving 3\-15x speedup over bedtools with up to 1000x less memory.                                                                                                                      



.. conda:package:: grit-genomics

   |downloads_grit-genomics| |docker_grit-genomics|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install grit-genomics

to add into an existing workspace instead, run::

    pixi add grit-genomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grit-genomics

Alternatively, to install into a new environment, run::

    conda create -n envname grit-genomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grit-genomics:<tag>

(see `grit-genomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grit-genomics| image:: https://img.shields.io/conda/dn/bioconda/grit-genomics.svg?style=flat
   :target: https://anaconda.org/bioconda/grit-genomics
   :alt:   (downloads)
.. |docker_grit-genomics| image:: https://quay.io/repository/biocontainers/grit-genomics/status
   :target: https://quay.io/repository/biocontainers/grit-genomics
.. _`grit-genomics/tags`: https://quay.io/repository/biocontainers/grit-genomics?tab=tags


.. raw:: html

    <script>
        var package = "grit-genomics";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grit-genomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grit-genomics/README.html