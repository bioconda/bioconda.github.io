:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recon'
.. highlight: bash

recon
=====

.. conda:recipe:: recon
   :replaces_section_title:
   :noindex:

   The RECON package performs de novo identification and classification of repeat sequence families from genomic sequences.

   :homepage: http://eddylab.org/software/recon/
   :license: GPL2
   :recipe: /`recon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon/meta.yaml>`_

   


.. conda:package:: recon

   |downloads_recon| |docker_recon|

   :versions:
      
      

      ``1.08-7``,  ``1.08-6``,  ``1.08-5``,  ``1.08-4``,  ``1.08-3``,  ``1.08-2``,  ``1.08-1``,  ``1.08-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install recon

   and update with::

      mamba update recon

  To create a new environment, run::

      mamba create --name myenvname recon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recon:<tag>

   (see `recon/tags`_ for valid values for ``<tag>``)


.. |downloads_recon| image:: https://img.shields.io/conda/dn/bioconda/recon.svg?style=flat
   :target: https://anaconda.org/bioconda/recon
   :alt:   (downloads)
.. |docker_recon| image:: https://quay.io/repository/biocontainers/recon/status
   :target: https://quay.io/repository/biocontainers/recon
.. _`recon/tags`: https://quay.io/repository/biocontainers/recon?tab=tags


.. raw:: html

    <script>
        var package = "recon";
        var versions = ["1.08","1.08","1.08","1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recon/README.html