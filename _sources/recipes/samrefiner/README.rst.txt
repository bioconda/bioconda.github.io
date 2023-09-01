:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samrefiner'
.. highlight: bash

samrefiner
==========

.. conda:recipe:: samrefiner
   :replaces_section_title:
   :noindex:

   A program for gathering variant information from a SAM formated files

   :homepage: https://github.com/degregory/SAM_Refiner
   :license: GPL / GPLv3
   :recipe: /`samrefiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samrefiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samrefiner/meta.yaml>`_

   


.. conda:package:: samrefiner

   |downloads_samrefiner| |docker_samrefiner|

   :versions:
      
      

      ``1.4-0``,  ``1.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install samrefiner

   and update with::

      mamba update samrefiner

  To create a new environment, run::

      mamba create --name myenvname samrefiner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samrefiner:<tag>

   (see `samrefiner/tags`_ for valid values for ``<tag>``)


.. |downloads_samrefiner| image:: https://img.shields.io/conda/dn/bioconda/samrefiner.svg?style=flat
   :target: https://anaconda.org/bioconda/samrefiner
   :alt:   (downloads)
.. |docker_samrefiner| image:: https://quay.io/repository/biocontainers/samrefiner/status
   :target: https://quay.io/repository/biocontainers/samrefiner
.. _`samrefiner/tags`: https://quay.io/repository/biocontainers/samrefiner?tab=tags


.. raw:: html

    <script>
        var package = "samrefiner";
        var versions = ["1.4","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samrefiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samrefiner/README.html