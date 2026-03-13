:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyphy'
.. highlight: bash

hyphy
=====

.. conda:recipe:: hyphy
   :replaces_section_title:
   :noindex:

   An open\-source software package for comparative sequence analysis using stochastic evolutionary models.

   :homepage: https://hyphy.org
   :developer docs: https://github.com/veg/hyphy
   :license: MIT / MIT
   :recipe: /`hyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy/meta.yaml>`_
   :links: biotools: :biotools:`HyPhy`, usegalaxy-eu: :usegalaxy-eu:`hyphy_busted`, usegalaxy-eu: :usegalaxy-eu:`hyphy_bgm`, usegalaxy-eu: :usegalaxy-eu:`hyphy_gard`, usegalaxy-eu: :usegalaxy-eu:`hyphy_absrel`, usegalaxy-eu: :usegalaxy-eu:`hyphy_fubar`, usegalaxy-eu: :usegalaxy-eu:`hyphy_fade`, usegalaxy-eu: :usegalaxy-eu:`hyphy_sm19`, usegalaxy-eu: :usegalaxy-eu:`hyphy_meme`, usegalaxy-eu: :usegalaxy-eu:`hyphy_prime`, usegalaxy-eu: :usegalaxy-eu:`hyphy_slac`, usegalaxy-eu: :usegalaxy-eu:`hyphy_fel`, usegalaxy-eu: :usegalaxy-eu:`hyphy_relax`, usegalaxy-eu: :usegalaxy-eu:`hyphy_cfel`, usegalaxy-eu: :usegalaxy-eu:`hyphy_summary`, usegalaxy-eu: :usegalaxy-eu:`hyphy_conv`, doi: :doi:`10.1093/bioinformatics/bti079`, doi: :doi:`10.1093/molbev/msz197`, doi: :doi:`10.1007/978-1-4939-8736-8_6`

   HyPhy \(Hypothesis Testing using Phylogenies\) is an open\-source software package for the analysis of genetic sequences
   \(in particular the inference of natural selection\) using techniques in phylogenetics\, molecular evolution\, and machine learning.



.. conda:package:: hyphy

   |downloads_hyphy| |docker_hyphy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.96-0</code>,  <code>2.5.94-0</code>,  <code>2.5.93-0</code>,  <code>2.5.92-0</code>,  <code>2.5.86-0</code>,  <code>2.5.85-0</code>,  <code>2.5.84-0</code>,  <code>2.5.83-1</code>,  <code>2.5.83-0</code>,  </span></summary>
      

      ``2.5.96-0``,  ``2.5.94-0``,  ``2.5.93-0``,  ``2.5.92-0``,  ``2.5.86-0``,  ``2.5.85-0``,  ``2.5.84-0``,  ``2.5.83-1``,  ``2.5.83-0``,  ``2.5.82-0``,  ``2.5.81-0``,  ``2.5.80-0``,  ``2.5.79-0``,  ``2.5.78-0``,  ``2.5.77-0``,  ``2.5.76-0``,  ``2.5.75-0``,  ``2.5.74-0``,  ``2.5.73-0``,  ``2.5.71-0``,  ``2.5.70-0``,  ``2.5.69-0``,  ``2.5.65-1``,  ``2.5.65-0``,  ``2.5.64-1``,  ``2.5.64-0``,  ``2.5.63-0``,  ``2.5.62-1``,  ``2.5.62-0``,  ``2.5.61-0``,  ``2.5.60-1``,  ``2.5.60-0``,  ``2.5.59-0``,  ``2.5.58-0``,  ``2.5.57-0``,  ``2.5.50-2``,  ``2.5.50-1``,  ``2.5.50-0``,  ``2.5.49-0``,  ``2.5.48-0``,  ``2.5.47-0``,  ``2.5.46-0``,  ``2.5.42-0``,  ``2.5.41-1``,  ``2.5.41-0``,  ``2.5.40-1``,  ``2.5.40-0``,  ``2.5.39-0``,  ``2.5.38-0``,  ``2.5.36-1``,  ``2.5.36-0``,  ``2.5.33-0``,  ``2.5.32-0``,  ``2.5.31-0``,  ``2.5.30-1``,  ``2.5.30-0``,  ``2.5.29-1``,  ``2.5.29-0``,  ``2.5.28-0``,  ``2.5.26-0``,  ``2.5.25-0``,  ``2.5.24-0``,  ``2.5.23-0``,  ``2.5.22.1-0``,  ``2.5.22-0``,  ``2.5.21-0``,  ``2.5.20-0``,  ``2.5.19-0``,  ``2.5.17-0``,  ``2.5.16-0``,  ``2.5.15-0``,  ``2.5.14-0``,  ``2.5.12-1``,  ``2.5.12-0``,  ``2.5.11-0``,  ``2.5.10-0``,  ``2.5.9-0``,  ``2.5.8-1``,  ``2.5.8-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.3.14-1``,  ``2.3.14-0``,  ``2.3.12-1``,  ``2.3.12-0``,  ``2.3.11-2``,  ``2.3.11-1``,  ``2.3.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

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

    pixi global install hyphy

to add into an existing workspace instead, run::

    pixi add hyphy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hyphy

Alternatively, to install into a new environment, run::

    conda create -n envname hyphy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hyphy:<tag>

(see `hyphy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hyphy| image:: https://img.shields.io/conda/dn/bioconda/hyphy.svg?style=flat
   :target: https://anaconda.org/bioconda/hyphy
   :alt:   (downloads)
.. |docker_hyphy| image:: https://quay.io/repository/biocontainers/hyphy/status
   :target: https://quay.io/repository/biocontainers/hyphy
.. _`hyphy/tags`: https://quay.io/repository/biocontainers/hyphy?tab=tags


.. raw:: html

    <script>
        var package = "hyphy";
        var versions = ["2.5.96","2.5.94","2.5.93","2.5.92","2.5.86"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyphy/README.html