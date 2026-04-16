:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysamstats'
.. highlight: bash

pysamstats
==========

.. conda:recipe:: pysamstats
   :replaces_section_title:
   :noindex:

   Calculate read mapping stats from SAM\/BAM\/CRAM

   :homepage: https://github.com/alimanfoo/pysamstats
   :license: MIT
   :recipe: /`pysamstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats/meta.yaml>`_
   :links: biotools: :biotools:`pysamstats`

   


.. conda:package:: pysamstats

   |downloads_pysamstats| |docker_pysamstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-15</code>,  <code>1.1.2-14</code>,  <code>1.1.2-13</code>,  <code>1.1.2-12</code>,  <code>1.1.2-11</code>,  <code>1.1.2-10</code>,  <code>1.1.2-9</code>,  <code>1.1.2-8</code>,  <code>1.1.2-7</code>,  </span></summary>
      

      ``1.1.2-15``,  ``1.1.2-14``,  ``1.1.2-13``,  ``1.1.2-12``,  ``1.1.2-11``,  ``1.1.2-10``,  ``1.1.2-9``,  ``1.1.2-8``,  ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.24.3-0``,  ``0.24.2-1``,  ``0.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on pysam: ``>=0.23.0,<0.23.1.0a0``
   :depends on pysam: ``>=0.23.0,<0.24.0a0``
   :depends on pytables: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: 

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

    pixi global install pysamstats

to add into an existing workspace instead, run::

    pixi add pysamstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pysamstats

Alternatively, to install into a new environment, run::

    conda create -n envname pysamstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pysamstats:<tag>

(see `pysamstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pysamstats| image:: https://img.shields.io/conda/dn/bioconda/pysamstats.svg?style=flat
   :target: https://anaconda.org/bioconda/pysamstats
   :alt:   (downloads)
.. |docker_pysamstats| image:: https://quay.io/repository/biocontainers/pysamstats/status
   :target: https://quay.io/repository/biocontainers/pysamstats
.. _`pysamstats/tags`: https://quay.io/repository/biocontainers/pysamstats?tab=tags


.. raw:: html

    <script>
        var package = "pysamstats";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysamstats/README.html