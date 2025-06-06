:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crossfilt'
.. highlight: bash

crossfilt
=========

.. conda:recipe:: crossfilt
   :replaces_section_title:
   :noindex:

   Tools to filter reads causing alignment bias in cross\-species genomic comparisons.

   :homepage: https://github.com/kennethabarr/CrossFilt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`crossfilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossfilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossfilt/meta.yaml>`_

   


.. conda:package:: crossfilt

   |downloads_crossfilt| |docker_crossfilt|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends bx-python: 
   :depends intervaltree: 
   :depends pysam: 
   :depends python: ``>=3.10``
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

      mamba install crossfilt

   and update with::

      mamba update crossfilt

  To create a new environment, run::

      mamba create --name myenvname crossfilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crossfilt:<tag>

   (see `crossfilt/tags`_ for valid values for ``<tag>``)


.. |downloads_crossfilt| image:: https://img.shields.io/conda/dn/bioconda/crossfilt.svg?style=flat
   :target: https://anaconda.org/bioconda/crossfilt
   :alt:   (downloads)
.. |docker_crossfilt| image:: https://quay.io/repository/biocontainers/crossfilt/status
   :target: https://quay.io/repository/biocontainers/crossfilt
.. _`crossfilt/tags`: https://quay.io/repository/biocontainers/crossfilt?tab=tags


.. raw:: html

    <script>
        var package = "crossfilt";
        var versions = ["0.1.4","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crossfilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crossfilt/README.html