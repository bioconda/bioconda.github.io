:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nparc'
.. highlight: bash

bioconductor-nparc
==================

.. conda:recipe:: bioconductor-nparc
   :replaces_section_title:
   :noindex:

   Non\-parametric analysis of response curves for thermal proteome profiling experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NPARC.html
   :license: GPL-3
   :recipe: /`bioconductor-nparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nparc/meta.yaml>`_

   Perform non\-parametric analysis of response curves as described by Childs\, Bach\, Franken et al. \(2019\)\: Non\-parametric analysis of thermal proteome profiles reveals novel drug\-binding proteins.


.. conda:package:: bioconductor-nparc

   |downloads_bioconductor-nparc| |docker_bioconductor-nparc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: 
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-rlang: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-nparc

to add into an existing workspace instead, run::

    pixi add bioconductor-nparc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nparc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nparc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nparc:<tag>

(see `bioconductor-nparc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nparc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nparc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nparc
   :alt:   (downloads)
.. |docker_bioconductor-nparc| image:: https://quay.io/repository/biocontainers/bioconductor-nparc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nparc
.. _`bioconductor-nparc/tags`: https://quay.io/repository/biocontainers/bioconductor-nparc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nparc";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nparc/README.html