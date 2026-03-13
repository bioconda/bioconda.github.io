:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2data'
.. highlight: bash

bioconductor-mmappr2data
========================

.. conda:recipe:: bioconductor-mmappr2data
   :replaces_section_title:
   :noindex:

   Sample Data for MMAPPR2

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MMAPPR2data.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data/meta.yaml>`_

   Contains data for illustration purposes in the MMAPPR2 package\, namely simulated BAM files containing RNA\-Seq data for a mutation in the slc24a5 gene\, taken from the GRCz11 genome. Also contains reference sequence and annotation files for the region.


.. conda:package:: bioconductor-mmappr2data

   |downloads_bioconductor-mmappr2data| |docker_bioconductor-mmappr2data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on curl: 
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

    pixi global install bioconductor-mmappr2data

to add into an existing workspace instead, run::

    pixi add bioconductor-mmappr2data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mmappr2data

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mmappr2data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mmappr2data:<tag>

(see `bioconductor-mmappr2data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mmappr2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2data
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2data| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2data
.. _`bioconductor-mmappr2data/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmappr2data";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html