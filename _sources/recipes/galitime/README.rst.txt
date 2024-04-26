:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galitime'
.. highlight: bash

galitime
========

.. conda:recipe:: galitime
   :replaces_section_title:
   :noindex:

   benchmarking of scientific computaional experiments

   :homepage: https://github.com/karel-brinda/galitime
   :license: MIT / MIT
   :recipe: /`galitime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galitime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galitime/meta.yaml>`_

   


.. conda:package:: galitime

   |downloads_galitime| |docker_galitime|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3``
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

      mamba install galitime

   and update with::

      mamba update galitime

  To create a new environment, run::

      mamba create --name myenvname galitime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galitime:<tag>

   (see `galitime/tags`_ for valid values for ``<tag>``)


.. |downloads_galitime| image:: https://img.shields.io/conda/dn/bioconda/galitime.svg?style=flat
   :target: https://anaconda.org/bioconda/galitime
   :alt:   (downloads)
.. |docker_galitime| image:: https://quay.io/repository/biocontainers/galitime/status
   :target: https://quay.io/repository/biocontainers/galitime
.. _`galitime/tags`: https://quay.io/repository/biocontainers/galitime?tab=tags


.. raw:: html

    <script>
        var package = "galitime";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galitime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galitime/README.html