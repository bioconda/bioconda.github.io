:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'profile_dists'
.. highlight: bash

profile_dists
=============

.. conda:recipe:: profile_dists
   :replaces_section_title:
   :noindex:

   Profile Dists\: Rapid calcualtion of allele profile distances and distance base querying

   :homepage: https://pypi.org/project/profile-dists
   :developer docs: https://github.com/phac-nml/profile_dists/
   :license: Apache-2.0
   :recipe: /`profile_dists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/profile_dists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/profile_dists/meta.yaml>`_

   


.. conda:package:: profile_dists

   |downloads_profile_dists| |docker_profile_dists|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends fastparquet: ``>=2023.4.0``
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=2.0.2``
   :depends psutil: 
   :depends pyarrow: ``>=12.0.0``
   :depends pytables: ``>=3.8.0``
   :depends python: ``>=3.8,<3.12``
   :depends six: ``>=1.16.0``
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

      mamba install profile_dists

   and update with::

      mamba update profile_dists

  To create a new environment, run::

      mamba create --name myenvname profile_dists

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/profile_dists:<tag>

   (see `profile_dists/tags`_ for valid values for ``<tag>``)


.. |downloads_profile_dists| image:: https://img.shields.io/conda/dn/bioconda/profile_dists.svg?style=flat
   :target: https://anaconda.org/bioconda/profile_dists
   :alt:   (downloads)
.. |docker_profile_dists| image:: https://quay.io/repository/biocontainers/profile_dists/status
   :target: https://quay.io/repository/biocontainers/profile_dists
.. _`profile_dists/tags`: https://quay.io/repository/biocontainers/profile_dists?tab=tags


.. raw:: html

    <script>
        var package = "profile_dists";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/profile_dists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/profile_dists/README.html