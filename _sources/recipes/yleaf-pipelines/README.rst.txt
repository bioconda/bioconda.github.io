:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yleaf-pipelines'
.. highlight: bash

yleaf-pipelines
===============

.. conda:recipe:: yleaf-pipelines
   :replaces_section_title:
   :noindex:

   Yleaf\-pipelines \- A pipeline\-optimized version of Yleaf\, a tool for Y\-chromosome haplogroup prediction.

   :homepage: https://github.com/trianglegrrl/Yleaf-pipelines
   :license: MIT / MIT
   :recipe: /`yleaf-pipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf-pipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf-pipelines/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msy032`

   Yleaf\-pipelines is a pipeline\-optimized version of Yleaf\, a tool for Y\-chromosome haplogroup prediction from next\-generation sequencing data.
   It provides a comprehensive solution for analyzing Y\-chromosome genetic data and determining
   haplogroup assignments.



.. conda:package:: yleaf-pipelines

   |downloads_yleaf-pipelines| |docker_yleaf-pipelines|

   :versions:
      
      

      ``3.3.0-0``

      

   
   :depends graphviz: ``>=2.40``
   :depends networkx: ``>=2.6``
   :depends numpy: 
   :depends pandas: ``>=1.3``
   :depends pip: 
   :depends python: 
   :depends python-dateutil: ``>=2.8``
   :depends pytz: ``>=2021``
   :depends six: ``>=1.16``
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

      mamba install yleaf-pipelines

   and update with::

      mamba update yleaf-pipelines

  To create a new environment, run::

      mamba create --name myenvname yleaf-pipelines

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yleaf-pipelines:<tag>

   (see `yleaf-pipelines/tags`_ for valid values for ``<tag>``)


.. |downloads_yleaf-pipelines| image:: https://img.shields.io/conda/dn/bioconda/yleaf-pipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/yleaf-pipelines
   :alt:   (downloads)
.. |docker_yleaf-pipelines| image:: https://quay.io/repository/biocontainers/yleaf-pipelines/status
   :target: https://quay.io/repository/biocontainers/yleaf-pipelines
.. _`yleaf-pipelines/tags`: https://quay.io/repository/biocontainers/yleaf-pipelines?tab=tags


.. raw:: html

    <script>
        var package = "yleaf-pipelines";
        var versions = ["3.3.0"];
    </script>





Notes
-----
Yleaf requires reference genome files for analysis. These will be downloaded automatically
when needed\, or you can specify their location in the config.txt file.
Basic usage\:
  Yleaf \-fastq input.fastq \-rg hg38 \-o output\_dir \-fg \/path\/to\/full\-genome.fa \-yr \/path\/to\/ychr.fa\"
For more information\, see the documentation at\:
  https\:\/\/github.com\/trianglegrrl\/Yleaf\-pipelines


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yleaf-pipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yleaf-pipelines/README.html