:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrbayes'
.. highlight: bash

mrbayes
=======

.. conda:recipe:: mrbayes
   :replaces_section_title:
   :noindex:

   Bayesian Inference of Phylogeny

   :homepage: https://github.com/NBISweden/MrBayes
   :documentation: https://nbisweden.github.io/MrBayes/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mrbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes/meta.yaml>`_
   :links: biotools: :biotools:`mrbayes`

   MrBayes is a program for Bayesian inference and model choice across a wide
   range of phylogenetic and evolutionary models. MrBayes uses Markov chain
   Monte Carlo \(MCMC\) methods to estimate the posterior distribution of model
   parameters.



.. conda:package:: mrbayes

   |downloads_mrbayes| |docker_mrbayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.7-7</code>,  <code>3.2.7-6</code>,  <code>3.2.7-5</code>,  <code>3.2.7-4</code>,  <code>3.2.7-3</code>,  <code>3.2.7-2</code>,  <code>3.2.7-1</code>,  <code>3.2.7-0</code>,  <code>3.2.7a-0</code>,  </span></summary>
      

      ``3.2.7-7``,  ``3.2.7-6``,  ``3.2.7-5``,  ``3.2.7-4``,  ``3.2.7-3``,  ``3.2.7-2``,  ``3.2.7-1``,  ``3.2.7-0``,  ``3.2.7a-0``,  ``3.2.6-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install mrbayes

to add into an existing workspace instead, run::

    pixi add mrbayes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mrbayes

Alternatively, to install into a new environment, run::

    conda create -n envname mrbayes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mrbayes:<tag>

(see `mrbayes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mrbayes| image:: https://img.shields.io/conda/dn/bioconda/mrbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/mrbayes
   :alt:   (downloads)
.. |docker_mrbayes| image:: https://quay.io/repository/biocontainers/mrbayes/status
   :target: https://quay.io/repository/biocontainers/mrbayes
.. _`mrbayes/tags`: https://quay.io/repository/biocontainers/mrbayes?tab=tags


.. raw:: html

    <script>
        var package = "mrbayes";
        var versions = ["3.2.7","3.2.7","3.2.7","3.2.7","3.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes/README.html