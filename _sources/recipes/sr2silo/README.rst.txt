:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sr2silo'
.. highlight: bash

sr2silo
=======

.. conda:recipe:: sr2silo
   :replaces_section_title:
   :noindex:

   Short\-read to SILO format converter.

   :homepage: https://github.com/cbg-ethz/sr2silo
   :documentation: https://github.com/cbg-ethz/sr2silo/blob/v1.8.0/README.md
   
   :license: MIT / MIT
   :recipe: /`sr2silo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sr2silo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sr2silo/meta.yaml>`_

   sr2silo is a tool for converting short read data to SILO format\,
   designed for bioinformatics applications.



.. conda:package:: sr2silo

   |downloads_sr2silo| |docker_sr2silo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.83``
   :depends on boto3: ``>=1.35.72``
   :depends on click: ``>=8.1.8``
   :depends on moto: ``>=5.0.22``
   :depends on psutil: ``>=6.1.1``
   :depends on pydantic: ``>=2.10.6``
   :depends on pysam: ``>=0.23.0``
   :depends on python: ``>=3.11``
   :depends on python-dotenv: 
   :depends on pyyaml: ``>=6.0.2``
   :depends on requests: ``>=2.25.0``
   :depends on tqdm: ``>=4.67.1``
   :depends on typer: ``>=0.15.1``
   :depends on zstandard: ``>=0.23.0``

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

    pixi global install sr2silo

to add into an existing workspace instead, run::

    pixi add sr2silo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sr2silo

Alternatively, to install into a new environment, run::

    conda create -n envname sr2silo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sr2silo:<tag>

(see `sr2silo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sr2silo| image:: https://img.shields.io/conda/dn/bioconda/sr2silo.svg?style=flat
   :target: https://anaconda.org/bioconda/sr2silo
   :alt:   (downloads)
.. |docker_sr2silo| image:: https://quay.io/repository/biocontainers/sr2silo/status
   :target: https://quay.io/repository/biocontainers/sr2silo
.. _`sr2silo/tags`: https://quay.io/repository/biocontainers/sr2silo?tab=tags


.. raw:: html

    <script>
        var package = "sr2silo";
        var versions = ["1.8.0","1.7.0","1.6.1","1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sr2silo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sr2silo/README.html