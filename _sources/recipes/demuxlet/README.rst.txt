:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demuxlet'
.. highlight: bash

demuxlet
========

.. conda:recipe:: demuxlet
   :replaces_section_title:
   :noindex:

   Genetic multiplexing of barcoded single cell RNA\-seq

   :homepage: https://github.com/statgen/demuxlet
   :license: GPL3
   :recipe: /`demuxlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet/meta.yaml>`_

   


.. conda:package:: demuxlet

   |downloads_demuxlet| |docker_demuxlet|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends htslib: ``>=1.10.2,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends samtools: 
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

      mamba install demuxlet

   and update with::

      mamba update demuxlet

  To create a new environment, run::

      mamba create --name myenvname demuxlet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/demuxlet:<tag>

   (see `demuxlet/tags`_ for valid values for ``<tag>``)


.. |downloads_demuxlet| image:: https://img.shields.io/conda/dn/bioconda/demuxlet.svg?style=flat
   :target: https://anaconda.org/bioconda/demuxlet
   :alt:   (downloads)
.. |docker_demuxlet| image:: https://quay.io/repository/biocontainers/demuxlet/status
   :target: https://quay.io/repository/biocontainers/demuxlet
.. _`demuxlet/tags`: https://quay.io/repository/biocontainers/demuxlet?tab=tags


.. raw:: html

    <script>
        var package = "demuxlet";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demuxlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demuxlet/README.html