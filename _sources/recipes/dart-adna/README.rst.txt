:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dart-adna'
.. highlight: bash

dart-adna
=========

.. conda:recipe:: dart-adna
   :replaces_section_title:
   :noindex:

   DART \- Damage\-Aware Read Translation for ancient DNA metagenomics

   :homepage: https://github.com/genomewalker/dart
   :documentation: https://github.com/genomewalker/dart/wiki
   
   :license: MIT
   :recipe: /`dart-adna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart-adna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dart-adna/meta.yaml>`_

   


.. conda:package:: dart-adna

   |downloads_dart-adna| |docker_dart-adna|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 
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

    pixi global install dart-adna

to add into an existing workspace instead, run::

    pixi add dart-adna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dart-adna

Alternatively, to install into a new environment, run::

    conda create -n envname dart-adna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dart-adna:<tag>

(see `dart-adna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dart-adna| image:: https://img.shields.io/conda/dn/bioconda/dart-adna.svg?style=flat
   :target: https://anaconda.org/bioconda/dart-adna
   :alt:   (downloads)
.. |docker_dart-adna| image:: https://quay.io/repository/biocontainers/dart-adna/status
   :target: https://quay.io/repository/biocontainers/dart-adna
.. _`dart-adna/tags`: https://quay.io/repository/biocontainers/dart-adna?tab=tags


.. raw:: html

    <script>
        var package = "dart-adna";
        var versions = ["1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dart-adna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dart-adna/README.html