:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'super_distance'
.. highlight: bash

super_distance
==============

.. conda:recipe:: super_distance
   :replaces_section_title:
   :noindex:

   Supertree method with distances

   :homepage: https://github.com/quadram-institute-bioscience/super_distance
   :license: GPLv3
   :recipe: /`super_distance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super_distance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super_distance/meta.yaml>`_
   :links: biotools: :biotools:`super_distance`

   


.. conda:package:: super_distance

   |downloads_super_distance| |docker_super_distance|

   :versions:
      
      

      ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install super_distance

   and update with::

      mamba update super_distance

  To create a new environment, run::

      mamba create --name myenvname super_distance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/super_distance:<tag>

   (see `super_distance/tags`_ for valid values for ``<tag>``)


.. |downloads_super_distance| image:: https://img.shields.io/conda/dn/bioconda/super_distance.svg?style=flat
   :target: https://anaconda.org/bioconda/super_distance
   :alt:   (downloads)
.. |docker_super_distance| image:: https://quay.io/repository/biocontainers/super_distance/status
   :target: https://quay.io/repository/biocontainers/super_distance
.. _`super_distance/tags`: https://quay.io/repository/biocontainers/super_distance?tab=tags


.. raw:: html

    <script>
        var package = "super_distance";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super_distance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super_distance/README.html