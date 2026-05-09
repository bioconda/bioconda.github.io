:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacedust'
.. highlight: bash

spacedust
=========

.. conda:recipe:: spacedust
   :replaces_section_title:
   :noindex:

   De novo discovery of conserved gene clusters in microbial genomes with Spacedust

   :homepage: https://github.com/soedinglab/spacedust
   :license: GPL / GPL-3
   :recipe: /`spacedust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacedust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacedust/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.10.02.616292v1`, biotools: :biotools:`spacedust`

   


.. conda:package:: spacedust

   |downloads_spacedust| |docker_spacedust|

   :versions:
      
      

      ``2.e56c505-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on aria2: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on foldseek: ``>=10.941cd33``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install spacedust

to add into an existing workspace instead, run::

    pixi add spacedust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spacedust

Alternatively, to install into a new environment, run::

    conda create -n envname spacedust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spacedust:<tag>

(see `spacedust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spacedust| image:: https://img.shields.io/conda/dn/bioconda/spacedust.svg?style=flat
   :target: https://anaconda.org/bioconda/spacedust
   :alt:   (downloads)
.. |docker_spacedust| image:: https://quay.io/repository/biocontainers/spacedust/status
   :target: https://quay.io/repository/biocontainers/spacedust
.. _`spacedust/tags`: https://quay.io/repository/biocontainers/spacedust?tab=tags


.. raw:: html

    <script>
        var package = "spacedust";
        var versions = ["2.e56c505"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacedust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacedust/README.html