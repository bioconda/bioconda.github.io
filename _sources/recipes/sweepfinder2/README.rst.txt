:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sweepfinder2'
.. highlight: bash

sweepfinder2
============

.. conda:recipe:: sweepfinder2
   :replaces_section_title:
   :noindex:

   The BWA read mapper.

   :homepage: http://www.personal.psu.edu/mxd60/sf2.html
   :license: Unknown
   :recipe: /`sweepfinder2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sweepfinder2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sweepfinder2/meta.yaml>`_

   


.. conda:package:: sweepfinder2

   |downloads_sweepfinder2| |docker_sweepfinder2|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
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

      mamba install sweepfinder2

   and update with::

      mamba update sweepfinder2

  To create a new environment, run::

      mamba create --name myenvname sweepfinder2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sweepfinder2:<tag>

   (see `sweepfinder2/tags`_ for valid values for ``<tag>``)


.. |downloads_sweepfinder2| image:: https://img.shields.io/conda/dn/bioconda/sweepfinder2.svg?style=flat
   :target: https://anaconda.org/bioconda/sweepfinder2
   :alt:   (downloads)
.. |docker_sweepfinder2| image:: https://quay.io/repository/biocontainers/sweepfinder2/status
   :target: https://quay.io/repository/biocontainers/sweepfinder2
.. _`sweepfinder2/tags`: https://quay.io/repository/biocontainers/sweepfinder2?tab=tags


.. raw:: html

    <script>
        var package = "sweepfinder2";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sweepfinder2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sweepfinder2/README.html