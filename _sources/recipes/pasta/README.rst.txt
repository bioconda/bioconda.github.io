:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasta'
.. highlight: bash

pasta
=====

.. conda:recipe:: pasta
   :replaces_section_title:
   :noindex:

   An implementation of the PASTA \(Practical Alignment using Sate and TrAnsitivity\) algorithm.

   :homepage: https://github.com/smirarab/pasta
   :documentation: https://github.com/smirarab/pasta/blob/v1.9.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-319-05269-4_15`, doi: :doi:`10.1089/cmb.2014.0156`

   


.. conda:package:: pasta

   |downloads_pasta| |docker_pasta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.3-0</code>,  <code>1.9.2-5</code>,  <code>1.9.2-4</code>,  <code>1.9.2-3</code>,  <code>1.9.2-2</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  <code>1.9.0-0</code>,  <code>1.7.8-4</code>,  </span></summary>
      

      ``1.9.3-0``,  ``1.9.2-5``,  ``1.9.2-4``,  ``1.9.2-3``,  ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.0-0``,  ``1.7.8-4``,  ``1.7.8-3``,  ``1.7.8-2``,  ``1.7.8-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on clustalw: ``>=2.1,<3.0a0``
   :depends on dendropy: ``>=5.0.8,<6.0a0``
   :depends on fasttree: ``>=2.1.11,<3.0a0``
   :depends on hmmer: ``>=3.4,<3.5.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on mafft: ``>=7.526,<8.0a0``
   :depends on muscle: ``<4``
   :depends on muscle: ``>=3.8.1551,<4.0a0``
   :depends on openjdk: 
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``
   :depends on prank: ``>=170427,<170428.0a0``
   :depends on pymongo: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on raxml: ``>=8.2.13,<9.0a0``

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

    pixi global install pasta

to add into an existing workspace instead, run::

    pixi add pasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pasta

Alternatively, to install into a new environment, run::

    conda create -n envname pasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pasta:<tag>

(see `pasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pasta| image:: https://img.shields.io/conda/dn/bioconda/pasta.svg?style=flat
   :target: https://anaconda.org/bioconda/pasta
   :alt:   (downloads)
.. |docker_pasta| image:: https://quay.io/repository/biocontainers/pasta/status
   :target: https://quay.io/repository/biocontainers/pasta
.. _`pasta/tags`: https://quay.io/repository/biocontainers/pasta?tab=tags


.. raw:: html

    <script>
        var package = "pasta";
        var versions = ["1.9.3","1.9.2","1.9.2","1.9.2","1.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasta/README.html