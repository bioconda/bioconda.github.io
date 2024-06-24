:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unikmer'
.. highlight: bash

unikmer
=======

.. conda:recipe:: unikmer
   :replaces_section_title:
   :noindex:

   A versatile toolkit for k\-mers with taxonomic information

   :homepage: https://github.com/shenwei356/unikmer
   :license: MIT
   :recipe: /`unikmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikmer/meta.yaml>`_

   


.. conda:package:: unikmer

   |downloads_unikmer| |docker_unikmer|

   :versions:
      
      

      ``0.20.0-0``,  ``0.19.1-0``,  ``0.19.0-0``

      

   
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

      mamba install unikmer

   and update with::

      mamba update unikmer

  To create a new environment, run::

      mamba create --name myenvname unikmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unikmer:<tag>

   (see `unikmer/tags`_ for valid values for ``<tag>``)


.. |downloads_unikmer| image:: https://img.shields.io/conda/dn/bioconda/unikmer.svg?style=flat
   :target: https://anaconda.org/bioconda/unikmer
   :alt:   (downloads)
.. |docker_unikmer| image:: https://quay.io/repository/biocontainers/unikmer/status
   :target: https://quay.io/repository/biocontainers/unikmer
.. _`unikmer/tags`: https://quay.io/repository/biocontainers/unikmer?tab=tags


.. raw:: html

    <script>
        var package = "unikmer";
        var versions = ["0.20.0","0.19.1","0.19.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unikmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unikmer/README.html