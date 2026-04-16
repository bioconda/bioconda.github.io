:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bali-phy'
.. highlight: bash

bali-phy
========

.. conda:recipe:: bali-phy
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Bayesian estimation of phylogenies and multiple sequence alignments.

   :homepage: http://www.bali-phy.org
   :developer docs: https://github.com/bredelings/BAli-Phy/
   :license: GPL2
   :recipe: /`bali-phy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab129`, biotools: :biotools:`bali-phy`

   


.. conda:package:: bali-phy

   |downloads_bali-phy| |docker_bali-phy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1-0</code>,  <code>4.0-0</code>,  <code>4.0beta17-0</code>,  <code>4.0beta16-1</code>,  <code>4.0beta16-0</code>,  <code>4.0beta15-1</code>,  <code>4.0beta15-0</code>,  <code>4.0beta14-0</code>,  <code>4.0beta13-0</code>,  </span></summary>
      

      ``4.1-0``,  ``4.0-0``,  ``4.0beta17-0``,  ``4.0beta16-1``,  ``4.0beta16-0``,  ``4.0beta15-1``,  ``4.0beta15-0``,  ``4.0beta14-0``,  ``4.0beta13-0``,  ``3.6.0-2``,  ``3.6.0-1``,  ``3.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: ``>=1.83.0``
   :depends on cairo: ``>=1.18.4,<2.0a0``
   :depends on eigen: ``>=3.3.7``
   :depends on fmt: ``>=10,<12``
   :depends on fmt: ``>=11.2.0,<11.3.0a0``
   :depends on glib: 
   :depends on gnuplot: 
   :depends on libgcc: ``>=13``
   :depends on libglib: ``>=2.86.1,<3.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on pandoc: 
   :depends on perl: 
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on r-base: 

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

    pixi global install bali-phy

to add into an existing workspace instead, run::

    pixi add bali-phy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bali-phy

Alternatively, to install into a new environment, run::

    conda create -n envname bali-phy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bali-phy:<tag>

(see `bali-phy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bali-phy| image:: https://img.shields.io/conda/dn/bioconda/bali-phy.svg?style=flat
   :target: https://anaconda.org/bioconda/bali-phy
   :alt:   (downloads)
.. |docker_bali-phy| image:: https://quay.io/repository/biocontainers/bali-phy/status
   :target: https://quay.io/repository/biocontainers/bali-phy
.. _`bali-phy/tags`: https://quay.io/repository/biocontainers/bali-phy?tab=tags


.. raw:: html

    <script>
        var package = "bali-phy";
        var versions = ["4.1","4.0","4.0beta17","4.0beta16","4.0beta16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bali-phy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bali-phy/README.html