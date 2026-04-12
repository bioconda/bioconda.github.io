:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dms'
.. highlight: bash

dms
===

.. conda:recipe:: dms
   :replaces_section_title:
   :noindex:

   Comprehensive taxonomic and phylogenetic comparison of shotgun metagenomes at the species level.

   :homepage: https://github.com/qibebt-bioinfo/dynamic-meta-storms
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz910`

   


.. conda:package:: dms

   |downloads_dms| |docker_dms|

   :versions:
      
      

      ``1.1-2``,  ``1.1-0``

      

   
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

    pixi global install dms

to add into an existing workspace instead, run::

    pixi add dms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dms

Alternatively, to install into a new environment, run::

    conda create -n envname dms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dms:<tag>

(see `dms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dms| image:: https://img.shields.io/conda/dn/bioconda/dms.svg?style=flat
   :target: https://anaconda.org/bioconda/dms
   :alt:   (downloads)
.. |docker_dms| image:: https://quay.io/repository/biocontainers/dms/status
   :target: https://quay.io/repository/biocontainers/dms
.. _`dms/tags`: https://quay.io/repository/biocontainers/dms?tab=tags


.. raw:: html

    <script>
        var package = "dms";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dms/README.html