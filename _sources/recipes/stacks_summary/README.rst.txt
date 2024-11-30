:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stacks_summary'
.. highlight: bash

stacks_summary
==============

.. conda:recipe:: stacks_summary
   :replaces_section_title:
   :noindex:

   Stacks reports generator

   :homepage: https://github.com/mariabernard/galaxy_wrappers
   :license: GPL / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`stacks_summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary/meta.yaml>`_

   


.. conda:package:: stacks_summary

   |downloads_stacks_summary| |docker_stacks_summary|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install stacks_summary

   and update with::

      mamba update stacks_summary

  To create a new environment, run::

      mamba create --name myenvname stacks_summary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stacks_summary:<tag>

   (see `stacks_summary/tags`_ for valid values for ``<tag>``)


.. |downloads_stacks_summary| image:: https://img.shields.io/conda/dn/bioconda/stacks_summary.svg?style=flat
   :target: https://anaconda.org/bioconda/stacks_summary
   :alt:   (downloads)
.. |docker_stacks_summary| image:: https://quay.io/repository/biocontainers/stacks_summary/status
   :target: https://quay.io/repository/biocontainers/stacks_summary
.. _`stacks_summary/tags`: https://quay.io/repository/biocontainers/stacks_summary?tab=tags


.. raw:: html

    <script>
        var package = "stacks_summary";
        var versions = ["1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stacks_summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stacks_summary/README.html