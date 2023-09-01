:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakelines'
.. highlight: bash

snakelines
==========

.. conda:recipe:: snakelines
   :replaces_section_title:
   :noindex:

   Computational pipelines for processing of paired\-end sequencing reads.

   :homepage: https://snakelines.readthedocs.io/en/latest/
   :license: CC BY-NC-SA
   :recipe: /`snakelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines/meta.yaml>`_

   


.. conda:package:: snakelines

   |downloads_snakelines| |docker_snakelines|

   :versions:
      
      

      ``1.1.8-0``,  ``1.1.4-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``

      

   
   :depends bs4: ``>=4.9,<4.10``
   :depends jinja2: ``>=3.1.2,<3.2``
   :depends multiqc: ``>=1.10,<1.11``
   :depends numpy: ``>=1.19,<1.20``
   :depends oyaml: ``>=0.9,<1.0``
   :depends pandas: ``>=1.1,<1.2``
   :depends parse: ``>=1.19.0,<1.20``
   :depends pygraphviz: ``>=1.7,<1.8``
   :depends python: ``>=3.9,<3.10``
   :depends seaborn: ``>=0.11,<0.12``
   :depends snakemake-minimal: ``>=7.18,<7.19``
   :depends tk: ``>=8.6,<8.7``
   :depends weasyprint: ``>=51,<52``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snakelines

   and update with::

      mamba update snakelines

  To create a new environment, run::

      mamba create --name myenvname snakelines

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakelines:<tag>

   (see `snakelines/tags`_ for valid values for ``<tag>``)


.. |downloads_snakelines| image:: https://img.shields.io/conda/dn/bioconda/snakelines.svg?style=flat
   :target: https://anaconda.org/bioconda/snakelines
   :alt:   (downloads)
.. |docker_snakelines| image:: https://quay.io/repository/biocontainers/snakelines/status
   :target: https://quay.io/repository/biocontainers/snakelines
.. _`snakelines/tags`: https://quay.io/repository/biocontainers/snakelines?tab=tags


.. raw:: html

    <script>
        var package = "snakelines";
        var versions = ["1.1.8","1.1.4","1.1.0","1.0.4","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakelines/README.html