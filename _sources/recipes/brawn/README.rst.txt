:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brawn'
.. highlight: bash

brawn
=====

.. conda:recipe:: brawn
   :replaces_section_title:
   :noindex:

   A tool for handling repetitive insertions into sequence alignments.

   :homepage: https://github.com/SJShaw/brawn
   :license: GPL-3.0
   :recipe: /`brawn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brawn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brawn/meta.yaml>`_

   A python port of MUSCLE\'s profile\-profile mode for aligning sequences.


.. conda:package:: brawn

   |downloads_brawn| |docker_brawn|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends python: ``>=3.8``
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

      mamba install brawn

   and update with::

      mamba update brawn

  To create a new environment, run::

      mamba create --name myenvname brawn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/brawn:<tag>

   (see `brawn/tags`_ for valid values for ``<tag>``)


.. |downloads_brawn| image:: https://img.shields.io/conda/dn/bioconda/brawn.svg?style=flat
   :target: https://anaconda.org/bioconda/brawn
   :alt:   (downloads)
.. |docker_brawn| image:: https://quay.io/repository/biocontainers/brawn/status
   :target: https://quay.io/repository/biocontainers/brawn
.. _`brawn/tags`: https://quay.io/repository/biocontainers/brawn?tab=tags


.. raw:: html

    <script>
        var package = "brawn";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brawn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brawn/README.html