:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotip'
.. highlight: bash

bioconductor-biotip
===================

.. conda:recipe:: bioconductor-biotip
   :replaces_section_title:
   :noindex:

   BioTIP\: An R package for characterization of Biological Tipping\-Point

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioTIP.html
   :license: GPL-2
   :recipe: /`bioconductor-biotip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip/meta.yaml>`_

   Adopting tipping\-point theory to transcriptome profiles to unravel disease regulatory trajectory.


.. conda:package:: bioconductor-biotip

   |downloads_bioconductor-biotip| |docker_bioconductor-biotip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-psych: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-biotip

to add into an existing workspace instead, run::

    pixi add bioconductor-biotip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biotip

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biotip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biotip:<tag>

(see `bioconductor-biotip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biotip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotip
   :alt:   (downloads)
.. |docker_bioconductor-biotip| image:: https://quay.io/repository/biocontainers/bioconductor-biotip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotip
.. _`bioconductor-biotip/tags`: https://quay.io/repository/biocontainers/bioconductor-biotip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biotip";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotip/README.html