:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage_ng'
.. highlight: bash

bandage_ng
==========

.. conda:recipe:: bandage_ng
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily.

   :homepage: https://github.com/asl/BandageNG
   :documentation: https://github.com/asl/BandageNG/blob/v2026.2.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bandage_ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage_ng

   |downloads_bandage_ng| |docker_bandage_ng|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2026.2.1-0</code>,  <code>2026.1.1-0</code>,  <code>2025.12.3-0</code>,  <code>2025.12.2-0</code>,  <code>2025.12.1-0</code>,  <code>2025.6.1-0</code>,  <code>2025.5.1-0</code>,  <code>2025.4.1-0</code>,  <code>2022.09-4</code>,  </span></summary>
      

      ``2026.2.1-0``,  ``2026.1.1-0``,  ``2025.12.3-0``,  ``2025.12.2-0``,  ``2025.12.1-0``,  ``2025.6.1-0``,  ``2025.5.1-0``,  ``2025.4.1-0``,  ``2022.09-4``,  ``2022.09-3``,  ``2022.09-2``,  ``2022.09-1``,  ``2022.09-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fonts-conda-ecosystem: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libvulkan-loader: ``>=1.4.328.1,<2.0a0``
   :depends on qt6-main: 
   :depends on xorg-libice: ``>=1.1.2,<2.0a0``
   :depends on xorg-libsm: ``>=1.2.6,<2.0a0``
   :depends on xorg-libx11: ``>=1.8.12,<2.0a0``
   :depends on xorg-libxcomposite: ``>=0.4.6,<1.0a0``
   :depends on xorg-libxdamage: ``>=1.1.6,<2.0a0``
   :depends on xorg-libxext: ``>=1.3.7,<2.0a0``
   :depends on xorg-libxxf86vm: ``>=1.1.7,<2.0a0``

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

    pixi global install bandage_ng

to add into an existing workspace instead, run::

    pixi add bandage_ng

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bandage_ng

Alternatively, to install into a new environment, run::

    conda create -n envname bandage_ng

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bandage_ng:<tag>

(see `bandage_ng/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bandage_ng| image:: https://img.shields.io/conda/dn/bioconda/bandage_ng.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage_ng
   :alt:   (downloads)
.. |docker_bandage_ng| image:: https://quay.io/repository/biocontainers/bandage_ng/status
   :target: https://quay.io/repository/biocontainers/bandage_ng
.. _`bandage_ng/tags`: https://quay.io/repository/biocontainers/bandage_ng?tab=tags


.. raw:: html

    <script>
        var package = "bandage_ng";
        var versions = ["2026.2.1","2026.1.1","2025.12.3","2025.12.2","2025.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage_ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage_ng/README.html