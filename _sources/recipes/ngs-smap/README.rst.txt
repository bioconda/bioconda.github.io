:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-smap'
.. highlight: bash

ngs-smap
========

.. conda:recipe:: ngs-smap
   :replaces_section_title:
   :noindex:

   SMAP is an analysis tool for stack\-based NGS read mapping

   :homepage: https://gitlab.com/truttink/smap
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ngs-smap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap/meta.yaml>`_

   


.. conda:package:: ngs-smap

   |downloads_ngs-smap| |docker_ngs-smap|

   :versions:
      
      

      ``5.0.1-0``,  ``4.6.5-0``,  ``4.6.4-0``,  ``4.6.2-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``

      

   
   :depends on biopython: ``>=1.8``
   :depends on colorlog: ``>=6.6.0,<6.7``
   :depends on cutadapt: ``4.4``
   :depends on gffpandas: ``1.2.*``
   :depends on gffutils: 
   :depends on matplotlib-base: ``>=3.5.1,<3.6``
   :depends on natsort: ``8.2.0``
   :depends on numexpr: 
   :depends on openpyxl: ``>=3.0.9,<3.1.0``
   :depends on pandas: ``>=2.0.3,<2.1.0``
   :depends on plotly: ``>=5.5``
   :depends on primer3-py: 
   :depends on pybedtools: ``>=0.9.0,<0.10``
   :depends on pysam: ``>=0.22.0,<0.23.0``
   :depends on python: ``>=3.8.1,!=3.11``
   :depends on scipy: 
   :depends on seaborn: ``0.12.1``
   :depends on tqdm: 
   :depends on typing-extensions: ``>=4.0.0,<4.1.1``

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

    pixi global install ngs-smap

to add into an existing workspace instead, run::

    pixi add ngs-smap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-smap

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-smap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-smap:<tag>

(see `ngs-smap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-smap| image:: https://img.shields.io/conda/dn/bioconda/ngs-smap.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-smap
   :alt:   (downloads)
.. |docker_ngs-smap| image:: https://quay.io/repository/biocontainers/ngs-smap/status
   :target: https://quay.io/repository/biocontainers/ngs-smap
.. _`ngs-smap/tags`: https://quay.io/repository/biocontainers/ngs-smap?tab=tags


.. raw:: html

    <script>
        var package = "ngs-smap";
        var versions = ["5.0.1","4.6.5","4.6.4","4.6.2","4.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-smap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-smap/README.html