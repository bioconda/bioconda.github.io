:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq_utils'
.. highlight: bash

fastq_utils
===========

.. conda:recipe:: fastq_utils
   :replaces_section_title:
   :noindex:

   Validation and manipulation of FASTQ files\, scRNA\-seq barcode pre\-processing and UMI quantification.

   :homepage: https://github.com/nunofonseca/fastq_utils
   :documentation: https://github.com/nunofonseca/fastq_utils/blob/0.25.3/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fastq_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils/meta.yaml>`_

   


.. conda:package:: fastq_utils

   |downloads_fastq_utils| |docker_fastq_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.25.3-0</code>,  <code>0.25.2-2</code>,  <code>0.25.2-1</code>,  <code>0.25.2-0</code>,  <code>0.25.1-1</code>,  <code>0.25.1-0</code>,  <code>0.24.1-1</code>,  <code>0.24.1-0</code>,  <code>0.24.0-0</code>,  </span></summary>
      

      ``0.25.3-0``,  ``0.25.2-2``,  ``0.25.2-1``,  ``0.25.2-0``,  ``0.25.1-1``,  ``0.25.1-0``,  ``0.24.1-1``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.18.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on samtools: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install fastq_utils

to add into an existing workspace instead, run::

    pixi add fastq_utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq_utils

Alternatively, to install into a new environment, run::

    conda create -n envname fastq_utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq_utils:<tag>

(see `fastq_utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq_utils| image:: https://img.shields.io/conda/dn/bioconda/fastq_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq_utils
   :alt:   (downloads)
.. |docker_fastq_utils| image:: https://quay.io/repository/biocontainers/fastq_utils/status
   :target: https://quay.io/repository/biocontainers/fastq_utils
.. _`fastq_utils/tags`: https://quay.io/repository/biocontainers/fastq_utils?tab=tags


.. raw:: html

    <script>
        var package = "fastq_utils";
        var versions = ["0.25.3","0.25.2","0.25.2","0.25.2","0.25.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq_utils/README.html