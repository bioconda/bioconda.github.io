:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panr'
.. highlight: bash

bioconductor-panr
=================

.. conda:recipe:: bioconductor-panr
   :replaces_section_title:
   :noindex:

   Posterior association networks and functional modules inferred from rich phenotypes of gene perturbations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PANR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panr/meta.yaml>`_
   :links: biotools: :biotools:`panr`, doi: :doi:`10.1371/journal.pcbi.1002566`

   This package provides S4 classes and methods for inferring functional gene networks with edges encoding posterior beliefs of gene association types and nodes encoding perturbation effects.


.. conda:package:: bioconductor-panr

   |downloads_bioconductor-panr| |docker_bioconductor-panr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-reder: ``>=3.6.0,<3.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-pvclust: 

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

    pixi global install bioconductor-panr

to add into an existing workspace instead, run::

    pixi add bioconductor-panr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-panr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-panr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-panr:<tag>

(see `bioconductor-panr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-panr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panr
   :alt:   (downloads)
.. |docker_bioconductor-panr| image:: https://quay.io/repository/biocontainers/bioconductor-panr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panr
.. _`bioconductor-panr/tags`: https://quay.io/repository/biocontainers/bioconductor-panr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panr";
        var versions = ["1.56.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panr/README.html