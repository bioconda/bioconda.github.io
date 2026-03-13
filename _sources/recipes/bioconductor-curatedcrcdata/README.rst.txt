:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedcrcdata'
.. highlight: bash

bioconductor-curatedcrcdata
===========================

.. conda:recipe:: bioconductor-curatedcrcdata
   :replaces_section_title:
   :noindex:

   Colorectal Cancer Gene Expression Analysis

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/curatedCRCData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedcrcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedcrcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedcrcdata/meta.yaml>`_

   The curatedCRC package provides relevant functions and data for gene expression analysis in patients with colorectal cancer.


.. conda:package:: bioconductor-curatedcrcdata

   |downloads_bioconductor-curatedcrcdata| |docker_bioconductor-curatedcrcdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.29.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.21.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.32.0-0``,  ``2.29.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.21.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-nlme: 

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

    pixi global install bioconductor-curatedcrcdata

to add into an existing workspace instead, run::

    pixi add bioconductor-curatedcrcdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-curatedcrcdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-curatedcrcdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-curatedcrcdata:<tag>

(see `bioconductor-curatedcrcdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-curatedcrcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedcrcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedcrcdata
   :alt:   (downloads)
.. |docker_bioconductor-curatedcrcdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedcrcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedcrcdata
.. _`bioconductor-curatedcrcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedcrcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedcrcdata";
        var versions = ["2.34.0","2.32.0","2.29.0","2.26.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedcrcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedcrcdata/README.html