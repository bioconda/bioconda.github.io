:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandepth'
.. highlight: bash

pandepth
========

.. conda:recipe:: pandepth
   :replaces_section_title:
   :noindex:

   An ultra\-fast and efficient genomic tool for coverage calculation.

   :homepage: https://github.com/HuiyangYu/PanDepth
   :license: MIT / MIT
   :recipe: /`pandepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandepth/meta.yaml>`_

   PanDepth is an ultra\-fast and efficient tool for calculating coverage and depth from sequencing alignments. 
   It outperforms other tools in computation time and memory efficiency for both BAM and CRAM\-format 
   alignment files\, utilizing chromosome parallel computation and optimized data structures.



.. conda:package:: pandepth

   |downloads_pandepth| |docker_pandepth|

   :versions:
      
      

      ``2.26-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on libcxx: ``>=19``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install pandepth

to add into an existing workspace instead, run::

    pixi add pandepth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pandepth

Alternatively, to install into a new environment, run::

    conda create -n envname pandepth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pandepth:<tag>

(see `pandepth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pandepth| image:: https://img.shields.io/conda/dn/bioconda/pandepth.svg?style=flat
   :target: https://anaconda.org/bioconda/pandepth
   :alt:   (downloads)
.. |docker_pandepth| image:: https://quay.io/repository/biocontainers/pandepth/status
   :target: https://quay.io/repository/biocontainers/pandepth
.. _`pandepth/tags`: https://quay.io/repository/biocontainers/pandepth?tab=tags


.. raw:: html

    <script>
        var package = "pandepth";
        var versions = ["2.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandepth/README.html