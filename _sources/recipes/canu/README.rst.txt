:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canu'
.. highlight: bash

canu
====

.. conda:recipe:: canu
   :replaces_section_title:
   :noindex:

   Canu is a fork of the Celera Assembler designed for high\-noise single\-molecule sequencing.

   :homepage: https://github.com/marbl/canu
   :documentation: https://canu.readthedocs.org
   
   :license: GPL / GPL-2.0-or-later and others
   :recipe: /`canu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`canu`, biotools: :biotools:`canu`, biotools: :biotools:`hicanu`, doi: :doi:`10.1101/gr.215087.116`, doi: :doi:`10.1038/nbt.4277`, doi: :doi:`10.1101/gr.263566.120`

   


.. conda:package:: canu

   |downloads_canu| |docker_canu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-2</code>,  <code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2-0</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.0-0</code>,  <code>1.9-1</code>,  </span></summary>
      

      ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.0-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6-1``,  ``1.5-1``,  ``1.5-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on gnuplot: ``>=5.2``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: 
   :depends on openjdk: 
   :depends on perl: 
   :depends on perl-filesys-df: 
   :depends on samtools: 
   :depends on xorg-libxfixes: ``>=6.0.1,<7.0a0``

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

    pixi global install canu

to add into an existing workspace instead, run::

    pixi add canu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install canu

Alternatively, to install into a new environment, run::

    conda create -n envname canu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/canu:<tag>

(see `canu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_canu| image:: https://img.shields.io/conda/dn/bioconda/canu.svg?style=flat
   :target: https://anaconda.org/bioconda/canu
   :alt:   (downloads)
.. |docker_canu| image:: https://quay.io/repository/biocontainers/canu/status
   :target: https://quay.io/repository/biocontainers/canu
.. _`canu/tags`: https://quay.io/repository/biocontainers/canu?tab=tags


.. raw:: html

    <script>
        var package = "canu";
        var versions = ["2.3","2.3","2.3","2.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canu/README.html