:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'norns'
.. highlight: bash

norns
=====

.. conda:recipe:: norns
   :replaces_section_title:
   :noindex:

   Simple yaml\-based config module

   :homepage: https://github.com/simonvh/norns
   :license: MIT / MIT License
   :recipe: /`norns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns/meta.yaml>`_

   


.. conda:package:: norns

   |downloads_norns| |docker_norns|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends appdirs: 
   :depends nose: 
   :depends python: 
   :depends pyyaml: 
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

      mamba install norns

   and update with::

      mamba update norns

  To create a new environment, run::

      mamba create --name myenvname norns

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/norns:<tag>

   (see `norns/tags`_ for valid values for ``<tag>``)


.. |downloads_norns| image:: https://img.shields.io/conda/dn/bioconda/norns.svg?style=flat
   :target: https://anaconda.org/bioconda/norns
   :alt:   (downloads)
.. |docker_norns| image:: https://quay.io/repository/biocontainers/norns/status
   :target: https://quay.io/repository/biocontainers/norns
.. _`norns/tags`: https://quay.io/repository/biocontainers/norns?tab=tags


.. raw:: html

    <script>
        var package = "norns";
        var versions = ["0.1.6","0.1.5","0.1.5","0.1.4","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/norns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/norns/README.html