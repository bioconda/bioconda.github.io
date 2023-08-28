:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpolo'
.. highlight: bash

vpolo
=====

.. conda:recipe:: vpolo
   :replaces_section_title:
   :noindex:

   Support package for Alevin tools

   :homepage: https://github.com/k3yavi/vpolo
   :license: GPL3
   :recipe: /`vpolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpolo/meta.yaml>`_

   


.. conda:package:: vpolo

   |downloads_vpolo| |docker_vpolo|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vpolo

   and update with::

      mamba update vpolo

  To create a new environment, run::

      mamba create --name myenvname vpolo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vpolo:<tag>

   (see `vpolo/tags`_ for valid values for ``<tag>``)


.. |downloads_vpolo| image:: https://img.shields.io/conda/dn/bioconda/vpolo.svg?style=flat
   :target: https://anaconda.org/bioconda/vpolo
   :alt:   (downloads)
.. |docker_vpolo| image:: https://quay.io/repository/biocontainers/vpolo/status
   :target: https://quay.io/repository/biocontainers/vpolo
.. _`vpolo/tags`: https://quay.io/repository/biocontainers/vpolo?tab=tags


.. raw:: html

    <script>
        var package = "vpolo";
        var versions = ["0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpolo/README.html