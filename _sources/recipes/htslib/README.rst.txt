:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htslib'
.. highlight: bash

htslib
======

.. conda:recipe:: htslib
   :replaces_section_title:
   :noindex:

   C library for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :documentation: http://www.htslib.org/
   
   :license: MIT / MIT
   :recipe: /`htslib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib/meta.yaml>`_
   :links: biotools: :biotools:`HTSlib`

   


.. conda:package:: htslib

   |downloads_htslib| |docker_htslib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23-0</code>,  <code>1.22.1-0</code>,  <code>1.22-0</code>,  <code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-2</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19.1-2</code>,  </span></summary>
      

      ``1.23-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-1``,  ``1.21-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.19.1-2``,  ``1.19.1-1``,  ``1.19.1-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-2``,  ``1.17-1``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-0``,  ``1.14-2``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.2-0``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.17.0,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.6.0,<4.0a0``

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

    pixi global install htslib

to add into an existing workspace instead, run::

    pixi add htslib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htslib

Alternatively, to install into a new environment, run::

    conda create -n envname htslib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htslib:<tag>

(see `htslib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htslib| image:: https://img.shields.io/conda/dn/bioconda/htslib.svg?style=flat
   :target: https://anaconda.org/bioconda/htslib
   :alt:   (downloads)
.. |docker_htslib| image:: https://quay.io/repository/biocontainers/htslib/status
   :target: https://quay.io/repository/biocontainers/htslib
.. _`htslib/tags`: https://quay.io/repository/biocontainers/htslib?tab=tags


.. raw:: html

    <script>
        var package = "htslib";
        var versions = ["1.23","1.22.1","1.22","1.21","1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htslib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htslib/README.html