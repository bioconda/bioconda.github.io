:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-massir'
.. highlight: bash

bioconductor-massir
===================

.. conda:recipe:: bioconductor-massir
   :replaces_section_title:
   :noindex:

   massiR\: MicroArray Sample Sex Identifier

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/massiR.html
   :license: GPL-3
   :recipe: /`bioconductor-massir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir/meta.yaml>`_
   :links: biotools: :biotools:`massir`

   Predicts the sex of samples in gene expression microarray datasets


.. conda:package:: bioconductor-massir

   |downloads_bioconductor-massir| |docker_bioconductor-massir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-diptest: 
   :depends on r-gplots: 

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

    pixi global install bioconductor-massir

to add into an existing workspace instead, run::

    pixi add bioconductor-massir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-massir

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-massir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-massir:<tag>

(see `bioconductor-massir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-massir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-massir
   :alt:   (downloads)
.. |docker_bioconductor-massir| image:: https://quay.io/repository/biocontainers/bioconductor-massir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massir
.. _`bioconductor-massir/tags`: https://quay.io/repository/biocontainers/bioconductor-massir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-massir";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massir/README.html