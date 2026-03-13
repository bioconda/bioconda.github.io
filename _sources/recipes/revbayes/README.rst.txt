:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revbayes'
.. highlight: bash

revbayes
========

.. conda:recipe:: revbayes
   :replaces_section_title:
   :noindex:

   Bayesian Phylogenetic Inference Using Graphical Models and an Interactive Model\-Specification Language.

   :homepage: https://revbayes.github.io
   :documentation: https://revbayes.github.io/tutorials
   
   :developer docs: https://github.com/revbayes/revbayes
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`revbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes/meta.yaml>`_
   :links: biotools: :biotools:`revbayes`, doi: :doi:`10.1093/sysbio/syw021`, doi: :doi:`10.1093/sysbio/syu039`

   


.. conda:package:: revbayes

   |downloads_revbayes| |docker_revbayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.0.13-7</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.0.13-7``,  ``1.0.13-6``,  ``1.0.13-5``,  ``1.0.13-4``,  ``1.0.13-3``,  ``1.0.13-2``,  ``1.0.13-1``,  ``1.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: ``>=1.71``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install revbayes

to add into an existing workspace instead, run::

    pixi add revbayes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install revbayes

Alternatively, to install into a new environment, run::

    conda create -n envname revbayes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/revbayes:<tag>

(see `revbayes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_revbayes| image:: https://img.shields.io/conda/dn/bioconda/revbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/revbayes
   :alt:   (downloads)
.. |docker_revbayes| image:: https://quay.io/repository/biocontainers/revbayes/status
   :target: https://quay.io/repository/biocontainers/revbayes
.. _`revbayes/tags`: https://quay.io/repository/biocontainers/revbayes?tab=tags


.. raw:: html

    <script>
        var package = "revbayes";
        var versions = ["1.3.2","1.3.1","1.3.0","1.3.0","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revbayes/README.html