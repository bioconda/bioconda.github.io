:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrbayes_volpiano'
.. highlight: bash

mrbayes_volpiano
================

.. conda:recipe:: mrbayes_volpiano
   :replaces_section_title:
   :noindex:

   Bayesian Inference of Phylogeny \(Volpiano edition\)

   :homepage: https://github.com/gaballench/mrbayes_volpiano
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mrbayes_volpiano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes_volpiano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes_volpiano/meta.yaml>`_
   :links: biotools: :biotools:`mrbayes_volpiano`

   This is a fork of MrBayes v3.2.7a\, a programme for estimation of phylogenetic trees using
   Bayesian inference. This fork differs from the original in that the standard character
   coding is no longer intended for morphology in biological datasets but rather for the encoding
   of plainchant melodies in the volpiano format. The original README is provided below as well
   as the license and modified source code. A note has been added to the greeting text to make it
   clear that this is a fork only intended to be used for analysing plainchant melodies in volpiano
   format rather than the original biological sequence data.



.. conda:package:: mrbayes_volpiano

   |downloads_mrbayes_volpiano| |docker_mrbayes_volpiano|

   :versions:
      
      

      ``3.2.7a-0``

      

   
   :depends on beagle-lib: ``<4``
   :depends on beagle-lib: ``>=3.1.2,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on readline: ``>=8.2,<9.0a0``

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

    pixi global install mrbayes_volpiano

to add into an existing workspace instead, run::

    pixi add mrbayes_volpiano

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mrbayes_volpiano

Alternatively, to install into a new environment, run::

    conda create -n envname mrbayes_volpiano

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mrbayes_volpiano:<tag>

(see `mrbayes_volpiano/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mrbayes_volpiano| image:: https://img.shields.io/conda/dn/bioconda/mrbayes_volpiano.svg?style=flat
   :target: https://anaconda.org/bioconda/mrbayes_volpiano
   :alt:   (downloads)
.. |docker_mrbayes_volpiano| image:: https://quay.io/repository/biocontainers/mrbayes_volpiano/status
   :target: https://quay.io/repository/biocontainers/mrbayes_volpiano
.. _`mrbayes_volpiano/tags`: https://quay.io/repository/biocontainers/mrbayes_volpiano?tab=tags


.. raw:: html

    <script>
        var package = "mrbayes_volpiano";
        var versions = ["3.2.7a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes_volpiano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes_volpiano/README.html