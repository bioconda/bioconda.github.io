:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop'
.. highlight: bash

scallop
=======

.. conda:recipe:: scallop
   :replaces_section_title:
   :noindex:

   Scallop is a reference\-based transcriptome assembler for RNA\-seq.

   :homepage: https://github.com/Kingsford-Group/scallop
   :license: BSD / BSD-3-Clause
   :recipe: /`scallop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop/meta.yaml>`_

   


.. conda:package:: scallop

   |downloads_scallop| |docker_scallop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.5-9</code>,  <code>0.10.5-8</code>,  <code>0.10.5-7</code>,  <code>0.10.5-6</code>,  <code>0.10.5-5</code>,  <code>0.10.5-4</code>,  <code>0.10.5-3</code>,  <code>0.10.5-2</code>,  <code>0.10.5-1</code>,  </span></summary>
      

      ``0.10.5-9``,  ``0.10.5-8``,  ``0.10.5-7``,  ``0.10.5-6``,  ``0.10.5-5``,  ``0.10.5-4``,  ``0.10.5-3``,  ``0.10.5-2``,  ``0.10.5-1``,  ``0.10.5-0``,  ``0.10.4-2``,  ``0.10.4-1``,  ``0.10.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on coin-or-clp: ``>=1.17,<1.18.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libxcrypt: ``>=4.4.36``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install scallop

to add into an existing workspace instead, run::

    pixi add scallop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scallop

Alternatively, to install into a new environment, run::

    conda create -n envname scallop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scallop:<tag>

(see `scallop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scallop| image:: https://img.shields.io/conda/dn/bioconda/scallop.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop
   :alt:   (downloads)
.. |docker_scallop| image:: https://quay.io/repository/biocontainers/scallop/status
   :target: https://quay.io/repository/biocontainers/scallop
.. _`scallop/tags`: https://quay.io/repository/biocontainers/scallop?tab=tags


.. raw:: html

    <script>
        var package = "scallop";
        var versions = ["0.10.5","0.10.5","0.10.5","0.10.5","0.10.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop/README.html