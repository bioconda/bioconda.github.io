:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectral_hk'
.. highlight: bash

spectral_hk
===========

.. conda:recipe:: spectral_hk
   :replaces_section_title:
   :noindex:

   NCGC Spectral HashKey.

   :homepage: https://bitbucket.org/ncgc/spectral_hk
   :license: PUBLIC DOMAIN
   :recipe: /`spectral_hk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectral_hk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectral_hk/meta.yaml>`_

   


.. conda:package:: spectral_hk

   |downloads_spectral_hk| |docker_spectral_hk|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 

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

    pixi global install spectral_hk

to add into an existing workspace instead, run::

    pixi add spectral_hk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectral_hk

Alternatively, to install into a new environment, run::

    conda create -n envname spectral_hk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectral_hk:<tag>

(see `spectral_hk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectral_hk| image:: https://img.shields.io/conda/dn/bioconda/spectral_hk.svg?style=flat
   :target: https://anaconda.org/bioconda/spectral_hk
   :alt:   (downloads)
.. |docker_spectral_hk| image:: https://quay.io/repository/biocontainers/spectral_hk/status
   :target: https://quay.io/repository/biocontainers/spectral_hk
.. _`spectral_hk/tags`: https://quay.io/repository/biocontainers/spectral_hk?tab=tags


.. raw:: html

    <script>
        var package = "spectral_hk";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectral_hk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectral_hk/README.html