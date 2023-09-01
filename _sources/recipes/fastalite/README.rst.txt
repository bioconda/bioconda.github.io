:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastalite'
.. highlight: bash

fastalite
=========

.. conda:recipe:: fastalite
   :replaces_section_title:
   :noindex:

   Simplest possible fasta parser

   :homepage: https://github.com/nhoffman/fastalite
   :license: MIT / MIT
   :recipe: /`fastalite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastalite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastalite/meta.yaml>`_

   


.. conda:package:: fastalite

   |downloads_fastalite| |docker_fastalite|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3-0``

      

   
   :depends python: 
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

      mamba install fastalite

   and update with::

      mamba update fastalite

  To create a new environment, run::

      mamba create --name myenvname fastalite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastalite:<tag>

   (see `fastalite/tags`_ for valid values for ``<tag>``)


.. |downloads_fastalite| image:: https://img.shields.io/conda/dn/bioconda/fastalite.svg?style=flat
   :target: https://anaconda.org/bioconda/fastalite
   :alt:   (downloads)
.. |docker_fastalite| image:: https://quay.io/repository/biocontainers/fastalite/status
   :target: https://quay.io/repository/biocontainers/fastalite
.. _`fastalite/tags`: https://quay.io/repository/biocontainers/fastalite?tab=tags


.. raw:: html

    <script>
        var package = "fastalite";
        var versions = ["0.4.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastalite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastalite/README.html