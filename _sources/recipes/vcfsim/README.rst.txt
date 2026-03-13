:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfsim'
.. highlight: bash

vcfsim
======

.. conda:recipe:: vcfsim
   :replaces_section_title:
   :noindex:

   Script for generating simulated VCF\'s leveraging a coalescent simulating backend.

   :homepage: https://github.com/samuk-lab/vcfsim
   :license: MIT / MIT
   :recipe: /`vcfsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsim/meta.yaml>`_

   \"VCFSim is a new command\-line tool for generating simulated VCF\'s\(variant call format files for encoding genetic data\). Leveraging a coalescent simulating backend and providing an interface from Msprime coalescent simulating package to pandas. VCF\'s can now be easily simulated with just a few command line arguments\!\"



.. conda:package:: vcfsim

   |downloads_vcfsim| |docker_vcfsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.28.alpha-0</code>,  <code>1.0.27.alpha-0</code>,  <code>1.0.25.alpha-0</code>,  <code>1.0.24.alpha-2</code>,  <code>1.0.24.alpha-0</code>,  <code>1.0.23.alpha-0</code>,  <code>1.0.22.alpha-0</code>,  <code>1.0.18.alpha-0</code>,  <code>1.0.16.alpha-0</code>,  </span></summary>
      

      ``1.0.28.alpha-0``,  ``1.0.27.alpha-0``,  ``1.0.25.alpha-0``,  ``1.0.24.alpha-2``,  ``1.0.24.alpha-0``,  ``1.0.23.alpha-0``,  ``1.0.22.alpha-0``,  ``1.0.18.alpha-0``,  ``1.0.16.alpha-0``,  ``1.0.15.alpha-0``,  ``1.0.13.alpha-0``,  ``1.0.12.alpha-0``,  ``1.0.11.alpha-0``,  ``1.0.10.alpha-0``,  ``1.0.9.alpha-0``,  ``1.0.8.alpha-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ipython: 
   :depends on msprime: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``

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

    pixi global install vcfsim

to add into an existing workspace instead, run::

    pixi add vcfsim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcfsim

Alternatively, to install into a new environment, run::

    conda create -n envname vcfsim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcfsim:<tag>

(see `vcfsim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcfsim| image:: https://img.shields.io/conda/dn/bioconda/vcfsim.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfsim
   :alt:   (downloads)
.. |docker_vcfsim| image:: https://quay.io/repository/biocontainers/vcfsim/status
   :target: https://quay.io/repository/biocontainers/vcfsim
.. _`vcfsim/tags`: https://quay.io/repository/biocontainers/vcfsim?tab=tags


.. raw:: html

    <script>
        var package = "vcfsim";
        var versions = ["1.0.28.alpha","1.0.27.alpha","1.0.25.alpha","1.0.24.alpha","1.0.24.alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfsim/README.html