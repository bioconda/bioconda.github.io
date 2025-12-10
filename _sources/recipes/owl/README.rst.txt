:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'owl'
.. highlight: bash

owl
===

.. conda:recipe:: owl
   :replaces_section_title:
   :noindex:

   Microsatellite analysis for HiFi data

   :homepage: https://github.com/PacificBiosciences/owl
   :license: BSD-3-Clause-Clear
   :recipe: /`owl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/owl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/owl/meta.yaml>`_

   


.. conda:package:: owl

   |downloads_owl| |docker_owl|

   :versions:
      
      

      ``0.4.0-0``

      

   
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

      mamba install owl

   and update with::

      mamba update owl

  To create a new environment, run::

      mamba create --name myenvname owl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/owl:<tag>

   (see `owl/tags`_ for valid values for ``<tag>``)


.. |downloads_owl| image:: https://img.shields.io/conda/dn/bioconda/owl.svg?style=flat
   :target: https://anaconda.org/bioconda/owl
   :alt:   (downloads)
.. |docker_owl| image:: https://quay.io/repository/biocontainers/owl/status
   :target: https://quay.io/repository/biocontainers/owl
.. _`owl/tags`: https://quay.io/repository/biocontainers/owl?tab=tags


.. raw:: html

    <script>
        var package = "owl";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/owl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/owl/README.html