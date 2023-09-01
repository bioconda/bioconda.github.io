:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squeakr'
.. highlight: bash

squeakr
=======

.. conda:recipe:: squeakr
   :replaces_section_title:
   :noindex:

   An Exact and Approximate k\-mer Counting System

   :homepage: https://github.com/splatlab/squeakr
   :license: BSD / BSD-3-Clause
   :recipe: /`squeakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr/meta.yaml>`_

   


.. conda:package:: squeakr

   |downloads_squeakr| |docker_squeakr|

   :versions:
      
      

      ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends boost: ``>=1.78.0,<1.78.1.0a0``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends pthread-stubs: 
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

      mamba install squeakr

   and update with::

      mamba update squeakr

  To create a new environment, run::

      mamba create --name myenvname squeakr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squeakr:<tag>

   (see `squeakr/tags`_ for valid values for ``<tag>``)


.. |downloads_squeakr| image:: https://img.shields.io/conda/dn/bioconda/squeakr.svg?style=flat
   :target: https://anaconda.org/bioconda/squeakr
   :alt:   (downloads)
.. |docker_squeakr| image:: https://quay.io/repository/biocontainers/squeakr/status
   :target: https://quay.io/repository/biocontainers/squeakr
.. _`squeakr/tags`: https://quay.io/repository/biocontainers/squeakr?tab=tags


.. raw:: html

    <script>
        var package = "squeakr";
        var versions = ["0.6","0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeakr/README.html