:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minute'
.. highlight: bash

minute
======

.. conda:recipe:: minute
   :replaces_section_title:
   :noindex:

   MINUTE\-ChIP data analysis workflow

   :homepage: https://github.com/elsasserlab/minute/
   :documentation: https://minute.readthedocs.io/en/latest
   
   :developer docs: https://github.com/elsasserlab/minute
   :license: MIT / MIT
   :recipe: /`minute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minute/meta.yaml>`_

   


.. conda:package:: minute

   |downloads_minute| |docker_minute|

   :versions:
      
      

      ``0.12.1-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.6.0-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.2.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends bowtie2: ``>=2.5.3``
   :depends cutadapt: ``>=3.7``
   :depends deeptools: ``>=3.5.0``
   :depends fastqc: ``>=0.11.9``
   :depends igvtools: ``>=2.5.3``
   :depends je-suite: ``>=2.0.RC``
   :depends multiqc: ``1.17.*``
   :depends picard: ``>=2.26.0``
   :depends python: ``>=3.7``
   :depends r-base: ``>=4.0.0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.3.0``
   :depends ruamel.yaml: 
   :depends samtools: ``>=1.13``
   :depends snakemake-minimal: ``>=7.22.0``
   :depends sra-tools: ``>=2.11.0``
   :depends strobealign: ``>=0.13.0``
   :depends xopen: ``>=1.2.0``
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

      mamba install minute

   and update with::

      mamba update minute

  To create a new environment, run::

      mamba create --name myenvname minute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minute:<tag>

   (see `minute/tags`_ for valid values for ``<tag>``)


.. |downloads_minute| image:: https://img.shields.io/conda/dn/bioconda/minute.svg?style=flat
   :target: https://anaconda.org/bioconda/minute
   :alt:   (downloads)
.. |docker_minute| image:: https://quay.io/repository/biocontainers/minute/status
   :target: https://quay.io/repository/biocontainers/minute
.. _`minute/tags`: https://quay.io/repository/biocontainers/minute?tab=tags


.. raw:: html

    <script>
        var package = "minute";
        var versions = ["0.12.1","0.10.1","0.10.0","0.9.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minute/README.html