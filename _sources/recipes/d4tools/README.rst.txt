:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'd4tools'
.. highlight: bash

d4tools
=======

.. conda:recipe:: d4tools
   :replaces_section_title:
   :noindex:

   The D4 command line utility program.

   :homepage: https://github.com/38/d4-format
   :documentation: https://github.com/38/d4-format/blob/v0.3.11/README.md
   
   :license: MIT / MIT
   :recipe: /`d4tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools/meta.yaml>`_
   :links: doi: :doi:`10.1038/s43588-021-00085-0`

   


.. conda:package:: d4tools

   |downloads_d4tools| |docker_d4tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.11-3</code>,  <code>0.3.11-2</code>,  <code>0.3.11-1</code>,  <code>0.3.11-0</code>,  <code>0.3.10-1</code>,  <code>0.3.10-0</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  </span></summary>
      

      ``0.3.11-3``,  ``0.3.11-2``,  ``0.3.11-1``,  ``0.3.11-0``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on starcode: 

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

    pixi global install d4tools

to add into an existing workspace instead, run::

    pixi add d4tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install d4tools

Alternatively, to install into a new environment, run::

    conda create -n envname d4tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/d4tools:<tag>

(see `d4tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_d4tools| image:: https://img.shields.io/conda/dn/bioconda/d4tools.svg?style=flat
   :target: https://anaconda.org/bioconda/d4tools
   :alt:   (downloads)
.. |docker_d4tools| image:: https://quay.io/repository/biocontainers/d4tools/status
   :target: https://quay.io/repository/biocontainers/d4tools
.. _`d4tools/tags`: https://quay.io/repository/biocontainers/d4tools?tab=tags


.. raw:: html

    <script>
        var package = "d4tools";
        var versions = ["0.3.11","0.3.11","0.3.11","0.3.11","0.3.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/d4tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/d4tools/README.html