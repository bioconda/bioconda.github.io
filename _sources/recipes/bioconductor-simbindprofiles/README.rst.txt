:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbindprofiles'
.. highlight: bash

bioconductor-simbindprofiles
============================

.. conda:recipe:: bioconductor-simbindprofiles
   :replaces_section_title:
   :noindex:

   Similar Binding Profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SimBindProfiles.html
   :license: GPL-3
   :recipe: /`bioconductor-simbindprofiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles/meta.yaml>`_
   :links: biotools: :biotools:`simbindprofiles`, doi: :doi:`10.1038/nmeth.3252`

   SimBindProfiles identifies common and unique binding regions in genome tiling array data. This package does not rely on peak calling\, but directly compares binding profiles processed on the same array platform. It implements a simple threshold approach\, thus allowing retrieval of commonly and differentially bound regions between datasets as well as events of compensation and increased binding.


.. conda:package:: bioconductor-simbindprofiles

   |downloads_bioconductor-simbindprofiles| |docker_bioconductor-simbindprofiles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-ringo: ``>=1.66.0,<1.67.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-mclust: 

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

    pixi global install bioconductor-simbindprofiles

to add into an existing workspace instead, run::

    pixi add bioconductor-simbindprofiles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-simbindprofiles

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-simbindprofiles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-simbindprofiles:<tag>

(see `bioconductor-simbindprofiles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-simbindprofiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbindprofiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbindprofiles
   :alt:   (downloads)
.. |docker_bioconductor-simbindprofiles| image:: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles
.. _`bioconductor-simbindprofiles/tags`: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simbindprofiles";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html