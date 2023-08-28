:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reaper'
.. highlight: bash

reaper
======

.. conda:recipe:: reaper
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing\, trimming and filtering sequencing data.

   :homepage: https://www.ebi.ac.uk/~stijn/reaper/reaper.html
   :license: GPL3
   :recipe: /`reaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper/meta.yaml>`_

   


.. conda:package:: reaper

   |downloads_reaper| |docker_reaper|

   :versions:
      
      

      ``16.098-3``,  ``16.098-2``,  ``16.098-1``,  ``16.098-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install reaper

   and update with::

      mamba update reaper

  To create a new environment, run::

      mamba create --name myenvname reaper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reaper:<tag>

   (see `reaper/tags`_ for valid values for ``<tag>``)


.. |downloads_reaper| image:: https://img.shields.io/conda/dn/bioconda/reaper.svg?style=flat
   :target: https://anaconda.org/bioconda/reaper
   :alt:   (downloads)
.. |docker_reaper| image:: https://quay.io/repository/biocontainers/reaper/status
   :target: https://quay.io/repository/biocontainers/reaper
.. _`reaper/tags`: https://quay.io/repository/biocontainers/reaper?tab=tags


.. raw:: html

    <script>
        var package = "reaper";
        var versions = ["16.098","16.098","16.098","16.098"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reaper/README.html