:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncrf'
.. highlight: bash

ncrf
====

.. conda:recipe:: ncrf
   :replaces_section_title:
   :noindex:

   Noise\-Cancelling Repeat Finder\, Uncovering tandem repeats in error\-prone long\-read sequencing data.

   :homepage: https://github.com/makovalab-psu/NoiseCancellingRepeatFinder
   :license: MIT
   :recipe: /`ncrf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf/meta.yaml>`_

   


.. conda:package:: ncrf

   |downloads_ncrf| |docker_ncrf|

   :versions:
      
      

      ``1.01.02-6``,  ``1.01.02-5``,  ``1.01.02-4``,  ``1.01.02-3``,  ``1.01.02-2``,  ``1.01.02-1``,  ``1.01.02-0``,  ``1.00.06-0``,  ``1.0.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends python: ``<3``
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

      mamba install ncrf

   and update with::

      mamba update ncrf

  To create a new environment, run::

      mamba create --name myenvname ncrf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncrf:<tag>

   (see `ncrf/tags`_ for valid values for ``<tag>``)


.. |downloads_ncrf| image:: https://img.shields.io/conda/dn/bioconda/ncrf.svg?style=flat
   :target: https://anaconda.org/bioconda/ncrf
   :alt:   (downloads)
.. |docker_ncrf| image:: https://quay.io/repository/biocontainers/ncrf/status
   :target: https://quay.io/repository/biocontainers/ncrf
.. _`ncrf/tags`: https://quay.io/repository/biocontainers/ncrf?tab=tags


.. raw:: html

    <script>
        var package = "ncrf";
        var versions = ["1.01.02","1.01.02","1.01.02","1.01.02","1.01.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncrf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncrf/README.html