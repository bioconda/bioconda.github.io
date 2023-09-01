:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stellar'
.. highlight: bash

stellar
=======

.. conda:recipe:: stellar
   :replaces_section_title:
   :noindex:

   STELLAR is a tool for finding pairwise local alignments between long genomic or very many short sequences.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/stellar/README
   :license: LGPLv3+
   :recipe: /`stellar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stellar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stellar/meta.yaml>`_

   


.. conda:package:: stellar

   |downloads_stellar| |docker_stellar|

   :versions:
      
      

      ``1.4.9-3``,  ``1.4.9-2``,  ``1.4.9-1``,  ``1.4.9-0``

      

   
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

      mamba install stellar

   and update with::

      mamba update stellar

  To create a new environment, run::

      mamba create --name myenvname stellar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stellar:<tag>

   (see `stellar/tags`_ for valid values for ``<tag>``)


.. |downloads_stellar| image:: https://img.shields.io/conda/dn/bioconda/stellar.svg?style=flat
   :target: https://anaconda.org/bioconda/stellar
   :alt:   (downloads)
.. |docker_stellar| image:: https://quay.io/repository/biocontainers/stellar/status
   :target: https://quay.io/repository/biocontainers/stellar
.. _`stellar/tags`: https://quay.io/repository/biocontainers/stellar?tab=tags


.. raw:: html

    <script>
        var package = "stellar";
        var versions = ["1.4.9","1.4.9","1.4.9","1.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stellar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stellar/README.html