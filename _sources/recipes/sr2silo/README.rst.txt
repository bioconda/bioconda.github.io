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
   :documentation: https://github.com/cbg-ethz/sr2silo/blob/v1.3.0/README.md
   
   :license: MIT / MIT
   :recipe: /`sr2silo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sr2silo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sr2silo/meta.yaml>`_

   sr2silo is a tool for converting short read data to SILO format\,
   designed for bioinformatics applications.



.. conda:package:: sr2silo

   |downloads_sr2silo| |docker_sr2silo|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``>=1.83``
   :depends boto3: ``>=1.35.72``
   :depends click: ``>=8.1.8``
   :depends moto: ``>=5.0.22``
   :depends psutil: ``>=6.1.1``
   :depends pydantic: ``>=2.10.6``
   :depends pysam: ``>=0.23.0``
   :depends python: ``>=3.11``
   :depends python-dotenv: 
   :depends pyyaml: ``>=6.0.2``
   :depends requests: ``>=2.25.0``
   :depends tqdm: ``>=4.67.1``
   :depends typer: ``>=0.15.1``
   :depends zstandard: ``>=0.23.0``
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

      mamba install sr2silo

   and update with::

      mamba update sr2silo

  To create a new environment, run::

      mamba create --name myenvname sr2silo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sr2silo:<tag>

   (see `sr2silo/tags`_ for valid values for ``<tag>``)


.. |downloads_sr2silo| image:: https://img.shields.io/conda/dn/bioconda/sr2silo.svg?style=flat
   :target: https://anaconda.org/bioconda/sr2silo
   :alt:   (downloads)
.. |docker_sr2silo| image:: https://quay.io/repository/biocontainers/sr2silo/status
   :target: https://quay.io/repository/biocontainers/sr2silo
.. _`sr2silo/tags`: https://quay.io/repository/biocontainers/sr2silo?tab=tags


.. raw:: html

    <script>
        var package = "sr2silo";
        var versions = ["1.3.0","1.2.0","1.1.1","1.1.0","1.0.1"];
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