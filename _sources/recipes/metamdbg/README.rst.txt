:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamdbg'
.. highlight: bash

metamdbg
========

.. conda:recipe:: metamdbg
   :replaces_section_title:
   :noindex:

   MetaMDBG\: a lightweight assembler for long and accurate metagenomics reads.

   :homepage: https://github.com/GaetanBenoitDev/metaMDBG
   :documentation: https://github.com/GaetanBenoitDev/metaMDBG/blob/metaMDBG-1.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`metamdbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamdbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamdbg/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01983-6`

   


.. conda:package:: metamdbg

   |downloads_metamdbg| |docker_metamdbg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: ``2.28.*``
   :depends on time: ``1.8.*``

   :additional platforms:
      

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

    pixi global install metamdbg

to add into an existing workspace instead, run::

    pixi add metamdbg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metamdbg

Alternatively, to install into a new environment, run::

    conda create -n envname metamdbg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metamdbg:<tag>

(see `metamdbg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metamdbg| image:: https://img.shields.io/conda/dn/bioconda/metamdbg.svg?style=flat
   :target: https://anaconda.org/bioconda/metamdbg
   :alt:   (downloads)
.. |docker_metamdbg| image:: https://quay.io/repository/biocontainers/metamdbg/status
   :target: https://quay.io/repository/biocontainers/metamdbg
.. _`metamdbg/tags`: https://quay.io/repository/biocontainers/metamdbg?tab=tags


.. raw:: html

    <script>
        var package = "metamdbg";
        var versions = ["1.3.1","1.3","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamdbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamdbg/README.html