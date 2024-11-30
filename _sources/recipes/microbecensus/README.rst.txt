:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microbecensus'
.. highlight: bash

microbecensus
=============

.. conda:recipe:: microbecensus
   :replaces_section_title:
   :noindex:

   A command\-line tool for estimating average genome size from shotgun sequence data

   :homepage: https://github.com/snayfach/MicrobeCensus
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`microbecensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus/meta.yaml>`_

   


.. conda:package:: microbecensus

   |downloads_microbecensus| |docker_microbecensus|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: ``>=3.6``
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

      mamba install microbecensus

   and update with::

      mamba update microbecensus

  To create a new environment, run::

      mamba create --name myenvname microbecensus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microbecensus:<tag>

   (see `microbecensus/tags`_ for valid values for ``<tag>``)


.. |downloads_microbecensus| image:: https://img.shields.io/conda/dn/bioconda/microbecensus.svg?style=flat
   :target: https://anaconda.org/bioconda/microbecensus
   :alt:   (downloads)
.. |docker_microbecensus| image:: https://quay.io/repository/biocontainers/microbecensus/status
   :target: https://quay.io/repository/biocontainers/microbecensus
.. _`microbecensus/tags`: https://quay.io/repository/biocontainers/microbecensus?tab=tags


.. raw:: html

    <script>
        var package = "microbecensus";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microbecensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microbecensus/README.html