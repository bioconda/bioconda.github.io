:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hotspot3d'
.. highlight: bash

hotspot3d
=========

.. conda:recipe:: hotspot3d
   :replaces_section_title:
   :noindex:

   This 3D proximity tool can be used to identify mutation hotspots from linear protein sequence and correlate the hotspots with known or potentially interacting domains\, mutations\, or drugs. Mutation\-mutation and mutation\-drug clusters can also be identified and viewed.

   :homepage: https://github.com/ding-lab/hotspot3d
   :license: GPL / GPLv3
   :recipe: /`hotspot3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d/meta.yaml>`_

   


.. conda:package:: hotspot3d

   |downloads_hotspot3d| |docker_hotspot3d|

   :versions:
      
      

      ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``0.6.0-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-archive-extract: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-simple: ``>=6.39``
   :depends perl-parallel-forkmanager: 
   :depends perl-test-most: 
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

      mamba install hotspot3d

   and update with::

      mamba update hotspot3d

  To create a new environment, run::

      mamba create --name myenvname hotspot3d

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hotspot3d:<tag>

   (see `hotspot3d/tags`_ for valid values for ``<tag>``)


.. |downloads_hotspot3d| image:: https://img.shields.io/conda/dn/bioconda/hotspot3d.svg?style=flat
   :target: https://anaconda.org/bioconda/hotspot3d
   :alt:   (downloads)
.. |docker_hotspot3d| image:: https://quay.io/repository/biocontainers/hotspot3d/status
   :target: https://quay.io/repository/biocontainers/hotspot3d
.. _`hotspot3d/tags`: https://quay.io/repository/biocontainers/hotspot3d?tab=tags


.. raw:: html

    <script>
        var package = "hotspot3d";
        var versions = ["1.8.2","1.8.2","1.8.2","1.8.2","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hotspot3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hotspot3d/README.html