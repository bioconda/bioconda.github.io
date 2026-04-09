:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-mem2'
.. highlight: bash

bwa-mem2
========

.. conda:recipe:: bwa-mem2
   :replaces_section_title:
   :noindex:

   The next version of bwa\-mem.

   :homepage: https://github.com/bwa-mem2/bwa-mem2
   :documentation: https://github.com/bwa-mem2/bwa-mem2/blob/v2.3/README.md
   
   :license: MIT / MIT
   :recipe: /`bwa-mem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2/meta.yaml>`_
   :links: doi: :doi:`10.1109/IPDPS.2019.00041`, biotools: :biotools:`bwa-mem2`, usegalaxy-eu: :usegalaxy-eu:`bwa_mem2`, usegalaxy-eu: :usegalaxy-eu:`bwa_mem2_idx`

   


.. conda:package:: bwa-mem2

   |downloads_bwa-mem2| |docker_bwa-mem2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-0</code>,  <code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  </span></summary>
      

      ``2.3-0``,  ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bwa-mem2

to add into an existing workspace instead, run::

    pixi add bwa-mem2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bwa-mem2

Alternatively, to install into a new environment, run::

    conda create -n envname bwa-mem2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bwa-mem2:<tag>

(see `bwa-mem2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bwa-mem2| image:: https://img.shields.io/conda/dn/bioconda/bwa-mem2.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-mem2
   :alt:   (downloads)
.. |docker_bwa-mem2| image:: https://quay.io/repository/biocontainers/bwa-mem2/status
   :target: https://quay.io/repository/biocontainers/bwa-mem2
.. _`bwa-mem2/tags`: https://quay.io/repository/biocontainers/bwa-mem2?tab=tags


.. raw:: html

    <script>
        var package = "bwa-mem2";
        var versions = ["2.3","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-mem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-mem2/README.html