:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lighter'
.. highlight: bash

lighter
=======

.. conda:recipe:: lighter
   :replaces_section_title:
   :noindex:

   Lighter is a kmer\-based error correction method for whole genome sequencing data.

   :homepage: https://github.com/mourisl/Lighter
   :documentation: https://github.com/mourisl/Lighter/blob/v1.1.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lighter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter/meta.yaml>`_
   :links: biotools: :biotools:`Lighter`, doi: :doi:`10.1186/s13059-014-0509-9`, usegalaxy-eu: :usegalaxy-eu:`lighter`

   


.. conda:package:: lighter

   |downloads_lighter| |docker_lighter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-2</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-6</code>,  <code>1.1.2-5</code>,  <code>1.1.2-4</code>,  <code>1.1.2-3</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  </span></summary>
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      
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

    pixi global install lighter

to add into an existing workspace instead, run::

    pixi add lighter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lighter

Alternatively, to install into a new environment, run::

    conda create -n envname lighter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lighter:<tag>

(see `lighter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lighter| image:: https://img.shields.io/conda/dn/bioconda/lighter.svg?style=flat
   :target: https://anaconda.org/bioconda/lighter
   :alt:   (downloads)
.. |docker_lighter| image:: https://quay.io/repository/biocontainers/lighter/status
   :target: https://quay.io/repository/biocontainers/lighter
.. _`lighter/tags`: https://quay.io/repository/biocontainers/lighter?tab=tags


.. raw:: html

    <script>
        var package = "lighter";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lighter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lighter/README.html