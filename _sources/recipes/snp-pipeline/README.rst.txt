:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pipeline'
.. highlight: bash

snp-pipeline
============

.. conda:recipe:: snp-pipeline
   :replaces_section_title:
   :noindex:

   Script and functions for SNP matrix construction

   :homepage: https://github.com/CFSAN-Biostatistics/snp-pipeline
   :license: BSD License
   :recipe: /`snp-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline/meta.yaml>`_

   


.. conda:package:: snp-pipeline

   |downloads_snp-pipeline| |docker_snp-pipeline|

   :versions:
      
      

      ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``1.0.1-2``,  ``1.0.1-0``,  ``0.7.0-0``,  ``0.5.0-0``

      

   
   :depends biopython: 
   :depends jobrunner: 
   :depends packaging: 
   :depends psutil: 
   :depends python: 
   :depends pyvcf: ``>=0.6.7``
   :depends setuptools: 
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

      mamba install snp-pipeline

   and update with::

      mamba update snp-pipeline

  To create a new environment, run::

      mamba create --name myenvname snp-pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp-pipeline:<tag>

   (see `snp-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-pipeline| image:: https://img.shields.io/conda/dn/bioconda/snp-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pipeline
   :alt:   (downloads)
.. |docker_snp-pipeline| image:: https://quay.io/repository/biocontainers/snp-pipeline/status
   :target: https://quay.io/repository/biocontainers/snp-pipeline
.. _`snp-pipeline/tags`: https://quay.io/repository/biocontainers/snp-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "snp-pipeline";
        var versions = ["2.2.1","2.2.0","2.1.1","2.1.0","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pipeline/README.html