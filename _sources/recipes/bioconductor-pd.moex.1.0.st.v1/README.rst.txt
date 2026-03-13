:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.moex.1.0.st.v1'
.. highlight: bash

bioconductor-pd.moex.1.0.st.v1
==============================

.. conda:recipe:: bioconductor-pd.moex.1.0.st.v1
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix MoEx\-1\_0\-st\-v1

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/pd.moex.1.0.st.v1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.moex.1.0.st.v1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.moex.1.0.st.v1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.moex.1.0.st.v1/meta.yaml>`_

   Platform Design Info for Affymetrix MoEx\-1\_0\-st\-v1


.. conda:package:: bioconductor-pd.moex.1.0.st.v1

   |downloads_bioconductor-pd.moex.1.0.st.v1| |docker_bioconductor-pd.moex.1.0.st.v1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.1-15</code>,  <code>3.14.1-14</code>,  <code>3.14.1-13</code>,  <code>3.14.1-12</code>,  <code>3.14.1-11</code>,  <code>3.14.1-10</code>,  <code>3.14.1-9</code>,  <code>3.14.1-8</code>,  <code>3.14.1-7</code>,  </span></summary>
      

      ``3.14.1-15``,  ``3.14.1-14``,  ``3.14.1-13``,  ``3.14.1-12``,  ``3.14.1-11``,  ``3.14.1-10``,  ``3.14.1-9``,  ``3.14.1-8``,  ``3.14.1-7``,  ``3.14.1-6``,  ``3.14.1-5``,  ``3.14.1-4``,  ``3.14.1-3``,  ``3.14.1-1``,  ``3.14.1-0``

      
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

    pixi global install bioconductor-pd.moex.1.0.st.v1

to add into an existing workspace instead, run::

    pixi add bioconductor-pd.moex.1.0.st.v1

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pd.moex.1.0.st.v1

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pd.moex.1.0.st.v1

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pd.moex.1.0.st.v1:<tag>

(see `bioconductor-pd.moex.1.0.st.v1/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pd.moex.1.0.st.v1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.moex.1.0.st.v1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.moex.1.0.st.v1
   :alt:   (downloads)
.. |docker_bioconductor-pd.moex.1.0.st.v1| image:: https://quay.io/repository/biocontainers/bioconductor-pd.moex.1.0.st.v1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.moex.1.0.st.v1
.. _`bioconductor-pd.moex.1.0.st.v1/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.moex.1.0.st.v1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.moex.1.0.st.v1";
        var versions = ["3.14.1","3.14.1","3.14.1","3.14.1","3.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.moex.1.0.st.v1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.moex.1.0.st.v1/README.html