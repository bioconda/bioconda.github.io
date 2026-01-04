:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'padloc'
.. highlight: bash

padloc
======

.. conda:recipe:: padloc
   :replaces_section_title:
   :noindex:

   Locate antiviral defence systems in prokaryotic genomes

   :homepage: https://github.com/padlocbio/padloc
   :license: MIT
   :recipe: /`padloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/padloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/padloc/meta.yaml>`_
   :links: biotools: :biotools:`padloc`

   


.. conda:package:: padloc

   |downloads_padloc| |docker_padloc|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends curl: 
   :depends grep: 
   :depends hmmer: ``>=3.3.2``
   :depends prodigal: ``>=2.6.3``
   :depends r-base: ``4.3.1``
   :depends r-getopt: ``1.20.3``
   :depends r-tidyverse: ``2.0.0``
   :depends r-yaml: ``2.3.7``
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

      mamba install padloc

   and update with::

      mamba update padloc

  To create a new environment, run::

      mamba create --name myenvname padloc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/padloc:<tag>

   (see `padloc/tags`_ for valid values for ``<tag>``)


.. |downloads_padloc| image:: https://img.shields.io/conda/dn/bioconda/padloc.svg?style=flat
   :target: https://anaconda.org/bioconda/padloc
   :alt:   (downloads)
.. |docker_padloc| image:: https://quay.io/repository/biocontainers/padloc/status
   :target: https://quay.io/repository/biocontainers/padloc
.. _`padloc/tags`: https://quay.io/repository/biocontainers/padloc?tab=tags


.. raw:: html

    <script>
        var package = "padloc";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/padloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/padloc/README.html