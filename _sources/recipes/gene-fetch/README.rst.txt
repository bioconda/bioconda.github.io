:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gene-fetch'
.. highlight: bash

gene-fetch
==========

.. conda:recipe:: gene-fetch
   :replaces_section_title:
   :noindex:

   High\-throughput NCBI Sequence Retrieval Tool

   :homepage: https://github.com/bge-barcoding/gene_fetch
   :license: MIT / MIT
   :recipe: /`gene-fetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-fetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-fetch/meta.yaml>`_

   Gene Fetch is a tool designed for high\-throughput retrieval of sequences
   from NCBI databases. It enables researchers to efficiently obtain genomic
   sequences based on taxonomic and genomic criteria.



.. conda:package:: gene-fetch

   |downloads_gene-fetch| |docker_gene-fetch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.21-0</code>,  <code>1.0.20-0</code>,  <code>1.0.19-0</code>,  <code>1.0.18-0</code>,  <code>1.0.17-0</code>,  <code>1.0.15-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  </span></summary>
      

      ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.80``
   :depends on python: ``>=3.9``
   :depends on ratelimit: ``>=2.2.1``

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

    pixi global install gene-fetch

to add into an existing workspace instead, run::

    pixi add gene-fetch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gene-fetch

Alternatively, to install into a new environment, run::

    conda create -n envname gene-fetch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gene-fetch:<tag>

(see `gene-fetch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gene-fetch| image:: https://img.shields.io/conda/dn/bioconda/gene-fetch.svg?style=flat
   :target: https://anaconda.org/bioconda/gene-fetch
   :alt:   (downloads)
.. |docker_gene-fetch| image:: https://quay.io/repository/biocontainers/gene-fetch/status
   :target: https://quay.io/repository/biocontainers/gene-fetch
.. _`gene-fetch/tags`: https://quay.io/repository/biocontainers/gene-fetch?tab=tags


.. raw:: html

    <script>
        var package = "gene-fetch";
        var versions = ["1.0.21","1.0.20","1.0.19","1.0.18","1.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gene-fetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gene-fetch/README.html