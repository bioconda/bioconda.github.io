:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonomy'
.. highlight: bash

taxonomy
========

.. conda:recipe:: taxonomy
   :replaces_section_title:
   :noindex:

   Python and Rust library for loading\, saving\, and manipulating taxonomic trees.

   :homepage: https://github.com/onecodex/taxonomy
   :documentation: https://docs.rs/crate/taxonomy/latest
   
   :license: MIT / MIT
   :recipe: /`taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy/meta.yaml>`_

   


.. conda:package:: taxonomy

   |downloads_taxonomy| |docker_taxonomy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-3</code>,  <code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  </span></summary>
      

      ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install taxonomy

to add into an existing workspace instead, run::

    pixi add taxonomy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxonomy

Alternatively, to install into a new environment, run::

    conda create -n envname taxonomy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxonomy:<tag>

(see `taxonomy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonomy
   :alt:   (downloads)
.. |docker_taxonomy| image:: https://quay.io/repository/biocontainers/taxonomy/status
   :target: https://quay.io/repository/biocontainers/taxonomy
.. _`taxonomy/tags`: https://quay.io/repository/biocontainers/taxonomy?tab=tags


.. raw:: html

    <script>
        var package = "taxonomy";
        var versions = ["0.10.3","0.10.2","0.10.1","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonomy/README.html