:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dascrubber'
.. highlight: bash

dascrubber
==========

.. conda:recipe:: dascrubber
   :replaces_section_title:
   :noindex:

   Alignment\-based Scrubbing pipeline

   :homepage: https://github.com/thegenemyers/DASCRUBBER
   :license: Custom
   :recipe: /`dascrubber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber/meta.yaml>`_

   


.. conda:package:: dascrubber

   |downloads_dascrubber| |docker_dascrubber|

   :versions:
      
      

      ``0.0.1a2-6``,  ``0.0.1a2-5``,  ``0.0.1a2-4``,  ``0.0.1a2-3``,  ``0.0.1a2-2``,  ``0.0.1a2-1``,  ``0.0.1a2-0``,  ``0.0.1a1-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install dascrubber

   and update with::

      mamba update dascrubber

  To create a new environment, run::

      mamba create --name myenvname dascrubber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dascrubber:<tag>

   (see `dascrubber/tags`_ for valid values for ``<tag>``)


.. |downloads_dascrubber| image:: https://img.shields.io/conda/dn/bioconda/dascrubber.svg?style=flat
   :target: https://anaconda.org/bioconda/dascrubber
   :alt:   (downloads)
.. |docker_dascrubber| image:: https://quay.io/repository/biocontainers/dascrubber/status
   :target: https://quay.io/repository/biocontainers/dascrubber
.. _`dascrubber/tags`: https://quay.io/repository/biocontainers/dascrubber?tab=tags


.. raw:: html

    <script>
        var package = "dascrubber";
        var versions = ["0.0.1a2","0.0.1a2","0.0.1a2","0.0.1a2","0.0.1a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dascrubber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dascrubber/README.html