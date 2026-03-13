:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-dl'
.. highlight: bash

fastq-dl
========

.. conda:recipe:: fastq-dl
   :replaces_section_title:
   :noindex:

   A tool to download FASTQs associated with Study\, Experiment\, or Run accessions.

   :homepage: https://github.com/rpetit3/fastq-dl
   :license: MIT
   :recipe: /`fastq-dl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-dl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-dl/meta.yaml>`_

   


.. conda:package:: fastq-dl

   |downloads_fastq-dl| |docker_fastq-dl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on executor: 
   :depends on pigz: 
   :depends on pysradb: ``>=1.4``
   :depends on python: ``>=3.9,<=3.12``
   :depends on requests: 
   :depends on rich-click: ``>=1.6.0``
   :depends on sra-tools: ``>=3.0.1,<=3.1.1``
   :depends on wget: 

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

    pixi global install fastq-dl

to add into an existing workspace instead, run::

    pixi add fastq-dl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-dl

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-dl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-dl:<tag>

(see `fastq-dl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-dl| image:: https://img.shields.io/conda/dn/bioconda/fastq-dl.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-dl
   :alt:   (downloads)
.. |docker_fastq-dl| image:: https://quay.io/repository/biocontainers/fastq-dl/status
   :target: https://quay.io/repository/biocontainers/fastq-dl
.. _`fastq-dl/tags`: https://quay.io/repository/biocontainers/fastq-dl?tab=tags


.. raw:: html

    <script>
        var package = "fastq-dl";
        var versions = ["3.0.1","3.0.0","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-dl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-dl/README.html