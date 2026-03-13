:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-filter'
.. highlight: bash

fastq-filter
============

.. conda:recipe:: fastq-filter
   :replaces_section_title:
   :noindex:

   A fast FASTQ filter program.

   :homepage: https://github.com/LUMC/fastq-filter
   :license: MIT / MIT
   :recipe: /`fastq-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter/meta.yaml>`_

   


.. conda:package:: fastq-filter

   |downloads_fastq-filter| |docker_fastq-filter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  <code>0.1.1-2</code>,  <code>0.1.1-1</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dnaio: ``>=0.6.0``
   :depends on dnaio: ``>=1.2.2,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on xopen: ``>=1.2.1``

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

    pixi global install fastq-filter

to add into an existing workspace instead, run::

    pixi add fastq-filter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-filter

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-filter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-filter:<tag>

(see `fastq-filter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-filter| image:: https://img.shields.io/conda/dn/bioconda/fastq-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-filter
   :alt:   (downloads)
.. |docker_fastq-filter| image:: https://quay.io/repository/biocontainers/fastq-filter/status
   :target: https://quay.io/repository/biocontainers/fastq-filter
.. _`fastq-filter/tags`: https://quay.io/repository/biocontainers/fastq-filter?tab=tags


.. raw:: html

    <script>
        var package = "fastq-filter";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-filter/README.html