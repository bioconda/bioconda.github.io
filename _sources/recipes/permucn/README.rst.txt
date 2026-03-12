:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'permucn'
.. highlight: bash

permucn
=======

.. conda:recipe:: permucn
   :replaces_section_title:
   :noindex:

   Permutation\-based test for copy\-number and binary trait association.

   :homepage: https://github.com/mkrg01/permucn
   :documentation: https://github.com/mkrg01/permucn/wiki
   
   :license: MIT
   :recipe: /`permucn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/permucn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/permucn/meta.yaml>`_

   


.. conda:package:: permucn

   |downloads_permucn| |docker_permucn|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.12``
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

      mamba install permucn

   and update with::

      mamba update permucn

  To create a new environment, run::

      mamba create --name myenvname permucn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/permucn:<tag>

   (see `permucn/tags`_ for valid values for ``<tag>``)


.. |downloads_permucn| image:: https://img.shields.io/conda/dn/bioconda/permucn.svg?style=flat
   :target: https://anaconda.org/bioconda/permucn
   :alt:   (downloads)
.. |docker_permucn| image:: https://quay.io/repository/biocontainers/permucn/status
   :target: https://quay.io/repository/biocontainers/permucn
.. _`permucn/tags`: https://quay.io/repository/biocontainers/permucn?tab=tags


.. raw:: html

    <script>
        var package = "permucn";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/permucn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/permucn/README.html