:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fec'
.. highlight: bash

fec
===

.. conda:recipe:: fec
   :replaces_section_title:
   :noindex:

   An error correction tool

   :homepage: https://github.com/zhangjuncsu/Fec
   :license: MIT
   :recipe: /`fec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec/meta.yaml>`_

   


.. conda:package:: fec

   |downloads_fec| |docker_fec|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: ``>=2.17``
   :depends python: ``>=3.6``
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

      mamba install fec

   and update with::

      mamba update fec

  To create a new environment, run::

      mamba create --name myenvname fec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fec:<tag>

   (see `fec/tags`_ for valid values for ``<tag>``)


.. |downloads_fec| image:: https://img.shields.io/conda/dn/bioconda/fec.svg?style=flat
   :target: https://anaconda.org/bioconda/fec
   :alt:   (downloads)
.. |docker_fec| image:: https://quay.io/repository/biocontainers/fec/status
   :target: https://quay.io/repository/biocontainers/fec
.. _`fec/tags`: https://quay.io/repository/biocontainers/fec?tab=tags


.. raw:: html

    <script>
        var package = "fec";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fec/README.html