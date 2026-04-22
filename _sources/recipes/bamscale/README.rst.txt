:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamscale'
.. highlight: bash

bamscale
========

.. conda:recipe:: bamscale
   :replaces_section_title:
   :noindex:

   BAMscale is a one\-step tool for either 1\) quantifying and normalizing the coverage of peaks.

   :homepage: https://github.com/ncbi/BAMscale
   :documentation: https://github.com/ncbi/BAMscale/wiki
   
   :license: Public Domain
   :recipe: /`bamscale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamscale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamscale/meta.yaml>`_
   :links: biotools: :biotools:`bamscale`

   BAMscale is a one\-step tool for either 1\) quantifying and normalizing the coverage of peaks or 2\)
   generated scaled BigWig files for easy visualization of commonly used DNA\-seq capture based methods.



.. conda:package:: bamscale

   |downloads_bamscale| |docker_bamscale|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.9-0</code>,  <code>0.0.5-9</code>,  <code>0.0.5-8</code>,  <code>0.0.5-7</code>,  <code>0.0.5-6</code>,  <code>0.0.5-5</code>,  <code>0.0.5-4</code>,  <code>0.0.5-3</code>,  <code>0.0.5-2</code>,  </span></summary>
      

      ``0.0.9-0``,  ``0.0.5-9``,  ``0.0.5-8``,  ``0.0.5-7``,  ``0.0.5-6``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends on libcurl: ``>=8.10.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install bamscale

to add into an existing workspace instead, run::

    pixi add bamscale

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamscale

Alternatively, to install into a new environment, run::

    conda create -n envname bamscale

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamscale:<tag>

(see `bamscale/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamscale| image:: https://img.shields.io/conda/dn/bioconda/bamscale.svg?style=flat
   :target: https://anaconda.org/bioconda/bamscale
   :alt:   (downloads)
.. |docker_bamscale| image:: https://quay.io/repository/biocontainers/bamscale/status
   :target: https://quay.io/repository/biocontainers/bamscale
.. _`bamscale/tags`: https://quay.io/repository/biocontainers/bamscale?tab=tags


.. raw:: html

    <script>
        var package = "bamscale";
        var versions = ["0.0.9","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamscale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamscale/README.html