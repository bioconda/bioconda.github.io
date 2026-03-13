:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensemblvep'
.. highlight: bash

bioconductor-ensemblvep
=======================

.. conda:recipe:: bioconductor-ensemblvep
   :replaces_section_title:
   :noindex:

   R Interface to Ensembl Variant Effect Predictor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ensemblVEP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensemblvep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep/meta.yaml>`_
   :links: biotools: :biotools:`ensemblvep`, doi: :doi:`10.1186/s13059-016-0974-4`

   Query the Ensembl Variant Effect Predictor via the perl API.


.. conda:package:: bioconductor-ensemblvep

   |downloads_bioconductor-ensemblvep| |docker_bioconductor-ensemblvep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.1-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-ensemblvep

to add into an existing workspace instead, run::

    pixi add bioconductor-ensemblvep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ensemblvep

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ensemblvep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ensemblvep:<tag>

(see `bioconductor-ensemblvep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ensemblvep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensemblvep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensemblvep
   :alt:   (downloads)
.. |docker_bioconductor-ensemblvep| image:: https://quay.io/repository/biocontainers/bioconductor-ensemblvep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensemblvep
.. _`bioconductor-ensemblvep/tags`: https://quay.io/repository/biocontainers/bioconductor-ensemblvep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensemblvep";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html