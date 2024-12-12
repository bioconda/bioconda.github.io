:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irf'
.. highlight: bash

irf
===

.. conda:recipe:: irf
   :replaces_section_title:
   :noindex:

   Inverted Repeats Finder is a program that detects approximate inverted repeats.

   :homepage: https://github.com/Benson-Genomics-Lab/IRF
   :license: GNU Affero General Public License, Version 3.0
   :recipe: /`irf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irf/meta.yaml>`_

   


.. conda:package:: irf

   |downloads_irf| |docker_irf|

   :versions:
      
      

      ``3.08-1``,  ``3.08-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install irf

   and update with::

      mamba update irf

  To create a new environment, run::

      mamba create --name myenvname irf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irf:<tag>

   (see `irf/tags`_ for valid values for ``<tag>``)


.. |downloads_irf| image:: https://img.shields.io/conda/dn/bioconda/irf.svg?style=flat
   :target: https://anaconda.org/bioconda/irf
   :alt:   (downloads)
.. |docker_irf| image:: https://quay.io/repository/biocontainers/irf/status
   :target: https://quay.io/repository/biocontainers/irf
.. _`irf/tags`: https://quay.io/repository/biocontainers/irf?tab=tags


.. raw:: html

    <script>
        var package = "irf";
        var versions = ["3.08","3.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irf/README.html