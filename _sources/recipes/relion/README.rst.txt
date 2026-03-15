:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relion'
.. highlight: bash

relion
======

.. conda:recipe:: relion
   :replaces_section_title:
   :noindex:

   Image\-processing software for cryo\-electron microscopy.

   :homepage: https://github.com/3dem/relion
   :documentation: https://relion.readthedocs.io/en/latest
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`relion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion/meta.yaml>`_

   


.. conda:package:: relion

   |downloads_relion| |docker_relion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.0.2-2</code>,  <code>4.0.2-1</code>,  <code>4.0.2-0</code>,  <code>4.0.1-3</code>,  <code>4.0.1-2</code>,  <code>4.0.1-1</code>,  <code>4.0.1-0</code>,  </span></summary>
      

      ``5.0.1-0``,  ``5.0.0-0``,  ``4.0.2-2``,  ``4.0.2-1``,  ``4.0.2-0``,  ``4.0.1-3``,  ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libpng: ``>=1.6.50,<1.7.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libtiff: ``>=4.7.1,<4.8.0a0``
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on pytorch: 
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install relion

to add into an existing workspace instead, run::

    pixi add relion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install relion

Alternatively, to install into a new environment, run::

    conda create -n envname relion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/relion:<tag>

(see `relion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_relion| image:: https://img.shields.io/conda/dn/bioconda/relion.svg?style=flat
   :target: https://anaconda.org/bioconda/relion
   :alt:   (downloads)
.. |docker_relion| image:: https://quay.io/repository/biocontainers/relion/status
   :target: https://quay.io/repository/biocontainers/relion
.. _`relion/tags`: https://quay.io/repository/biocontainers/relion?tab=tags


.. raw:: html

    <script>
        var package = "relion";
        var versions = ["5.0.1","5.0.0","4.0.2","4.0.2","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relion/README.html