:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbstarphase'
.. highlight: bash

pbstarphase
===========

.. conda:recipe:: pbstarphase
   :replaces_section_title:
   :noindex:

   A phase\-aware pharmacogenomic diplotyper for PacBio sequencing data

   :homepage: https://github.com/PacificBiosciences/pb-StarPhase
   :license: BSD-3-Clause-Clear
   :recipe: /`pbstarphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbstarphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbstarphase/meta.yaml>`_

   


.. conda:package:: pbstarphase

   |downloads_pbstarphase| |docker_pbstarphase|

   :versions:
      
      

      ``0.7.3-0``,  ``0.7.2-0``

      

   
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

      mamba install pbstarphase

   and update with::

      mamba update pbstarphase

  To create a new environment, run::

      mamba create --name myenvname pbstarphase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbstarphase:<tag>

   (see `pbstarphase/tags`_ for valid values for ``<tag>``)


.. |downloads_pbstarphase| image:: https://img.shields.io/conda/dn/bioconda/pbstarphase.svg?style=flat
   :target: https://anaconda.org/bioconda/pbstarphase
   :alt:   (downloads)
.. |docker_pbstarphase| image:: https://quay.io/repository/biocontainers/pbstarphase/status
   :target: https://quay.io/repository/biocontainers/pbstarphase
.. _`pbstarphase/tags`: https://quay.io/repository/biocontainers/pbstarphase?tab=tags


.. raw:: html

    <script>
        var package = "pbstarphase";
        var versions = ["0.7.3","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbstarphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbstarphase/README.html