:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diamond'
.. highlight: bash

diamond
=======

.. conda:recipe:: diamond
   :replaces_section_title:
   :noindex:

   Accelerated BLAST compatible local sequence aligner.

   :homepage: https://github.com/bbuchfink/diamond
   :documentation: https://github.com/bbuchfink/diamond/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond/meta.yaml>`_
   :links: biotools: :biotools:`diamond`, usegalaxy-eu: :usegalaxy-eu:`bg_diamond`, usegalaxy-eu: :usegalaxy-eu:`bg_diamond_makedb`, usegalaxy-eu: :usegalaxy-eu:`bg_diamond_view`, doi: :doi:`10.1038/s41592-021-01101-x`

   


.. conda:package:: diamond

   |downloads_diamond| |docker_diamond|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.24-0</code>,  <code>2.1.23-0</code>,  <code>2.1.22-0</code>,  <code>2.1.21-0</code>,  <code>2.1.20-0</code>,  <code>2.1.19-0</code>,  <code>2.1.18-0</code>,  <code>2.1.17-0</code>,  <code>2.1.16-0</code>,  </span></summary>
      

      ``2.1.24-0``,  ``2.1.23-0``,  ``2.1.22-0``,  ``2.1.21-0``,  ``2.1.20-0``,  ``2.1.19-0``,  ``2.1.18-0``,  ``2.1.17-0``,  ``2.1.16-0``,  ``2.1.15-0``,  ``2.1.14-0``,  ``2.1.13-0``,  ``2.1.12-3``,  ``2.1.12-2``,  ``2.1.12-1``,  ``2.1.12-0``,  ``2.1.11-2``,  ``2.1.11-1``,  ``2.1.11-0``,  ``2.1.10-3``,  ``2.1.10-2``,  ``2.1.10-1``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.15-1``,  ``2.0.15-0``,  ``2.0.14-1``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.10-0``,  ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``0.9.36-0``,  ``0.9.35-0``,  ``0.9.34-0``,  ``0.9.32-0``,  ``0.9.30-0``,  ``0.9.29-0``,  ``0.9.28-0``,  ``0.9.26-0``,  ``0.9.25-0``,  ``0.9.24-1``,  ``0.9.24-0``,  ``0.9.22-0``,  ``0.9.21-1``,  ``0.9.19-5``,  ``0.9.19-4``,  ``0.9.19-3``,  ``0.9.19-2``,  ``0.9.19-1``,  ``0.9.14-5``,  ``0.9.14-4``,  ``0.9.14-3``,  ``0.9.14-2``,  ``0.9.14-1``,  ``0.9.14-0``,  ``0.9.10-5``,  ``0.9.10-4``,  ``0.9.10-3``,  ``0.9.10-2``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.8.36-9``,  ``0.8.36-8``,  ``0.8.36-7``,  ``0.8.36-6``,  ``0.8.36-5``,  ``0.8.36-4``,  ``0.8.36-3``,  ``0.8.36-2``,  ``0.8.36-1``,  ``0.8.36-0``,  ``0.8.31-5``,  ``0.8.31-4``,  ``0.8.31-3``,  ``0.8.31-2``,  ``0.8.31-1``,  ``0.8.31-0``,  ``0.8.30-5``,  ``0.8.30-4``,  ``0.8.30-3``,  ``0.8.30-2``,  ``0.8.30-1``,  ``0.8.30-0``,  ``0.8.29-6``,  ``0.8.29-5``,  ``0.8.29-4``,  ``0.8.29-3``,  ``0.8.29-2``,  ``0.8.29-1``,  ``0.8.29-0``,  ``0.8.28-5``,  ``0.8.28-4``,  ``0.8.28-3``,  ``0.8.28-2``,  ``0.8.28-1``,  ``0.8.28-0``,  ``0.8.27-6``,  ``0.8.27-5``,  ``0.8.27-4``,  ``0.8.27-3``,  ``0.8.27-2``,  ``0.8.27-1``,  ``0.8.27-0``,  ``0.8.26-5``,  ``0.8.26-4``,  ``0.8.26-3``,  ``0.8.26-2``,  ``0.8.26-1``,  ``0.8.26-0``,  ``0.8.24-4``,  ``0.8.24-3``,  ``0.8.24-2``,  ``0.8.24-1``,  ``0.8.24-0``,  ``0.8.22-7``,  ``0.8.22-6``,  ``0.8.22-5``,  ``0.8.22-4``,  ``0.8.22-3``,  ``0.8.22-2``,  ``0.8.22-1``,  ``0.8.9-1``,  ``0.7.12-0``,  ``0.7.10-1``,  ``0.7.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libsqlite: ``>=3.52.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install diamond

to add into an existing workspace instead, run::

    pixi add diamond

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diamond

Alternatively, to install into a new environment, run::

    conda create -n envname diamond

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diamond:<tag>

(see `diamond/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diamond| image:: https://img.shields.io/conda/dn/bioconda/diamond.svg?style=flat
   :target: https://anaconda.org/bioconda/diamond
   :alt:   (downloads)
.. |docker_diamond| image:: https://quay.io/repository/biocontainers/diamond/status
   :target: https://quay.io/repository/biocontainers/diamond
.. _`diamond/tags`: https://quay.io/repository/biocontainers/diamond?tab=tags


.. raw:: html

    <script>
        var package = "diamond";
        var versions = ["2.1.24","2.1.23","2.1.22","2.1.21","2.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diamond/README.html