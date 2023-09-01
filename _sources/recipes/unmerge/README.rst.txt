:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unmerge'
.. highlight: bash

unmerge
=======

.. conda:recipe:: unmerge
   :replaces_section_title:
   :noindex:

   Interlaced forward and reverse paired\-end reads to individual forward and reverse files

   :homepage: https://github.com/andvides/unmerge.git
   :license: GPL / GPL-3.0
   :recipe: /`unmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmerge/meta.yaml>`_

   


.. conda:package:: unmerge

   |downloads_unmerge| |docker_unmerge|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

      mamba install unmerge

   and update with::

      mamba update unmerge

  To create a new environment, run::

      mamba create --name myenvname unmerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unmerge:<tag>

   (see `unmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_unmerge| image:: https://img.shields.io/conda/dn/bioconda/unmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/unmerge
   :alt:   (downloads)
.. |docker_unmerge| image:: https://quay.io/repository/biocontainers/unmerge/status
   :target: https://quay.io/repository/biocontainers/unmerge
.. _`unmerge/tags`: https://quay.io/repository/biocontainers/unmerge?tab=tags


.. raw:: html

    <script>
        var package = "unmerge";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unmerge/README.html