:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamcmp'
.. highlight: bash

bamcmp
======

.. conda:recipe:: bamcmp
   :replaces_section_title:
   :noindex:

   Tools for deconvolving host and graft reads using full\-length alignments and their scores.

   :homepage: https://github.com/CRUKMI-ComputationalBiology/bamcmp
   :license: GPL-3
   :recipe: /`bamcmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamcmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamcmp/meta.yaml>`_

   


.. conda:package:: bamcmp

   |downloads_bamcmp| |docker_bamcmp|

   :versions:
      
      

      ``2.2-4``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install bamcmp

   and update with::

      mamba update bamcmp

  To create a new environment, run::

      mamba create --name myenvname bamcmp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamcmp:<tag>

   (see `bamcmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bamcmp| image:: https://img.shields.io/conda/dn/bioconda/bamcmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bamcmp
   :alt:   (downloads)
.. |docker_bamcmp| image:: https://quay.io/repository/biocontainers/bamcmp/status
   :target: https://quay.io/repository/biocontainers/bamcmp
.. _`bamcmp/tags`: https://quay.io/repository/biocontainers/bamcmp?tab=tags


.. raw:: html

    <script>
        var package = "bamcmp";
        var versions = ["2.2","2.2","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamcmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamcmp/README.html