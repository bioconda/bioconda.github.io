:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncoscore'
.. highlight: bash

bioconductor-oncoscore
======================

.. conda:recipe:: bioconductor-oncoscore
   :replaces_section_title:
   :noindex:

   A tool to identify potentially oncogenic genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OncoScore.html
   :license: file LICENSE
   :recipe: /`bioconductor-oncoscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscore/meta.yaml>`_

   OncoScore is a tool to measure the association of genes to cancer based on citation frequencies in biomedical literature. The score is evaluated from PubMed literature by dynamically updatable web queries.


.. conda:package:: bioconductor-oncoscore

   |downloads_bioconductor-oncoscore| |docker_bioconductor-oncoscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-oncoscore

to add into an existing workspace instead, run::

    pixi add bioconductor-oncoscore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-oncoscore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-oncoscore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-oncoscore:<tag>

(see `bioconductor-oncoscore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-oncoscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncoscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncoscore
   :alt:   (downloads)
.. |docker_bioconductor-oncoscore| image:: https://quay.io/repository/biocontainers/bioconductor-oncoscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncoscore
.. _`bioconductor-oncoscore/tags`: https://quay.io/repository/biocontainers/bioconductor-oncoscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncoscore";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncoscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncoscore/README.html