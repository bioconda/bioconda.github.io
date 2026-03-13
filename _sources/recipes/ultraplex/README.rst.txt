:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraplex'
.. highlight: bash

ultraplex
=========

.. conda:recipe:: ultraplex
   :replaces_section_title:
   :noindex:

   An all\-in\-one software package for processing and demultiplexing fastq files.

   :homepage: https://github.com/ulelab/ultraplex
   :documentation: https://github.com/ulelab/ultraplex/blob/1.2.10/README.md
   
   :license: MIT / MIT
   :recipe: /`ultraplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex/meta.yaml>`_

   


.. conda:package:: ultraplex

   |downloads_ultraplex| |docker_ultraplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.10-0</code>,  <code>1.2.9-4</code>,  <code>1.2.9-3</code>,  <code>1.2.9-2</code>,  <code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.5-2</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  </span></summary>
      

      ``1.2.10-0``,  ``1.2.9-4``,  ``1.2.9-3``,  ``1.2.9-2``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dnaio: ``>=0.5.0``
   :depends on libgcc: ``>=13``
   :depends on multiprocess: 
   :depends on pigz: 
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on xopen: ``>=1.0.0``

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

    pixi global install ultraplex

to add into an existing workspace instead, run::

    pixi add ultraplex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ultraplex

Alternatively, to install into a new environment, run::

    conda create -n envname ultraplex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ultraplex:<tag>

(see `ultraplex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ultraplex| image:: https://img.shields.io/conda/dn/bioconda/ultraplex.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraplex
   :alt:   (downloads)
.. |docker_ultraplex| image:: https://quay.io/repository/biocontainers/ultraplex/status
   :target: https://quay.io/repository/biocontainers/ultraplex
.. _`ultraplex/tags`: https://quay.io/repository/biocontainers/ultraplex?tab=tags


.. raw:: html

    <script>
        var package = "ultraplex";
        var versions = ["1.2.10","1.2.9","1.2.9","1.2.9","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraplex/README.html