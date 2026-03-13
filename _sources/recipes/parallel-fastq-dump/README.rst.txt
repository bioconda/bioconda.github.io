:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-fastq-dump'
.. highlight: bash

parallel-fastq-dump
===================

.. conda:recipe:: parallel-fastq-dump
   :replaces_section_title:
   :noindex:

   parallel fastq\-dump wrapper

   :homepage: https://github.com/rvalieris/parallel-fastq-dump
   :license: MIT / MIT License
   :recipe: /`parallel-fastq-dump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-fastq-dump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-fastq-dump/meta.yaml>`_

   


.. conda:package:: parallel-fastq-dump

   |downloads_parallel-fastq-dump| |docker_parallel-fastq-dump|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.7-0</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3``
   :depends on sra-tools: 

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

    pixi global install parallel-fastq-dump

to add into an existing workspace instead, run::

    pixi add parallel-fastq-dump

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parallel-fastq-dump

Alternatively, to install into a new environment, run::

    conda create -n envname parallel-fastq-dump

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parallel-fastq-dump:<tag>

(see `parallel-fastq-dump/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parallel-fastq-dump| image:: https://img.shields.io/conda/dn/bioconda/parallel-fastq-dump.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-fastq-dump
   :alt:   (downloads)
.. |docker_parallel-fastq-dump| image:: https://quay.io/repository/biocontainers/parallel-fastq-dump/status
   :target: https://quay.io/repository/biocontainers/parallel-fastq-dump
.. _`parallel-fastq-dump/tags`: https://quay.io/repository/biocontainers/parallel-fastq-dump?tab=tags


.. raw:: html

    <script>
        var package = "parallel-fastq-dump";
        var versions = ["0.6.7","0.6.6","0.6.6","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-fastq-dump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-fastq-dump/README.html