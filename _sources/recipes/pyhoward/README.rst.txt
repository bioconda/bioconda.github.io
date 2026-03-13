:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhoward'
.. highlight: bash

pyhoward
========

.. conda:recipe:: pyhoward
   :replaces_section_title:
   :noindex:

   HOWARD \- Highly Open Workflow for Annotation \& Ranking toward genomic variant Discovery

   :homepage: https://github.com/bioinfo-chru-strasbourg/howard
   :license: AGPL-3.0-only
   :recipe: /`pyhoward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhoward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhoward/meta.yaml>`_

   


.. conda:package:: pyhoward

   |downloads_pyhoward| |docker_pyhoward|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends on beautifulsoup4: ``>=4.12.0,<4.13.dev0``
   :depends on bio: ``>=1.7.0,<1.8.dev0``
   :depends on coloredlogs: ``>=15.0.0,<15.1.dev0``
   :depends on coverage: ``>=7.5.0,<7.6.dev0``
   :depends on cyvcf2: ``>=0.31.0,<0.32.dev0``
   :depends on dask-core: ``>=2023.12.0,<2023.13.dev0``
   :depends on fastparquet: ``>=2024.5.0,<2024.6.dev0``
   :depends on flake8: ``>=7.1.0,<7.2.dev0``
   :depends on genomepy: ``>=0.16.0,<0.17.dev0``
   :depends on htslib: ``1.22.*``
   :depends on jproperties: ``>=2.1.0,<2.2.dev0``
   :depends on lazy: ``>=1.6.0,<1.7.dev0``
   :depends on markdown: ``>=3.6.0,<3.7.dev0``
   :depends on markdown2: ``>=2.5.0,<2.6.dev0``
   :depends on md-toc: ``>=9.0.0,<9.1.dev0``
   :depends on mgzip: ``>=0.2.0,<0.3.dev0``
   :depends on numpy: ``>=1.26.0,<1.27.dev0``
   :depends on pandas: ``>=2.2.0,<2.3.dev0``
   :depends on pgzip: ``>=0.3.0,<0.4.dev0``
   :depends on polars: ``>=0.20.0,<0.21.dev0``
   :depends on psutil: ``>=6.0.0,<6.1.dev0``
   :depends on py-bgzip: ``>=0.4.0,<0.5.dev0``
   :depends on pyarrow: ``>=16.1.0,<16.2.dev0``
   :depends on pybigwig: ``>=0.3.0,<0.4.dev0``
   :depends on pyfaidx: ``>=0.8.0,<0.9.dev0``
   :depends on pyfiglet: ``>=1.0.0,<1.1.dev0``
   :depends on pynose: ``>=1.5.0,<1.6.dev0``
   :depends on pypandoc: ``>=1.14.0,<1.15.dev0``
   :depends on pysam: ``>=0.22.0,<0.23.dev0``
   :depends on pytest: ``>=8.2.0,<8.3.dev0``
   :depends on python: ``>=3.10,<3.11``
   :depends on python-duckdb: ``>=1.0.0,<1.1.dev0``
   :depends on pyvcf3: ``>=1.0.0,<1.1.dev0``
   :depends on tabulate: ``>=0.9.0,<0.10.dev0``
   :depends on termcolor: ``>=2.5.0,<2.6.dev0``

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

    pixi global install pyhoward

to add into an existing workspace instead, run::

    pixi add pyhoward

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyhoward

Alternatively, to install into a new environment, run::

    conda create -n envname pyhoward

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyhoward:<tag>

(see `pyhoward/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyhoward| image:: https://img.shields.io/conda/dn/bioconda/pyhoward.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhoward
   :alt:   (downloads)
.. |docker_pyhoward| image:: https://quay.io/repository/biocontainers/pyhoward/status
   :target: https://quay.io/repository/biocontainers/pyhoward
.. _`pyhoward/tags`: https://quay.io/repository/biocontainers/pyhoward?tab=tags


.. raw:: html

    <script>
        var package = "pyhoward";
        var versions = ["0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhoward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhoward/README.html