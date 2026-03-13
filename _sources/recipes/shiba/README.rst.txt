:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiba'
.. highlight: bash

shiba
=====

.. conda:recipe:: shiba
   :replaces_section_title:
   :noindex:

   A versatile method for systematic identification of differential RNA splicing across platforms

   :homepage: https://github.com/Sika-Zheng-Lab/Shiba
   :documentation: https://sika-zheng-lab.github.io/Shiba
   
   :license: MIT / MIT
   :recipe: /`shiba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba/meta.yaml>`_

   A versatile computational method for systematic identification of differential RNA splicing.
   Shiba\/scShiba can quantify and identify differential splicing events from bulk RNA\-seq data and single\-cell RNA\-seq data.
   Shiba and scShiba are also implemented as Snakemake workflows\, SnakeShiba and SnakeScShiba\, respectively.



.. conda:package:: shiba

   |downloads_shiba| |docker_shiba|

   :versions:
      
      

      ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.34.0,<2.0.0``
   :depends on numexpr: ``>=2.8.4,<3.0.0``
   :depends on numpy: ``>=1.26.4,<2.0.0``
   :depends on pandas: ``>=1.5.3,<3.0.0``
   :depends on plotly: ``>=5.13.0,<6.0.0``
   :depends on pysam: ``>=0.23.0,<1.0.0``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on pyyaml: ``>=6.0.2,<7.0.0``
   :depends on r-base: ``>=4.1.3,<5.0.0``
   :depends on r-data.table: ``>=1.14.2,<2.0.0``
   :depends on r-locfit: ``>=1.5_9.4,<2.0.0``
   :depends on regtools: ``>=1.0.0,<2.0.0``
   :depends on scanpy: ``>=1.9.5,<2.0.0``
   :depends on statsmodels: ``>=0.13.5,<1.0.0``
   :depends on stringtie: ``>=3.0.0,<4.0.0``
   :depends on subread: ``>=2.0.8,<3.0.0``

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

    pixi global install shiba

to add into an existing workspace instead, run::

    pixi add shiba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shiba

Alternatively, to install into a new environment, run::

    conda create -n envname shiba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shiba:<tag>

(see `shiba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shiba| image:: https://img.shields.io/conda/dn/bioconda/shiba.svg?style=flat
   :target: https://anaconda.org/bioconda/shiba
   :alt:   (downloads)
.. |docker_shiba| image:: https://quay.io/repository/biocontainers/shiba/status
   :target: https://quay.io/repository/biocontainers/shiba
.. _`shiba/tags`: https://quay.io/repository/biocontainers/shiba?tab=tags


.. raw:: html

    <script>
        var package = "shiba";
        var versions = ["0.8.2","0.8.1","0.8.1","0.8.0","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiba/README.html