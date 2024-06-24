:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpipe'
.. highlight: bash

bpipe
=====

.. conda:recipe:: bpipe
   :replaces_section_title:
   :noindex:

   Bpipe \- a tool for running and managing bioinformatics pipelines

   :homepage: http://docs.bpipe.org/
   :license: BSD-3-Clause
   :recipe: /`bpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts167`, biotools: :biotools:`bpipe`

   


.. conda:package:: bpipe

   |downloads_bpipe| |docker_bpipe|

   :versions:
      
      

      ``0.9.12-0``,  ``0.9.11-1``,  ``0.9.11-0``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9.9-0``,  ``0.9.9.8-0``,  ``0.9.9.7-0``,  ``0.9.9.2-0``

      

   
   :depends coreutils: 
   :depends openjdk: ``11.*``
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

      mamba install bpipe

   and update with::

      mamba update bpipe

  To create a new environment, run::

      mamba create --name myenvname bpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bpipe:<tag>

   (see `bpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bpipe| image:: https://img.shields.io/conda/dn/bioconda/bpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bpipe
   :alt:   (downloads)
.. |docker_bpipe| image:: https://quay.io/repository/biocontainers/bpipe/status
   :target: https://quay.io/repository/biocontainers/bpipe
.. _`bpipe/tags`: https://quay.io/repository/biocontainers/bpipe?tab=tags


.. raw:: html

    <script>
        var package = "bpipe";
        var versions = ["0.9.12","0.9.11","0.9.11","0.9.10","0.9.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpipe/README.html