:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gloome'
.. highlight: bash

gloome
======

.. conda:recipe:: gloome
   :replaces_section_title:
   :noindex:

   GLOOME is a program that analyzes the evolution of phyletic patterns within the likelihood framework.

   :homepage: https://gloome.tau.ac.il/
   :license: GNU GENERAL PUBLIC LICENSE v3 (see https://gloome.tau.ac.il/source.php)
   :recipe: /`gloome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome/meta.yaml>`_
   :links: biotools: :biotools:`gloome`

   


.. conda:package:: gloome

   |downloads_gloome| |docker_gloome|

   :versions:
      
      

      ``VR01.266-3``,  ``VR01.266-2``,  ``VR01.266-1``,  ``VR01.266-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gloome

   and update with::

      mamba update gloome

  To create a new environment, run::

      mamba create --name myenvname gloome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gloome:<tag>

   (see `gloome/tags`_ for valid values for ``<tag>``)


.. |downloads_gloome| image:: https://img.shields.io/conda/dn/bioconda/gloome.svg?style=flat
   :target: https://anaconda.org/bioconda/gloome
   :alt:   (downloads)
.. |docker_gloome| image:: https://quay.io/repository/biocontainers/gloome/status
   :target: https://quay.io/repository/biocontainers/gloome
.. _`gloome/tags`: https://quay.io/repository/biocontainers/gloome?tab=tags


.. raw:: html

    <script>
        var package = "gloome";
        var versions = ["VR01.266","VR01.266","VR01.266","VR01.266"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gloome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gloome/README.html