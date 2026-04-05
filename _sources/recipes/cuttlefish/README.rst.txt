:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuttlefish'
.. highlight: bash

cuttlefish
==========

.. conda:recipe:: cuttlefish
   :replaces_section_title:
   :noindex:

   Construction of the compacted de Bruijn graph efficiently.

   :homepage: https://github.com/COMBINE-lab/cuttlefish
   :documentation: https://github.com/COMBINE-lab/cuttlefish/blob/v2.2.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cuttlefish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab309`, doi: :doi:`10.1186/s13059-022-02743-6`, biotools: :biotools:`cuttlefish`

   


.. conda:package:: cuttlefish

   |downloads_cuttlefish| |docker_cuttlefish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-5</code>,  <code>2.2.0-4</code>,  <code>2.2.0-3</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=12``
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install cuttlefish

to add into an existing workspace instead, run::

    pixi add cuttlefish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cuttlefish

Alternatively, to install into a new environment, run::

    conda create -n envname cuttlefish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cuttlefish:<tag>

(see `cuttlefish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cuttlefish| image:: https://img.shields.io/conda/dn/bioconda/cuttlefish.svg?style=flat
   :target: https://anaconda.org/bioconda/cuttlefish
   :alt:   (downloads)
.. |docker_cuttlefish| image:: https://quay.io/repository/biocontainers/cuttlefish/status
   :target: https://quay.io/repository/biocontainers/cuttlefish
.. _`cuttlefish/tags`: https://quay.io/repository/biocontainers/cuttlefish?tab=tags


.. raw:: html

    <script>
        var package = "cuttlefish";
        var versions = ["2.2.0","2.2.0","2.2.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuttlefish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuttlefish/README.html