:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delly'
.. highlight: bash

delly
=====

.. conda:recipe:: delly
   :replaces_section_title:
   :noindex:

   Structural variant discovery by integrated paired\-end and split\-read analysis.

   :homepage: https://github.com/dellytools/delly
   :documentation: https://github.com/dellytools/delly/blob/v1.7.2/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`delly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts378`, biotools: :biotools:`delly2`, usegalaxy-eu: :usegalaxy-eu:`delly_cnv`, usegalaxy-eu: :usegalaxy-eu:`delly_classify`, usegalaxy-eu: :usegalaxy-eu:`delly_lr`, usegalaxy-eu: :usegalaxy-eu:`delly_call`, usegalaxy-eu: :usegalaxy-eu:`delly_merge`, usegalaxy-eu: :usegalaxy-eu:`delly_filter`

   


.. conda:package:: delly

   |downloads_delly| |docker_delly|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-0</code>,  <code>1.5.0-0</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  </span></summary>
      

      ``1.7.2-0``,  ``1.5.0-0``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.6-4``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-3``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.9-4``,  ``0.7.8-4``,  ``0.7.8-3``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.6-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install delly

to add into an existing workspace instead, run::

    pixi add delly

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install delly

Alternatively, to install into a new environment, run::

    conda create -n envname delly

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/delly:<tag>

(see `delly/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_delly| image:: https://img.shields.io/conda/dn/bioconda/delly.svg?style=flat
   :target: https://anaconda.org/bioconda/delly
   :alt:   (downloads)
.. |docker_delly| image:: https://quay.io/repository/biocontainers/delly/status
   :target: https://quay.io/repository/biocontainers/delly
.. _`delly/tags`: https://quay.io/repository/biocontainers/delly?tab=tags


.. raw:: html

    <script>
        var package = "delly";
        var versions = ["1.7.2","1.5.0","1.3.3","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delly/README.html