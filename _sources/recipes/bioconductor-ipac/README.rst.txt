:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipac'
.. highlight: bash

bioconductor-ipac
=================

.. conda:recipe:: bioconductor-ipac
   :replaces_section_title:
   :noindex:

   Identification of Protein Amino acid Clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-ipac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac/meta.yaml>`_
   :links: biotools: :biotools:`ipac`, doi: :doi:`10.1186/1471-2105-14-190`

   iPAC is a novel tool to identify somatic amino acid mutation clustering within proteins while taking into account protein structure.


.. conda:package:: bioconductor-ipac

   |downloads_bioconductor-ipac| |docker_bioconductor-ipac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-gdata: 
   :depends on r-scatterplot3d: 

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

    pixi global install bioconductor-ipac

to add into an existing workspace instead, run::

    pixi add bioconductor-ipac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ipac

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ipac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ipac:<tag>

(see `bioconductor-ipac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ipac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipac
   :alt:   (downloads)
.. |docker_bioconductor-ipac| image:: https://quay.io/repository/biocontainers/bioconductor-ipac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipac
.. _`bioconductor-ipac/tags`: https://quay.io/repository/biocontainers/bioconductor-ipac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipac";
        var versions = ["1.46.0","1.44.0","1.42.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipac/README.html