:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats-long'
.. highlight: bash

rmats-long
==========

.. conda:recipe:: rmats-long
   :replaces_section_title:
   :noindex:

   Differential isoform analysis using long\-read RNA\-seq data.

   :homepage: https://github.com/Xinglab/rMATS-long
   :license: BSD / BSD-2-Clause
   :recipe: /`rmats-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long/meta.yaml>`_

   


.. conda:package:: rmats-long

   |downloads_rmats-long| |docker_rmats-long|

   :versions:
      
      

      ``2.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-drimseq: 
   :depends on matplotlib-base: ``>=3.7``
   :depends on networkx: ``>=2.8``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=2``
   :depends on pydot: ``>=3``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on r-base: 
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggvenndiagram: 
   :depends on r-mclogit: 
   :depends on r-stringi: ``>=1.7.8``
   :depends on r-this.path: 
   :depends on rpy2: ``>=3.5``
   :depends on samtools: 
   :depends on threadpoolctl: ``>=3.6``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install rmats-long

to add into an existing workspace instead, run::

    pixi add rmats-long

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmats-long

Alternatively, to install into a new environment, run::

    conda create -n envname rmats-long

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmats-long:<tag>

(see `rmats-long/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmats-long| image:: https://img.shields.io/conda/dn/bioconda/rmats-long.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats-long
   :alt:   (downloads)
.. |docker_rmats-long| image:: https://quay.io/repository/biocontainers/rmats-long/status
   :target: https://quay.io/repository/biocontainers/rmats-long
.. _`rmats-long/tags`: https://quay.io/repository/biocontainers/rmats-long?tab=tags


.. raw:: html

    <script>
        var package = "rmats-long";
        var versions = ["2.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats-long/README.html