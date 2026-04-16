:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rscape'
.. highlight: bash

rscape
======

.. conda:recipe:: rscape
   :replaces_section_title:
   :noindex:

   R\-scape \(RNA Structural Covariation Above Phylogenetic Expectation\) looks for evidence of a conserved RNA secondary structure by measuring pairwise covariations observed in an input multiple sequence alignment.

   :homepage: http://eddylab.org/R-scape/
   :license: GPLv3
   :recipe: /`rscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape/meta.yaml>`_

   


.. conda:package:: rscape

   |downloads_rscape| |docker_rscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4.a-1</code>,  <code>2.0.4.a-0</code>,  <code>1.4.0-5</code>,  <code>1.4.0-4</code>,  <code>1.4.0-3</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.2-2</code>,  </span></summary>
      

      ``2.0.4.a-1``,  ``2.0.4.a-0``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``0.8.3-8``,  ``0.8.3-7``,  ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.3.1-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gnuplot: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 

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

    pixi global install rscape

to add into an existing workspace instead, run::

    pixi add rscape

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rscape

Alternatively, to install into a new environment, run::

    conda create -n envname rscape

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rscape:<tag>

(see `rscape/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rscape| image:: https://img.shields.io/conda/dn/bioconda/rscape.svg?style=flat
   :target: https://anaconda.org/bioconda/rscape
   :alt:   (downloads)
.. |docker_rscape| image:: https://quay.io/repository/biocontainers/rscape/status
   :target: https://quay.io/repository/biocontainers/rscape
.. _`rscape/tags`: https://quay.io/repository/biocontainers/rscape?tab=tags


.. raw:: html

    <script>
        var package = "rscape";
        var versions = ["2.0.4.a","2.0.4.a","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rscape/README.html