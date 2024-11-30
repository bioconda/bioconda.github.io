:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan'
.. highlight: bash

seqan
=====

.. conda:recipe:: seqan
   :replaces_section_title:
   :noindex:

   SeqAn is an open source C\+\+ library of efficient algorithms and data structures for the analysis of sequences with the focus on biological data.

   :homepage: http://www.seqan.de/
   :license: BSD-3-Clause
   :recipe: /`seqan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan/meta.yaml>`_

   


.. conda:package:: seqan

   |downloads_seqan| |docker_seqan|

   :versions:
      
      

      ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
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

      mamba install seqan

   and update with::

      mamba update seqan

  To create a new environment, run::

      mamba create --name myenvname seqan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqan:<tag>

   (see `seqan/tags`_ for valid values for ``<tag>``)


.. |downloads_seqan| image:: https://img.shields.io/conda/dn/bioconda/seqan.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan
   :alt:   (downloads)
.. |docker_seqan| image:: https://quay.io/repository/biocontainers/seqan/status
   :target: https://quay.io/repository/biocontainers/seqan
.. _`seqan/tags`: https://quay.io/repository/biocontainers/seqan?tab=tags


.. raw:: html

    <script>
        var package = "seqan";
        var versions = ["2.4.0","2.4.0","2.4.0","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan/README.html