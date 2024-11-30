:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sprinkles'
.. highlight: bash

sprinkles
=========

.. conda:recipe:: sprinkles
   :replaces_section_title:
   :noindex:

   Plugins\! Easy\!

   :homepage: http://an9.org/w/SprinklesPy
   :license: MIT License
   :recipe: /`sprinkles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles/meta.yaml>`_

   


.. conda:package:: sprinkles

   |downloads_sprinkles| |docker_sprinkles|

   :versions:
      
      

      ``0.4.6-1``,  ``0.4.6-0``

      

   
   :depends python: ``2.7*``
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

      mamba install sprinkles

   and update with::

      mamba update sprinkles

  To create a new environment, run::

      mamba create --name myenvname sprinkles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sprinkles:<tag>

   (see `sprinkles/tags`_ for valid values for ``<tag>``)


.. |downloads_sprinkles| image:: https://img.shields.io/conda/dn/bioconda/sprinkles.svg?style=flat
   :target: https://anaconda.org/bioconda/sprinkles
   :alt:   (downloads)
.. |docker_sprinkles| image:: https://quay.io/repository/biocontainers/sprinkles/status
   :target: https://quay.io/repository/biocontainers/sprinkles
.. _`sprinkles/tags`: https://quay.io/repository/biocontainers/sprinkles?tab=tags


.. raw:: html

    <script>
        var package = "sprinkles";
        var versions = ["0.4.6","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sprinkles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sprinkles/README.html