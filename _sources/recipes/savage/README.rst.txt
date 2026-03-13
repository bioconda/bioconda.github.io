:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savage'
.. highlight: bash

savage
======

.. conda:recipe:: savage
   :replaces_section_title:
   :noindex:

   SAVAGE \(Strain Aware VirAl GEnome assembly\) reconstructs individual \(viral\) haplotypes from a mixed sample.

   :homepage: https://github.com/HaploConduct/HaploConduct/tree/master/savage
   :license: GPL v3
   :recipe: /`savage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage/meta.yaml>`_

   


.. conda:package:: savage

   |downloads_savage| |docker_savage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-1</code>,  </span></summary>
      

      ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on bwa: 
   :depends on kallisto: ``>=0.43.0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on rust-overlaps: 

   :additional platforms:
      

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

    pixi global install savage

to add into an existing workspace instead, run::

    pixi add savage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install savage

Alternatively, to install into a new environment, run::

    conda create -n envname savage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/savage:<tag>

(see `savage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_savage| image:: https://img.shields.io/conda/dn/bioconda/savage.svg?style=flat
   :target: https://anaconda.org/bioconda/savage
   :alt:   (downloads)
.. |docker_savage| image:: https://quay.io/repository/biocontainers/savage/status
   :target: https://quay.io/repository/biocontainers/savage
.. _`savage/tags`: https://quay.io/repository/biocontainers/savage?tab=tags


.. raw:: html

    <script>
        var package = "savage";
        var versions = ["0.4.2","0.4.2","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savage/README.html