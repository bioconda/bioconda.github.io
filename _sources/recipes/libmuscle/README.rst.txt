:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmuscle'
.. highlight: bash

libmuscle
=========

.. conda:recipe:: libmuscle
   :replaces_section_title:
   :noindex:

   libMuscle header files.

   :homepage: http://darlinglab.org/mauve/
   :license: GPLv2
   :recipe: /`libmuscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmuscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmuscle/meta.yaml>`_

   


.. conda:package:: libmuscle

   |downloads_libmuscle| |docker_libmuscle|

   :versions:
      
      

      ``3.7-1``,  ``3.7-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install libmuscle

   and update with::

      mamba update libmuscle

  To create a new environment, run::

      mamba create --name myenvname libmuscle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libmuscle:<tag>

   (see `libmuscle/tags`_ for valid values for ``<tag>``)


.. |downloads_libmuscle| image:: https://img.shields.io/conda/dn/bioconda/libmuscle.svg?style=flat
   :target: https://anaconda.org/bioconda/libmuscle
   :alt:   (downloads)
.. |docker_libmuscle| image:: https://quay.io/repository/biocontainers/libmuscle/status
   :target: https://quay.io/repository/biocontainers/libmuscle
.. _`libmuscle/tags`: https://quay.io/repository/biocontainers/libmuscle?tab=tags


.. raw:: html

    <script>
        var package = "libmuscle";
        var versions = ["3.7","3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmuscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmuscle/README.html