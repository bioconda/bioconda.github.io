:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gubbins'
.. highlight: bash

gubbins
=======

.. conda:recipe:: gubbins
   :replaces_section_title:
   :noindex:

   Rapid phylogenetic analysis of large samples of recombinant bacterial whole genome sequences using Gubbins.

   :homepage: https://github.com/nickjcroucher/gubbins
   :documentation: https://nickjcroucher.github.io/gubbins
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`gubbins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gku1196`, biotools: :biotools:`gubbins`, usegalaxy-eu: :usegalaxy-eu:`gubbins`

   


.. conda:package:: gubbins

   |downloads_gubbins| |docker_gubbins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.3-1</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4-3</code>,  <code>3.4-2</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3.5-0</code>,  </span></summary>
      

      ``3.4.3-1``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4-3``,  ``3.4-2``,  ``3.4-1``,  ``3.4-0``,  ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.6-1``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.5-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ggtree: 
   :depends on bioconductor-treeio: 
   :depends on biopython: 
   :depends on dendropy: ``>=5.0.8,<6.0a0``
   :depends on fasttree: ``>=2.1.10``
   :depends on iqtree: ``>=2.2,<3``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on multiprocess: 
   :depends on numba: 
   :depends on numpy: ``<=1.23.0``
   :depends on numpy: ``>=1.23.0,<2.0a0``
   :depends on perl: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-aplot: 
   :depends on r-argparser: 
   :depends on r-cowplot: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-rcolorbrewer: 
   :depends on r-tidyverse: 
   :depends on rapidnj: 
   :depends on raxml: ``>=8.2.12``
   :depends on raxml-ng: ``>=1.0.1``
   :depends on scipy: 
   :depends on setuptools: ``<82``
   :depends on ska2: ``>=0.3.0``
   :depends on veryfasttree: 

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

    pixi global install gubbins

to add into an existing workspace instead, run::

    pixi add gubbins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gubbins

Alternatively, to install into a new environment, run::

    conda create -n envname gubbins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gubbins:<tag>

(see `gubbins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gubbins| image:: https://img.shields.io/conda/dn/bioconda/gubbins.svg?style=flat
   :target: https://anaconda.org/bioconda/gubbins
   :alt:   (downloads)
.. |docker_gubbins| image:: https://quay.io/repository/biocontainers/gubbins/status
   :target: https://quay.io/repository/biocontainers/gubbins
.. _`gubbins/tags`: https://quay.io/repository/biocontainers/gubbins?tab=tags


.. raw:: html

    <script>
        var package = "gubbins";
        var versions = ["3.4.3","3.4.3","3.4.2","3.4.1","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gubbins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gubbins/README.html