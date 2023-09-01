:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastremap-bio'
.. highlight: bash

fastremap-bio
=============

.. conda:recipe:: fastremap-bio
   :replaces_section_title:
   :noindex:

   FastRemap\, a C\+\+ tool for quickly remapping reads between genome assemblies based on the commonly used CrossMap tool.

   :homepage: https://github.com/CMU-SAFARI/FastRemap
   :license: MIT
   :recipe: /`fastremap-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastremap-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastremap-bio/meta.yaml>`_

   


.. conda:package:: fastremap-bio

   |downloads_fastremap-bio| |docker_fastremap-bio|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install fastremap-bio

   and update with::

      mamba update fastremap-bio

  To create a new environment, run::

      mamba create --name myenvname fastremap-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastremap-bio:<tag>

   (see `fastremap-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_fastremap-bio| image:: https://img.shields.io/conda/dn/bioconda/fastremap-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/fastremap-bio
   :alt:   (downloads)
.. |docker_fastremap-bio| image:: https://quay.io/repository/biocontainers/fastremap-bio/status
   :target: https://quay.io/repository/biocontainers/fastremap-bio
.. _`fastremap-bio/tags`: https://quay.io/repository/biocontainers/fastremap-bio?tab=tags


.. raw:: html

    <script>
        var package = "fastremap-bio";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastremap-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastremap-bio/README.html