:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'odose'
.. highlight: bash

odose
=====

.. conda:recipe:: odose
   :replaces_section_title:
   :noindex:

   Ortholog Direction of Selection Engine.

   :homepage: https://github.com/ODoSE/odose.nl
   :license: MIT
   :recipe: /`odose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odose/meta.yaml>`_

   


.. conda:package:: odose

   |downloads_odose| |docker_odose|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: ``>=1.64``
   :depends matplotlib: ``>=1.4.2``
   :depends mysql-connector-python: 
   :depends numpy: ``>=1.9.1``
   :depends poster: ``>=0.8.1``
   :depends python: ``2.7*``
   :depends rpy2: ``>=2.8.5``
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

      mamba install odose

   and update with::

      mamba update odose

  To create a new environment, run::

      mamba create --name myenvname odose

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/odose:<tag>

   (see `odose/tags`_ for valid values for ``<tag>``)


.. |downloads_odose| image:: https://img.shields.io/conda/dn/bioconda/odose.svg?style=flat
   :target: https://anaconda.org/bioconda/odose
   :alt:   (downloads)
.. |docker_odose| image:: https://quay.io/repository/biocontainers/odose/status
   :target: https://quay.io/repository/biocontainers/odose
.. _`odose/tags`: https://quay.io/repository/biocontainers/odose?tab=tags


.. raw:: html

    <script>
        var package = "odose";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odose/README.html