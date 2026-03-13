:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.zebgene.1.0.st'
.. highlight: bash

bioconductor-pd.zebgene.1.0.st
==============================

.. conda:recipe:: bioconductor-pd.zebgene.1.0.st
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix ZebGene\-1\_0\-st

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/pd.zebgene.1.0.st.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.zebgene.1.0.st <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.zebgene.1.0.st>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.zebgene.1.0.st/meta.yaml>`_

   Platform Design Info for Affymetrix ZebGene\-1\_0\-st


.. conda:package:: bioconductor-pd.zebgene.1.0.st

   |downloads_bioconductor-pd.zebgene.1.0.st| |docker_bioconductor-pd.zebgene.1.0.st|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-14</code>,  <code>3.12.0-13</code>,  <code>3.12.0-12</code>,  <code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  </span></summary>
      

      ``3.12.0-14``,  ``3.12.0-13``,  ``3.12.0-12``,  ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: ``>=0.3.1``
   :depends on r-rsqlite: ``>=1.0.0``

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

    pixi global install bioconductor-pd.zebgene.1.0.st

to add into an existing workspace instead, run::

    pixi add bioconductor-pd.zebgene.1.0.st

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pd.zebgene.1.0.st

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pd.zebgene.1.0.st

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pd.zebgene.1.0.st:<tag>

(see `bioconductor-pd.zebgene.1.0.st/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pd.zebgene.1.0.st| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.zebgene.1.0.st.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.zebgene.1.0.st
   :alt:   (downloads)
.. |docker_bioconductor-pd.zebgene.1.0.st| image:: https://quay.io/repository/biocontainers/bioconductor-pd.zebgene.1.0.st/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.zebgene.1.0.st
.. _`bioconductor-pd.zebgene.1.0.st/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.zebgene.1.0.st?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.zebgene.1.0.st";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.zebgene.1.0.st/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.zebgene.1.0.st/README.html