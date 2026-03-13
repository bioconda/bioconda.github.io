:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locityper'
.. highlight: bash

locityper
=========

.. conda:recipe:: locityper
   :replaces_section_title:
   :noindex:

   Targeted genotyper for complex polymorphic loci from short and long read WGS.

   :homepage: https://github.com/tprodanov/locityper
   :license: MIT / MIT
   :recipe: /`locityper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locityper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locityper/meta.yaml>`_

   


.. conda:package:: locityper

   |downloads_locityper| |docker_locityper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.3-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.19.1-0``,  ``0.18.0-0``,  ``0.17.5-0``,  ``0.17.4-1``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-0``,  ``0.16.9-0``,  ``0.16.8-0``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.13.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on kmer-jellyfish: ``>=1.0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on minimap2: ``>=2.26``
   :depends on pysam: 
   :depends on python: 
   :depends on samtools: ``>=1.19``
   :depends on strobealign: ``>=0.17``

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

    pixi global install locityper

to add into an existing workspace instead, run::

    pixi add locityper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install locityper

Alternatively, to install into a new environment, run::

    conda create -n envname locityper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/locityper:<tag>

(see `locityper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_locityper| image:: https://img.shields.io/conda/dn/bioconda/locityper.svg?style=flat
   :target: https://anaconda.org/bioconda/locityper
   :alt:   (downloads)
.. |docker_locityper| image:: https://quay.io/repository/biocontainers/locityper/status
   :target: https://quay.io/repository/biocontainers/locityper
.. _`locityper/tags`: https://quay.io/repository/biocontainers/locityper?tab=tags


.. raw:: html

    <script>
        var package = "locityper";
        var versions = ["1.3.4","1.3.3","1.3.2","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locityper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locityper/README.html