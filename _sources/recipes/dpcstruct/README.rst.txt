:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dpcstruct'
.. highlight: bash

dpcstruct
=========

.. conda:recipe:: dpcstruct
   :replaces_section_title:
   :noindex:

   Unsupervised clustering algorithm for identifying and classifying protein domains based on structural similarity.

   :homepage: https://github.com/RitAreaSciencePark/DPCstruct
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dpcstruct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dpcstruct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dpcstruct/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.08.21.608992`, biotools: :biotools:`dpcstruct`

   


.. conda:package:: dpcstruct

   |downloads_dpcstruct| |docker_dpcstruct|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install dpcstruct

to add into an existing workspace instead, run::

    pixi add dpcstruct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dpcstruct

Alternatively, to install into a new environment, run::

    conda create -n envname dpcstruct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dpcstruct:<tag>

(see `dpcstruct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dpcstruct| image:: https://img.shields.io/conda/dn/bioconda/dpcstruct.svg?style=flat
   :target: https://anaconda.org/bioconda/dpcstruct
   :alt:   (downloads)
.. |docker_dpcstruct| image:: https://quay.io/repository/biocontainers/dpcstruct/status
   :target: https://quay.io/repository/biocontainers/dpcstruct
.. _`dpcstruct/tags`: https://quay.io/repository/biocontainers/dpcstruct?tab=tags


.. raw:: html

    <script>
        var package = "dpcstruct";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dpcstruct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dpcstruct/README.html