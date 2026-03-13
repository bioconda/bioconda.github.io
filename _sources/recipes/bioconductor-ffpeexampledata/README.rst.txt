:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ffpeexampledata'
.. highlight: bash

bioconductor-ffpeexampledata
============================

.. conda:recipe:: bioconductor-ffpeexampledata
   :replaces_section_title:
   :noindex:

   Illumina DASL example microarray data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ffpeExampleData.html
   :license: GPL (>2)
   :recipe: /`bioconductor-ffpeexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata/meta.yaml>`_

   A subset of GSE17565 \(April et al. 2009\) containing 32 FFPE samples of Burkitts Lymphoma and Breast Adenocarcinoma\, with a dilution series in technical duplicate.


.. conda:package:: bioconductor-ffpeexampledata

   |downloads_bioconductor-ffpeexampledata| |docker_bioconductor-ffpeexampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-lumi: ``>=2.62.0,<2.63.0``
   :depends on curl: 
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

    pixi global install bioconductor-ffpeexampledata

to add into an existing workspace instead, run::

    pixi add bioconductor-ffpeexampledata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ffpeexampledata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ffpeexampledata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ffpeexampledata:<tag>

(see `bioconductor-ffpeexampledata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ffpeexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpeexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ffpeexampledata
   :alt:   (downloads)
.. |docker_bioconductor-ffpeexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata
.. _`bioconductor-ffpeexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ffpeexampledata";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html