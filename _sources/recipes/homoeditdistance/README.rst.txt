:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homoeditdistance'
.. highlight: bash

homoeditdistance
================

.. conda:recipe:: homoeditdistance
   :replaces_section_title:
   :noindex:

   An implementation of the homo\-edit distance algorithm.

   :homepage: https://github.com/AlBi-HHU/homo-edit-distance
   :license: MIT
   :recipe: /`homoeditdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance/meta.yaml>`_

   A homo\-insertion is an insertion of a string of equal characters\, which we also call a block\, into another string. A homo\-deletion is the inverse operation\, that is\, the deletion of such a block. We consider the following problem\: Given two strings\, what is the minimum number of homo\-insertions or homo\-deletions needed to convert one into the other\? We refer to this number as the homo\-edit distance.


.. conda:package:: homoeditdistance

   |downloads_homoeditdistance| |docker_homoeditdistance|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install homoeditdistance

   and update with::

      mamba update homoeditdistance

  To create a new environment, run::

      mamba create --name myenvname homoeditdistance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/homoeditdistance:<tag>

   (see `homoeditdistance/tags`_ for valid values for ``<tag>``)


.. |downloads_homoeditdistance| image:: https://img.shields.io/conda/dn/bioconda/homoeditdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/homoeditdistance
   :alt:   (downloads)
.. |docker_homoeditdistance| image:: https://quay.io/repository/biocontainers/homoeditdistance/status
   :target: https://quay.io/repository/biocontainers/homoeditdistance
.. _`homoeditdistance/tags`: https://quay.io/repository/biocontainers/homoeditdistance?tab=tags


.. raw:: html

    <script>
        var package = "homoeditdistance";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homoeditdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homoeditdistance/README.html