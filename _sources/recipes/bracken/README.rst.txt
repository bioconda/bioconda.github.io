:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bracken'
.. highlight: bash

bracken
=======

.. conda:recipe:: bracken
   :replaces_section_title:
   :noindex:

   Bracken \(Bayesian Reestimation of Abundance with KrakEN\) is a highly accurate statistical method that computes the abundance of species in DNA sequences from a metagenomics sample.

   :homepage: https://github.com/jenniferlu717/Bracken
   :documentation: https://github.com/jenniferlu717/Bracken/blob/v3.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bracken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken/meta.yaml>`_
   :links: biotools: :biotools:`Bracken`, usegalaxy-eu: :usegalaxy-eu:`est_abundance`, doi: :doi:`10.7717/peerj-cs.104`

   


.. conda:package:: bracken

   |downloads_bracken| |docker_bracken|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1-0</code>,  <code>3.0-2</code>,  <code>3.0-1</code>,  <code>3.0-0</code>,  <code>2.9-1</code>,  <code>2.9-0</code>,  <code>2.8-1</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  </span></summary>
      

      ``3.1-0``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.9-1``,  ``2.9-0``,  ``2.8-1``,  ``2.8-0``,  ``2.7-0``,  ``2.6.2-0``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.2-1``,  ``2.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on kraken2: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bracken

to add into an existing workspace instead, run::

    pixi add bracken

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bracken

Alternatively, to install into a new environment, run::

    conda create -n envname bracken

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bracken:<tag>

(see `bracken/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bracken| image:: https://img.shields.io/conda/dn/bioconda/bracken.svg?style=flat
   :target: https://anaconda.org/bioconda/bracken
   :alt:   (downloads)
.. |docker_bracken| image:: https://quay.io/repository/biocontainers/bracken/status
   :target: https://quay.io/repository/biocontainers/bracken
.. _`bracken/tags`: https://quay.io/repository/biocontainers/bracken?tab=tags


.. raw:: html

    <script>
        var package = "bracken";
        var versions = ["3.1","3.0","3.0","3.0","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bracken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bracken/README.html