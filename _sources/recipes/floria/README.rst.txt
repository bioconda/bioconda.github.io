:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'floria'
.. highlight: bash

floria
======

.. conda:recipe:: floria
   :replaces_section_title:
   :noindex:

   Floria is method for recovering strain\-level haplotypes and clusters of reads from metagenomic short or long read sequencing data by haplotype phasing.

   :homepage: https://github.com/bluenote-1577/floria
   :license: MIT
   :recipe: /`floria <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/floria>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/floria/meta.yaml>`_

   


.. conda:package:: floria

   |downloads_floria| |docker_floria|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install floria

   and update with::

      mamba update floria

  To create a new environment, run::

      mamba create --name myenvname floria

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/floria:<tag>

   (see `floria/tags`_ for valid values for ``<tag>``)


.. |downloads_floria| image:: https://img.shields.io/conda/dn/bioconda/floria.svg?style=flat
   :target: https://anaconda.org/bioconda/floria
   :alt:   (downloads)
.. |docker_floria| image:: https://quay.io/repository/biocontainers/floria/status
   :target: https://quay.io/repository/biocontainers/floria
.. _`floria/tags`: https://quay.io/repository/biocontainers/floria?tab=tags


.. raw:: html

    <script>
        var package = "floria";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/floria/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/floria/README.html