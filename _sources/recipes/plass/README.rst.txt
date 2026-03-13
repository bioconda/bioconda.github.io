:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plass'
.. highlight: bash

plass
=====

.. conda:recipe:: plass
   :replaces_section_title:
   :noindex:

   Plass \(Protein\-Level ASSembler\) and PenguiN \(Protein\-guided Nucleotide assembler\) are methods to assemble short read sequencing data on a protein level to proteins or DNA contigs

   :homepage: https://github.com/soedinglab/plass
   :license: GPLv3
   :recipe: /`plass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0437-4`, doi: :doi:`10.1101/2024.03.29.587318`, biotools: :biotools:`plass`

   


.. conda:package:: plass

   |downloads_plass| |docker_plass|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.cf8933-3</code>,  <code>5.cf8933-2</code>,  <code>5.cf8933-1</code>,  <code>5.cf8933-0</code>,  <code>4.687d7-5</code>,  <code>4.687d7-4</code>,  <code>4.687d7-3</code>,  <code>4.687d7-2</code>,  <code>4.687d7-1</code>,  </span></summary>
      

      ``5.cf8933-3``,  ``5.cf8933-2``,  ``5.cf8933-1``,  ``5.cf8933-0``,  ``4.687d7-5``,  ``4.687d7-4``,  ``4.687d7-3``,  ``4.687d7-2``,  ``4.687d7-1``,  ``4.687d7-0``,  ``3.764a3-0``,  ``2.c7e35-1``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
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

    pixi global install plass

to add into an existing workspace instead, run::

    pixi add plass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plass

Alternatively, to install into a new environment, run::

    conda create -n envname plass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plass:<tag>

(see `plass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plass| image:: https://img.shields.io/conda/dn/bioconda/plass.svg?style=flat
   :target: https://anaconda.org/bioconda/plass
   :alt:   (downloads)
.. |docker_plass| image:: https://quay.io/repository/biocontainers/plass/status
   :target: https://quay.io/repository/biocontainers/plass
.. _`plass/tags`: https://quay.io/repository/biocontainers/plass?tab=tags


.. raw:: html

    <script>
        var package = "plass";
        var versions = ["5.cf8933","5.cf8933","5.cf8933","5.cf8933","4.687d7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plass/README.html