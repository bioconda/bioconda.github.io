:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naf'
.. highlight: bash

naf
===

.. conda:recipe:: naf
   :replaces_section_title:
   :noindex:

   Compressed binary file format for DNA\/RNA\/protein sequence data

   :homepage: https://github.com/KirillKryukov/naf
   :license: zlib
   :recipe: /`naf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naf/meta.yaml>`_

   


.. conda:package:: naf

   |downloads_naf| |docker_naf|

   :versions:
      
      

      ``1.3.0-5``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install naf

   and update with::

      mamba update naf

  To create a new environment, run::

      mamba create --name myenvname naf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/naf:<tag>

   (see `naf/tags`_ for valid values for ``<tag>``)


.. |downloads_naf| image:: https://img.shields.io/conda/dn/bioconda/naf.svg?style=flat
   :target: https://anaconda.org/bioconda/naf
   :alt:   (downloads)
.. |docker_naf| image:: https://quay.io/repository/biocontainers/naf/status
   :target: https://quay.io/repository/biocontainers/naf
.. _`naf/tags`: https://quay.io/repository/biocontainers/naf?tab=tags


.. raw:: html

    <script>
        var package = "naf";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naf/README.html