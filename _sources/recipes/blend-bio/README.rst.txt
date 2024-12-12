:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blend-bio'
.. highlight: bash

blend-bio
=========

.. conda:recipe:: blend-bio
   :replaces_section_title:
   :noindex:

   BLEND is a Fast\, Memory\-Efficient\, and Accurate Mechanism to Find Fuzzy Seed Matches in Genome Analysis

   :homepage: https://github.com/CMU-SAFARI/BLEND
   :license: MIT
   :recipe: /`blend-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio/meta.yaml>`_

   


.. conda:package:: blend-bio

   |downloads_blend-bio| |docker_blend-bio|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install blend-bio

   and update with::

      mamba update blend-bio

  To create a new environment, run::

      mamba create --name myenvname blend-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blend-bio:<tag>

   (see `blend-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_blend-bio| image:: https://img.shields.io/conda/dn/bioconda/blend-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/blend-bio
   :alt:   (downloads)
.. |docker_blend-bio| image:: https://quay.io/repository/biocontainers/blend-bio/status
   :target: https://quay.io/repository/biocontainers/blend-bio
.. _`blend-bio/tags`: https://quay.io/repository/biocontainers/blend-bio?tab=tags


.. raw:: html

    <script>
        var package = "blend-bio";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blend-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blend-bio/README.html