:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ushuffle'
.. highlight: bash

ushuffle
========

.. conda:recipe:: ushuffle
   :replaces_section_title:
   :noindex:

   uShuffle\-\-\-a useful tool for shuffling biological sequences while preserving the k\-let counts.

   :homepage: http://digital.cs.usu.edu/~mjiang/ushuffle
   :developer docs: https://github.com/s-will/ushuffle
   :license: Custom
   :recipe: /`ushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle/meta.yaml>`_

   


.. conda:package:: ushuffle

   |downloads_ushuffle| |docker_ushuffle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-10</code>,  <code>1.2.2-9</code>,  <code>1.2.2-8</code>,  <code>1.2.2-7</code>,  <code>1.2.2-6</code>,  <code>1.2.2-5</code>,  <code>1.2.2-4</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  </span></summary>
      

      ``1.2.2-10``,  ``1.2.2-9``,  ``1.2.2-8``,  ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
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

    pixi global install ushuffle

to add into an existing workspace instead, run::

    pixi add ushuffle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ushuffle

Alternatively, to install into a new environment, run::

    conda create -n envname ushuffle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ushuffle:<tag>

(see `ushuffle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ushuffle| image:: https://img.shields.io/conda/dn/bioconda/ushuffle.svg?style=flat
   :target: https://anaconda.org/bioconda/ushuffle
   :alt:   (downloads)
.. |docker_ushuffle| image:: https://quay.io/repository/biocontainers/ushuffle/status
   :target: https://quay.io/repository/biocontainers/ushuffle
.. _`ushuffle/tags`: https://quay.io/repository/biocontainers/ushuffle?tab=tags


.. raw:: html

    <script>
        var package = "ushuffle";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ushuffle/README.html