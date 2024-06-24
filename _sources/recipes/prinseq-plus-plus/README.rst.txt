:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prinseq-plus-plus'
.. highlight: bash

prinseq-plus-plus
=================

.. conda:recipe:: prinseq-plus-plus
   :replaces_section_title:
   :noindex:

   PRINSEQ\+\+ \- Multi\-threaded C\+\+ sequence cleaning

   :homepage: https://github.com/Adrian-Cantu/PRINSEQ-plus-plus
   :license: GNU General Public License v2.0
   :recipe: /`prinseq-plus-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus/meta.yaml>`_

   


.. conda:package:: prinseq-plus-plus

   |downloads_prinseq-plus-plus| |docker_prinseq-plus-plus|

   :versions:
      
      

      ``1.2.4-5``,  ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends pthread-stubs: 
   :depends zlib: 
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

      mamba install prinseq-plus-plus

   and update with::

      mamba update prinseq-plus-plus

  To create a new environment, run::

      mamba create --name myenvname prinseq-plus-plus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prinseq-plus-plus:<tag>

   (see `prinseq-plus-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_prinseq-plus-plus| image:: https://img.shields.io/conda/dn/bioconda/prinseq-plus-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/prinseq-plus-plus
   :alt:   (downloads)
.. |docker_prinseq-plus-plus| image:: https://quay.io/repository/biocontainers/prinseq-plus-plus/status
   :target: https://quay.io/repository/biocontainers/prinseq-plus-plus
.. _`prinseq-plus-plus/tags`: https://quay.io/repository/biocontainers/prinseq-plus-plus?tab=tags


.. raw:: html

    <script>
        var package = "prinseq-plus-plus";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prinseq-plus-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prinseq-plus-plus/README.html