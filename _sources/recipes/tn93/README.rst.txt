:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tn93'
.. highlight: bash

tn93
====

.. conda:recipe:: tn93
   :replaces_section_title:
   :noindex:

   This is a simple program meant to compute pairwise distances between aligned nucleotide sequences in sequential FASTA format using the Tamura Nei 93 distance.

   :homepage: https://github.com/veg/tn93
   :documentation: https://github.com/veg/tn93/blob/v1.0.15/README.md
   
   :license: MIT / MIT
   :recipe: /`tn93 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93/meta.yaml>`_
   :links: biotools: :biotools:`tn93`, usegalaxy-eu: :usegalaxy-eu:`tn93`, usegalaxy-eu: :usegalaxy-eu:`tn93_filter`, usegalaxy-eu: :usegalaxy-eu:`tn93_cluster`, doi: :doi:`10.1093/molbev/msy016`

   


.. conda:package:: tn93

   |downloads_tn93| |docker_tn93|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-0</code>,  <code>1.0.14-1</code>,  <code>1.0.14-0</code>,  <code>1.0.13-1</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  </span></summary>
      

      ``1.0.15-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install tn93

to add into an existing workspace instead, run::

    pixi add tn93

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tn93

Alternatively, to install into a new environment, run::

    conda create -n envname tn93

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tn93:<tag>

(see `tn93/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tn93| image:: https://img.shields.io/conda/dn/bioconda/tn93.svg?style=flat
   :target: https://anaconda.org/bioconda/tn93
   :alt:   (downloads)
.. |docker_tn93| image:: https://quay.io/repository/biocontainers/tn93/status
   :target: https://quay.io/repository/biocontainers/tn93
.. _`tn93/tags`: https://quay.io/repository/biocontainers/tn93?tab=tags


.. raw:: html

    <script>
        var package = "tn93";
        var versions = ["1.0.15","1.0.14","1.0.14","1.0.13","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tn93/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tn93/README.html