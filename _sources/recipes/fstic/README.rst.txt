:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fstic'
.. highlight: bash

fstic
=====

.. conda:recipe:: fstic
   :replaces_section_title:
   :noindex:

   High\-performance Rust tool for computing multiple genetic distance metrics \(FST\, GST\, Jost’s D\, etc.\) from VCFs or allele\-frequency tables\, with parallel processing and advanced filtering.

   :homepage: https://github.com/PathoGenOmics-Lab/fstic
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fstic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fstic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fstic/meta.yaml>`_

   


.. conda:package:: fstic

   |downloads_fstic| |docker_fstic|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install fstic

   and update with::

      mamba update fstic

  To create a new environment, run::

      mamba create --name myenvname fstic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fstic:<tag>

   (see `fstic/tags`_ for valid values for ``<tag>``)


.. |downloads_fstic| image:: https://img.shields.io/conda/dn/bioconda/fstic.svg?style=flat
   :target: https://anaconda.org/bioconda/fstic
   :alt:   (downloads)
.. |docker_fstic| image:: https://quay.io/repository/biocontainers/fstic/status
   :target: https://quay.io/repository/biocontainers/fstic
.. _`fstic/tags`: https://quay.io/repository/biocontainers/fstic?tab=tags


.. raw:: html

    <script>
        var package = "fstic";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fstic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fstic/README.html