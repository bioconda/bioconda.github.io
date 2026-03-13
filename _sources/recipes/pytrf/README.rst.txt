:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytrf'
.. highlight: bash

pytrf
=====

.. conda:recipe:: pytrf
   :replaces_section_title:
   :noindex:

   a fast Python package for finding tandem repeat sequences

   :homepage: https://github.com/lmdu/pytrf
   :license: MIT / MIT
   :recipe: /`pytrf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrf/meta.yaml>`_

   


.. conda:package:: pytrf

   |downloads_pytrf| |docker_pytrf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on pyfastx: ``>=2.1``
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

    pixi global install pytrf

to add into an existing workspace instead, run::

    pixi add pytrf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytrf

Alternatively, to install into a new environment, run::

    conda create -n envname pytrf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytrf:<tag>

(see `pytrf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytrf| image:: https://img.shields.io/conda/dn/bioconda/pytrf.svg?style=flat
   :target: https://anaconda.org/bioconda/pytrf
   :alt:   (downloads)
.. |docker_pytrf| image:: https://quay.io/repository/biocontainers/pytrf/status
   :target: https://quay.io/repository/biocontainers/pytrf
.. _`pytrf/tags`: https://quay.io/repository/biocontainers/pytrf?tab=tags


.. raw:: html

    <script>
        var package = "pytrf";
        var versions = ["1.4.2","1.4.2","1.4.1","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytrf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytrf/README.html