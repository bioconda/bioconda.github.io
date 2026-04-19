:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coinfinder'
.. highlight: bash

coinfinder
==========

.. conda:recipe:: coinfinder
   :replaces_section_title:
   :noindex:

   A tool for the identification of coincident \(associating and dissociating\) genes in pangenomes.

   :homepage: https://github.com/fwhelan/coinfinder
   :license: GPL / GPL-3.0-only
   :recipe: /`coinfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder/meta.yaml>`_
   :links: doi: :doi:`10.1101/859371`

   


.. conda:package:: coinfinder

   |downloads_coinfinder| |docker_coinfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bioconductor-ggtree: ``>=2.0.0,<2.1.0``
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-ape: ``>=5.4.1``
   :depends on r-base: ``3.6.*``
   :depends on r-caper: ``>=1.0.1``
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-data.table: ``>=1.14``
   :depends on r-dplyr: ``>=1.0.2``
   :depends on r-flock: ``>=0.7``
   :depends on r-future: ``>=1.21``
   :depends on r-getopt: ``>=1.20.3``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-ggraph: ``>=2.0.5``
   :depends on r-igraph: ``>=1.2.6``
   :depends on r-magrittr: ``>=2.0.1``
   :depends on r-phytools: ``>=0.6_99``
   :depends on r-purrr: ``>=0.3.4``
   :depends on r-rlang: ``>=0.4.1``
   :depends on r-rvcheck: ``>=0.1.8``
   :depends on r-tidyr: ``>=1.1.2``
   :depends on r-tidytree: ``>=0.2.6``

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

    pixi global install coinfinder

to add into an existing workspace instead, run::

    pixi add coinfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coinfinder

Alternatively, to install into a new environment, run::

    conda create -n envname coinfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coinfinder:<tag>

(see `coinfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coinfinder| image:: https://img.shields.io/conda/dn/bioconda/coinfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/coinfinder
   :alt:   (downloads)
.. |docker_coinfinder| image:: https://quay.io/repository/biocontainers/coinfinder/status
   :target: https://quay.io/repository/biocontainers/coinfinder
.. _`coinfinder/tags`: https://quay.io/repository/biocontainers/coinfinder?tab=tags


.. raw:: html

    <script>
        var package = "coinfinder";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coinfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coinfinder/README.html