:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-multx'
.. highlight: bash

fastq-multx
===========

.. conda:recipe:: fastq-multx
   :replaces_section_title:
   :noindex:

   Demultiplexes a fastq. Capable of auto\-determining barcode id\'s based on a master set fields. Keeps multiple reads in\-sync during demultiplexing. Can verify that the reads are in\-sync as well\, and fail if they\'re not.

   :homepage: https://github.com/brwnj/fastq-multx
   :license: MIT
   :recipe: /`fastq-multx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx/meta.yaml>`_

   


.. conda:package:: fastq-multx

   |downloads_fastq-multx| |docker_fastq-multx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-5</code>,  <code>1.4.2-4</code>,  <code>1.4.2-3</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  </span></summary>
      

      ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.0-2``,  ``1.3.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install fastq-multx

to add into an existing workspace instead, run::

    pixi add fastq-multx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-multx

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-multx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-multx:<tag>

(see `fastq-multx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-multx| image:: https://img.shields.io/conda/dn/bioconda/fastq-multx.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-multx
   :alt:   (downloads)
.. |docker_fastq-multx| image:: https://quay.io/repository/biocontainers/fastq-multx/status
   :target: https://quay.io/repository/biocontainers/fastq-multx
.. _`fastq-multx/tags`: https://quay.io/repository/biocontainers/fastq-multx?tab=tags


.. raw:: html

    <script>
        var package = "fastq-multx";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-multx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-multx/README.html