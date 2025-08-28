:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taco'
.. highlight: bash

taco
====

.. conda:recipe:: taco
   :replaces_section_title:
   :noindex:

   A tool for multi\-sample transcriptome assembly from RNA\-Seq

   :homepage: https://github.com/tacorna/taco
   :license: MIT / MIT
   :recipe: /`taco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco/meta.yaml>`_

   


.. conda:package:: taco

   |downloads_taco| |docker_taco|

   :versions:
      
      

      ``0.7.3-2``,  ``0.7.3-0``,  ``v0.7.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends pyinstaller: 
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install taco

   and update with::

      mamba update taco

  To create a new environment, run::

      mamba create --name myenvname taco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taco:<tag>

   (see `taco/tags`_ for valid values for ``<tag>``)


.. |downloads_taco| image:: https://img.shields.io/conda/dn/bioconda/taco.svg?style=flat
   :target: https://anaconda.org/bioconda/taco
   :alt:   (downloads)
.. |docker_taco| image:: https://quay.io/repository/biocontainers/taco/status
   :target: https://quay.io/repository/biocontainers/taco
.. _`taco/tags`: https://quay.io/repository/biocontainers/taco?tab=tags


.. raw:: html

    <script>
        var package = "taco";
        var versions = ["0.7.3","0.7.3","v0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taco/README.html