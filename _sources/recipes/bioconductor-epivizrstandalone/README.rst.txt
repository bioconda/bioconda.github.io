:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrstandalone'
.. highlight: bash

bioconductor-epivizrstandalone
==============================

.. conda:recipe:: bioconductor-epivizrstandalone
   :replaces_section_title:
   :noindex:

   Run Epiviz Interactive Genomic Data Visualization App within R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epivizrStandalone.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrstandalone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrstandalone/meta.yaml>`_
   :links: biotools: :biotools:`epivizrstandalone`, doi: :doi:`10.1038/nmeth.3252`

   This package imports the epiviz visualization JavaScript app for genomic data interactive visualization. The \'epivizrServer\' package is used to provide a web server running completely within R. This standalone version allows to browse arbitrary genomes through genome annotations provided by Bioconductor packages.


.. conda:package:: bioconductor-epivizrstandalone

   |downloads_bioconductor-epivizrstandalone| |docker_bioconductor-epivizrstandalone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-epivizr: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-epivizrserver: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-git2r: 

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

    pixi global install bioconductor-epivizrstandalone

to add into an existing workspace instead, run::

    pixi add bioconductor-epivizrstandalone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epivizrstandalone

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epivizrstandalone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epivizrstandalone:<tag>

(see `bioconductor-epivizrstandalone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epivizrstandalone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrstandalone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrstandalone
   :alt:   (downloads)
.. |docker_bioconductor-epivizrstandalone| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone
.. _`bioconductor-epivizrstandalone/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrstandalone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epivizrstandalone";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrstandalone/README.html