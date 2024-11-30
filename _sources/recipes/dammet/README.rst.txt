:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dammet'
.. highlight: bash

dammet
======

.. conda:recipe:: dammet
   :replaces_section_title:
   :noindex:

   Software to reconstruct methylomes from HTS data from ancient specimen

   :homepage: https://github.com/KHanghoj/DamMet
   :license: MIT license
   :recipe: /`dammet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammet/meta.yaml>`_

   


.. conda:package:: dammet

   |downloads_dammet| |docker_dammet|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.1a-6``,  ``1.0.1a-5``,  ``1.0.1a-4``,  ``1.0.1a-3``,  ``1.0.1a-2``,  ``1.0.1a-1``,  ``1.0.1a-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=7.82.0,<8.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openssl: ``>=1.1.1n,<1.1.2a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install dammet

   and update with::

      mamba update dammet

  To create a new environment, run::

      mamba create --name myenvname dammet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dammet:<tag>

   (see `dammet/tags`_ for valid values for ``<tag>``)


.. |downloads_dammet| image:: https://img.shields.io/conda/dn/bioconda/dammet.svg?style=flat
   :target: https://anaconda.org/bioconda/dammet
   :alt:   (downloads)
.. |docker_dammet| image:: https://quay.io/repository/biocontainers/dammet/status
   :target: https://quay.io/repository/biocontainers/dammet
.. _`dammet/tags`: https://quay.io/repository/biocontainers/dammet?tab=tags


.. raw:: html

    <script>
        var package = "dammet";
        var versions = ["1.0.4","1.0.1a","1.0.1a","1.0.1a","1.0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammet/README.html