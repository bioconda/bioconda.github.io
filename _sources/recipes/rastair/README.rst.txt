:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rastair'
.. highlight: bash

rastair
=======

.. conda:recipe:: rastair
   :replaces_section_title:
   :noindex:

   Rust tool for TAPS\-based methylation calling.

   :homepage: https://bitbucket.org/bsblabludwig/rastair/src/v0.8.2/
   :license: GPL-3.0
   :recipe: /`rastair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastair/meta.yaml>`_

   rastair is a fast and accurate tool for methylation calling from TAPS sequencing data\, written in Rust.


.. conda:package:: rastair

   |downloads_rastair| |docker_rastair|

   :versions:
      
      

      ``0.8.2-0``

      

   
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=3.5.1,<4.0.0``
   :depends r-gtable: ``>=0.3.6,<0.4.0``
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

      mamba install rastair

   and update with::

      mamba update rastair

  To create a new environment, run::

      mamba create --name myenvname rastair

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rastair:<tag>

   (see `rastair/tags`_ for valid values for ``<tag>``)


.. |downloads_rastair| image:: https://img.shields.io/conda/dn/bioconda/rastair.svg?style=flat
   :target: https://anaconda.org/bioconda/rastair
   :alt:   (downloads)
.. |docker_rastair| image:: https://quay.io/repository/biocontainers/rastair/status
   :target: https://quay.io/repository/biocontainers/rastair
.. _`rastair/tags`: https://quay.io/repository/biocontainers/rastair?tab=tags


.. raw:: html

    <script>
        var package = "rastair";
        var versions = ["0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rastair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rastair/README.html