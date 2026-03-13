:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skder'
.. highlight: bash

skder
=====

.. conda:recipe:: skder
   :replaces_section_title:
   :noindex:

   skDER \& CiDDER\: efficient \& high\-resolution dereplication methods for microbial genomes

   :homepage: https://github.com/raufs/skDER
   :license: BSD / BSD-3-Clause license
   :recipe: /`skder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder/meta.yaml>`_

   


.. conda:package:: skder

   |downloads_skder| |docker_skder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-2</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.9-0</code>,  </span></summary>
      

      ``1.3.4-2``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.9-0``,  ``1.2.8-1``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiofile: 
   :depends on aiohttp: 
   :depends on biopython: 
   :depends on cd-hit: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on pyrodigal: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on seaborn: 
   :depends on setuptools: 
   :depends on skani: 
   :depends on tqdm: 
   :depends on wget: 

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

    pixi global install skder

to add into an existing workspace instead, run::

    pixi add skder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install skder

Alternatively, to install into a new environment, run::

    conda create -n envname skder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/skder:<tag>

(see `skder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_skder| image:: https://img.shields.io/conda/dn/bioconda/skder.svg?style=flat
   :target: https://anaconda.org/bioconda/skder
   :alt:   (downloads)
.. |docker_skder| image:: https://quay.io/repository/biocontainers/skder/status
   :target: https://quay.io/repository/biocontainers/skder
.. _`skder/tags`: https://quay.io/repository/biocontainers/skder?tab=tags


.. raw:: html

    <script>
        var package = "skder";
        var versions = ["1.3.4","1.3.4","1.3.4","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skder/README.html