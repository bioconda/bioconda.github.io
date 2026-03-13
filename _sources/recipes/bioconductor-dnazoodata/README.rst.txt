:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnazoodata'
.. highlight: bash

bioconductor-dnazoodata
=======================

.. conda:recipe:: bioconductor-dnazoodata
   :replaces_section_title:
   :noindex:

   DNA Zoo data package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/DNAZooData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dnazoodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnazoodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnazoodata/meta.yaml>`_

   DNAZooData is a data package giving programmatic access to genome assemblies and Hi\-C contact matrices uniformly processed by the \[DNA Zoo Consortium\]\(https\:\/\/www.dnazoo.org\/\). The matrices are available in the multi\-resolution \`.hic\` format. A URL to corrected genome assemblies in \`.fastq\` format is also provided to the end\-user.


.. conda:package:: bioconductor-dnazoodata

   |downloads_bioconductor-dnazoodata| |docker_bioconductor-dnazoodata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-hicexperiment: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rjson: 

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

    pixi global install bioconductor-dnazoodata

to add into an existing workspace instead, run::

    pixi add bioconductor-dnazoodata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dnazoodata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dnazoodata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dnazoodata:<tag>

(see `bioconductor-dnazoodata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dnazoodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnazoodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnazoodata
   :alt:   (downloads)
.. |docker_bioconductor-dnazoodata| image:: https://quay.io/repository/biocontainers/bioconductor-dnazoodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnazoodata
.. _`bioconductor-dnazoodata/tags`: https://quay.io/repository/biocontainers/bioconductor-dnazoodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnazoodata";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnazoodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnazoodata/README.html