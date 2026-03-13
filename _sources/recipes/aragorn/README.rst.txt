:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aragorn'
.. highlight: bash

aragorn
=======

.. conda:recipe:: aragorn
   :replaces_section_title:
   :noindex:

   ARAGORN\, tRNA \(and tmRNA\) detection

   :homepage: http://www.ansikte.se/ARAGORN/
   :license: GPLv3
   :recipe: /`aragorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn/meta.yaml>`_

   


.. conda:package:: aragorn

   |downloads_aragorn| |docker_aragorn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.41-5</code>,  <code>1.2.41-4</code>,  <code>1.2.41-3</code>,  <code>1.2.41-2</code>,  <code>1.2.41-1</code>,  <code>1.2.41-0</code>,  <code>1.2.38-5</code>,  <code>1.2.38-4</code>,  <code>1.2.38-3</code>,  </span></summary>
      

      ``1.2.41-5``,  ``1.2.41-4``,  ``1.2.41-3``,  ``1.2.41-2``,  ``1.2.41-1``,  ``1.2.41-0``,  ``1.2.38-5``,  ``1.2.38-4``,  ``1.2.38-3``,  ``1.2.38-2``,  ``1.2.38-1``,  ``1.2.36-1``,  ``1.2.36-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install aragorn

to add into an existing workspace instead, run::

    pixi add aragorn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aragorn

Alternatively, to install into a new environment, run::

    conda create -n envname aragorn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aragorn:<tag>

(see `aragorn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aragorn| image:: https://img.shields.io/conda/dn/bioconda/aragorn.svg?style=flat
   :target: https://anaconda.org/bioconda/aragorn
   :alt:   (downloads)
.. |docker_aragorn| image:: https://quay.io/repository/biocontainers/aragorn/status
   :target: https://quay.io/repository/biocontainers/aragorn
.. _`aragorn/tags`: https://quay.io/repository/biocontainers/aragorn?tab=tags


.. raw:: html

    <script>
        var package = "aragorn";
        var versions = ["1.2.41","1.2.41","1.2.41","1.2.41","1.2.41"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aragorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aragorn/README.html