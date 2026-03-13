:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copyneutralima'
.. highlight: bash

bioconductor-copyneutralima
===========================

.. conda:recipe:: bioconductor-copyneutralima
   :replaces_section_title:
   :noindex:

   Copy Neutral Illumina Methylation Arrays

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CopyNeutralIMA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copyneutralima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima/meta.yaml>`_

   Provides a set of genomic copy neutral samples hybridized using Illumina Methylation arrays \(450k and EPIC\).


.. conda:package:: bioconductor-copyneutralima

   |downloads_bioconductor-copyneutralima| |docker_bioconductor-copyneutralima|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rdpack: ``>=0.8``

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

    pixi global install bioconductor-copyneutralima

to add into an existing workspace instead, run::

    pixi add bioconductor-copyneutralima

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-copyneutralima

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-copyneutralima

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-copyneutralima:<tag>

(see `bioconductor-copyneutralima/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-copyneutralima| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copyneutralima.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copyneutralima
   :alt:   (downloads)
.. |docker_bioconductor-copyneutralima| image:: https://quay.io/repository/biocontainers/bioconductor-copyneutralima/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copyneutralima
.. _`bioconductor-copyneutralima/tags`: https://quay.io/repository/biocontainers/bioconductor-copyneutralima?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copyneutralima";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html