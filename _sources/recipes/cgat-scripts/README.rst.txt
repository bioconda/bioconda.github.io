:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-scripts'
.. highlight: bash

cgat-scripts
============

.. conda:recipe:: cgat-scripts
   :replaces_section_title:
   :noindex:

   Computational Genomics Analysis Toolkit

   :homepage: https://www.cgat.org/downloads/public/cgat/documentation
   :license: BSD
   :recipe: /`cgat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts/meta.yaml>`_

   


.. conda:package:: cgat-scripts

   |downloads_cgat-scripts| |docker_cgat-scripts|

   :versions:
      
      

      ``0.3.2-2``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.7-0``,  ``0.2.6-0``

      

   
   :depends on alignlib-lite: ``0.3.*``
   :depends on bedtools: ``2.26.*``
   :depends on biopython: ``1.70.*``
   :depends on coreutils: ``8.25.*``
   :depends on cython: ``0.27.*``
   :depends on future: ``0.16.*``
   :depends on grep: ``2.14.*``
   :depends on libgcc-ng: ``>=4.9``
   :depends on libpng: ``>=1.6.34,<1.7.0a0``
   :depends on matplotlib: ``2.1.*``
   :depends on numpy: ``1.12.*``
   :depends on pandas: ``0.21.*``
   :depends on pybedtools: ``0.7.*``
   :depends on pybigwig: ``0.3.*``
   :depends on pysam: ``0.13.*``
   :depends on python: ``>=3.5,<3.6.0a0``
   :depends on python-lzo: ``1.11.*``
   :depends on pyyaml: ``3.12.*``
   :depends on rpy2: ``2.8.*``
   :depends on scipy: ``0.19.*``
   :depends on six: ``1.11.*``
   :depends on ucsc-bedgraphtobigwig: ``357.*``
   :depends on ucsc-bedtobigbed: ``357.*``
   :depends on ucsc-wigtobigwig: ``357.*``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install cgat-scripts

to add into an existing workspace instead, run::

    pixi add cgat-scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgat-scripts

Alternatively, to install into a new environment, run::

    conda create -n envname cgat-scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgat-scripts:<tag>

(see `cgat-scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgat-scripts| image:: https://img.shields.io/conda/dn/bioconda/cgat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-scripts
   :alt:   (downloads)
.. |docker_cgat-scripts| image:: https://quay.io/repository/biocontainers/cgat-scripts/status
   :target: https://quay.io/repository/biocontainers/cgat-scripts
.. _`cgat-scripts/tags`: https://quay.io/repository/biocontainers/cgat-scripts?tab=tags


.. raw:: html

    <script>
        var package = "cgat-scripts";
        var versions = ["0.3.2","0.3.2","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-scripts/README.html