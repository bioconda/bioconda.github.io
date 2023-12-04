:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbioformats'
.. highlight: bash

bioconductor-rbioformats
========================

.. conda:recipe:: bioconductor-rbioformats
   :replaces_section_title:
   :noindex:

   R interface to Bio\-Formats

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RBioFormats.html
   :license: GPL-3
   :recipe: /`bioconductor-rbioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioformats/meta.yaml>`_

   An R package which interfaces the OME Bio\-Formats Java library to allow reading of proprietary microscopy image data and metadata.


.. conda:package:: bioconductor-rbioformats

   |downloads_bioconductor-rbioformats| |docker_bioconductor-rbioformats|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjava: ``>=0.9-6``
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

      mamba install bioconductor-rbioformats

   and update with::

      mamba update bioconductor-rbioformats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbioformats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbioformats:<tag>

   (see `bioconductor-rbioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbioformats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbioformats
   :alt:   (downloads)
.. |docker_bioconductor-rbioformats| image:: https://quay.io/repository/biocontainers/bioconductor-rbioformats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbioformats
.. _`bioconductor-rbioformats/tags`: https://quay.io/repository/biocontainers/bioconductor-rbioformats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbioformats";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbioformats/README.html