:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aligncov'
.. highlight: bash

aligncov
========

.. conda:recipe:: aligncov
   :replaces_section_title:
   :noindex:

   Obtain tidy alignment coverage info from sorted BAM files

   :homepage: https://github.com/pcrxn/aligncov
   :license: MIT / MIT
   :recipe: /`aligncov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aligncov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aligncov/meta.yaml>`_

   


.. conda:package:: aligncov

   |downloads_aligncov| |docker_aligncov|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends pandas: ``>=1.0.0``
   :depends python: 
   :depends samtools: ``>=1.15``
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

      mamba install aligncov

   and update with::

      mamba update aligncov

  To create a new environment, run::

      mamba create --name myenvname aligncov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aligncov:<tag>

   (see `aligncov/tags`_ for valid values for ``<tag>``)


.. |downloads_aligncov| image:: https://img.shields.io/conda/dn/bioconda/aligncov.svg?style=flat
   :target: https://anaconda.org/bioconda/aligncov
   :alt:   (downloads)
.. |docker_aligncov| image:: https://quay.io/repository/biocontainers/aligncov/status
   :target: https://quay.io/repository/biocontainers/aligncov
.. _`aligncov/tags`: https://quay.io/repository/biocontainers/aligncov?tab=tags


.. raw:: html

    <script>
        var package = "aligncov";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aligncov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aligncov/README.html