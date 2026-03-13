:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allegro'
.. highlight: bash

allegro
=======

.. conda:recipe:: allegro
   :replaces_section_title:
   :noindex:

   A fast linkage and haplotype analysis utility making use of MTBDD to reduce complexity.

   :homepage: https://www.decode.com/software/allegro
   :license: INDIVIDUAL
   :recipe: /`allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro/meta.yaml>`_

   


.. conda:package:: allegro

   |downloads_allegro| |docker_allegro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3-10</code>,  <code>3-9</code>,  <code>3-8</code>,  <code>3-7</code>,  <code>3-6</code>,  <code>3-5</code>,  <code>3-4</code>,  <code>3-3</code>,  <code>3-2</code>,  </span></summary>
      

      ``3-10``,  ``3-9``,  ``3-8``,  ``3-7``,  ``3-6``,  ``3-5``,  ``3-4``,  ``3-3``,  ``3-2``,  ``3-1``,  ``2-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install allegro

to add into an existing workspace instead, run::

    pixi add allegro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install allegro

Alternatively, to install into a new environment, run::

    conda create -n envname allegro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/allegro:<tag>

(see `allegro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_allegro| image:: https://img.shields.io/conda/dn/bioconda/allegro.svg?style=flat
   :target: https://anaconda.org/bioconda/allegro
   :alt:   (downloads)
.. |docker_allegro| image:: https://quay.io/repository/biocontainers/allegro/status
   :target: https://quay.io/repository/biocontainers/allegro
.. _`allegro/tags`: https://quay.io/repository/biocontainers/allegro?tab=tags


.. raw:: html

    <script>
        var package = "allegro";
        var versions = ["3","3","3","3","3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allegro/README.html