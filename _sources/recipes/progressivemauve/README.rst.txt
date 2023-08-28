:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'progressivemauve'
.. highlight: bash

progressivemauve
================

.. conda:recipe:: progressivemauve
   :replaces_section_title:
   :noindex:

   progressiveMauve computes multiple genome alignment with gene gain\, loss and rearrangement

   :homepage: http://darlinglab.org/mauve/user-guide/progressivemauve.html
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`progressivemauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progressivemauve/meta.yaml>`_

   


.. conda:package:: progressivemauve

   |downloads_progressivemauve| |docker_progressivemauve|

   :versions:
      
      

      ``snapshot_2015_02_13-3``,  ``snapshot_2015_02_13-2``,  ``snapshot_2015_02_13-1``,  ``snapshot_2015_02_13-0``

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install progressivemauve

   and update with::

      mamba update progressivemauve

  To create a new environment, run::

      mamba create --name myenvname progressivemauve

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/progressivemauve:<tag>

   (see `progressivemauve/tags`_ for valid values for ``<tag>``)


.. |downloads_progressivemauve| image:: https://img.shields.io/conda/dn/bioconda/progressivemauve.svg?style=flat
   :target: https://anaconda.org/bioconda/progressivemauve
   :alt:   (downloads)
.. |docker_progressivemauve| image:: https://quay.io/repository/biocontainers/progressivemauve/status
   :target: https://quay.io/repository/biocontainers/progressivemauve
.. _`progressivemauve/tags`: https://quay.io/repository/biocontainers/progressivemauve?tab=tags


.. raw:: html

    <script>
        var package = "progressivemauve";
        var versions = ["snapshot_2015_02_13","snapshot_2015_02_13","snapshot_2015_02_13","snapshot_2015_02_13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/progressivemauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/progressivemauve/README.html