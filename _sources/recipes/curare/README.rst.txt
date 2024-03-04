:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curare'
.. highlight: bash

curare
======

.. conda:recipe:: curare
   :replaces_section_title:
   :noindex:

   A Customizable and Reproducible Analysis Pipeline for RNA\-Seq Experiments.

   :homepage: https://github.com/pblumenkamp/Curare
   :license: GPL3 / GPL3
   :recipe: /`curare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curare/meta.yaml>`_

   Curare is a freely available analysis pipeline for reproducible\, high\-throughput\,
   bacterial RNA\-Seq experiments. Define standardized pipelines customized for your
   specific workflow without the necessity of installing all the tools by yourself.
   Curare is implemented in Python and uses the power of Snakemake and Conda to build
   and execute the defined workflows. Its modulized structure and the simplicity of
   Snakemake enables developers to create new and advanced workflow steps.


.. conda:package:: curare

   |downloads_curare| |docker_curare|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``

      

   
   :depends biopython: ``1.83.*``
   :depends docopt: ``0.6.2.*``
   :depends mamba: ``1.5.3.*``
   :depends progressbar2: ``4.3.2.*``
   :depends python: ``3.10.*``
   :depends pyyaml: ``6.0.*``
   :depends snakemake: ``7.32.3.*``
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

      mamba install curare

   and update with::

      mamba update curare

  To create a new environment, run::

      mamba create --name myenvname curare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/curare:<tag>

   (see `curare/tags`_ for valid values for ``<tag>``)


.. |downloads_curare| image:: https://img.shields.io/conda/dn/bioconda/curare.svg?style=flat
   :target: https://anaconda.org/bioconda/curare
   :alt:   (downloads)
.. |docker_curare| image:: https://quay.io/repository/biocontainers/curare/status
   :target: https://quay.io/repository/biocontainers/curare
.. _`curare/tags`: https://quay.io/repository/biocontainers/curare?tab=tags


.. raw:: html

    <script>
        var package = "curare";
        var versions = ["0.6.0","0.5.1","0.5.0","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curare/README.html