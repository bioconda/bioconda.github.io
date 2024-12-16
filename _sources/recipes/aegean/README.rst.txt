:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aegean'
.. highlight: bash

aegean
======

.. conda:recipe:: aegean
   :replaces_section_title:
   :noindex:

   The AEGeAn Toolkit provides a bundle of software tools for evaluating gene structure annotations and genome organization. The software is implemented in C and Python.

   :homepage: https://github.com/BrendelGroup/AEGeAn
   :license: ISC License
   :recipe: /`aegean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean/meta.yaml>`_

   


.. conda:package:: aegean

   |downloads_aegean| |docker_aegean|

   :versions:
      
      

      ``0.16.0-5``,  ``0.16.0-4``,  ``0.16.0-3``,  ``0.16.0-2``,  ``0.16.0-1``,  ``0.16.0-0``

      

   
   :depends cairo: ``>=1.18.2,<2.0a0``
   :depends genometools-genometools: ``>=1.6.5,<2.0a0``
   :depends git: 
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pango: ``>=1.54.0,<2.0a0``
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

      mamba install aegean

   and update with::

      mamba update aegean

  To create a new environment, run::

      mamba create --name myenvname aegean

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aegean:<tag>

   (see `aegean/tags`_ for valid values for ``<tag>``)


.. |downloads_aegean| image:: https://img.shields.io/conda/dn/bioconda/aegean.svg?style=flat
   :target: https://anaconda.org/bioconda/aegean
   :alt:   (downloads)
.. |docker_aegean| image:: https://quay.io/repository/biocontainers/aegean/status
   :target: https://quay.io/repository/biocontainers/aegean
.. _`aegean/tags`: https://quay.io/repository/biocontainers/aegean?tab=tags


.. raw:: html

    <script>
        var package = "aegean";
        var versions = ["0.16.0","0.16.0","0.16.0","0.16.0","0.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aegean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aegean/README.html