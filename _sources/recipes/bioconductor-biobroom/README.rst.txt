:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobroom'
.. highlight: bash

bioconductor-biobroom
=====================

.. conda:recipe:: bioconductor-biobroom
   :replaces_section_title:
   :noindex:

   Turn Bioconductor objects into tidy data frames

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biobroom.html
   :license: LGPL
   :recipe: /`bioconductor-biobroom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom/meta.yaml>`_

   This package contains methods for converting standard objects constructed by bioinformatics packages\, especially those in Bioconductor\, and converting them to tidy data. It thus serves as a complement to the broom package\, and follows the same the tidy\, augment\, glance division of tidying methods. Tidying data makes it easy to recombine\, reshape and visualize bioinformatics analyses.


.. conda:package:: bioconductor-biobroom

   |downloads_bioconductor-biobroom| |docker_bioconductor-biobroom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: 
   :depends on r-dplyr: 
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

    pixi global install bioconductor-biobroom

to add into an existing workspace instead, run::

    pixi add bioconductor-biobroom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biobroom

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biobroom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biobroom:<tag>

(see `bioconductor-biobroom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biobroom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobroom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobroom
   :alt:   (downloads)
.. |docker_bioconductor-biobroom| image:: https://quay.io/repository/biocontainers/bioconductor-biobroom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobroom
.. _`bioconductor-biobroom/tags`: https://quay.io/repository/biocontainers/bioconductor-biobroom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biobroom";
        var versions = ["1.42.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobroom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobroom/README.html