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
      
      

      ``1.0.11-0``,  ``1.0.9-0``

      

   
   :depends biopython: ``>=1.80``
   :depends python: ``>=3.9``
   :depends ratelimit: ``>=2.2.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gene-fetch

   and update with::

      mamba update gene-fetch

  To create a new environment, run::

      mamba create --name myenvname gene-fetch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gene-fetch:<tag>

   (see `gene-fetch/tags`_ for valid values for ``<tag>``)


.. |downloads_gene-fetch| image:: https://img.shields.io/conda/dn/bioconda/gene-fetch.svg?style=flat
   :target: https://anaconda.org/bioconda/gene-fetch
   :alt:   (downloads)
.. |docker_gene-fetch| image:: https://quay.io/repository/biocontainers/gene-fetch/status
   :target: https://quay.io/repository/biocontainers/gene-fetch
.. _`gene-fetch/tags`: https://quay.io/repository/biocontainers/gene-fetch?tab=tags


.. raw:: html

    <script>
        var package = "gene-fetch";
        var versions = ["1.0.11","1.0.9"];
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