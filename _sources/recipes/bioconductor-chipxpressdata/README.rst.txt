:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipxpressdata'
.. highlight: bash

bioconductor-chipxpressdata
===========================

.. conda:recipe:: bioconductor-chipxpressdata
   :replaces_section_title:
   :noindex:

   ChIPXpress Pre\-built Databases

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ChIPXpressData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-chipxpressdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpressdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpressdata/meta.yaml>`_

   Contains pre\-built mouse \(GPL1261\) and human \(GPL570\) database of gene expression profiles to be used for ChIPXpress ranking.


.. conda:package:: bioconductor-chipxpressdata

   |downloads_bioconductor-chipxpressdata| |docker_bioconductor-chipxpressdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20221106``
   :depends on curl: 
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-bigmemory: 

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

    pixi global install bioconductor-chipxpressdata

to add into an existing workspace instead, run::

    pixi add bioconductor-chipxpressdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chipxpressdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chipxpressdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chipxpressdata:<tag>

(see `bioconductor-chipxpressdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chipxpressdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipxpressdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipxpressdata
   :alt:   (downloads)
.. |docker_bioconductor-chipxpressdata| image:: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata
.. _`bioconductor-chipxpressdata/tags`: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipxpressdata";
        var versions = ["1.36.0","1.35.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipxpressdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipxpressdata/README.html