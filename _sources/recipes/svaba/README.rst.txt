:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svaba'
.. highlight: bash

svaba
=====

.. conda:recipe:: svaba
   :replaces_section_title:
   :noindex:

   Structural variation and indel detection by local assembly

   :homepage: https://github.com/walaj/svaba
   :license: GPLv3
   :recipe: /`svaba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba/meta.yaml>`_

   


.. conda:package:: svaba

   |downloads_svaba| |docker_svaba|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=18``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xz: 
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

      mamba install svaba

   and update with::

      mamba update svaba

  To create a new environment, run::

      mamba create --name myenvname svaba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svaba:<tag>

   (see `svaba/tags`_ for valid values for ``<tag>``)


.. |downloads_svaba| image:: https://img.shields.io/conda/dn/bioconda/svaba.svg?style=flat
   :target: https://anaconda.org/bioconda/svaba
   :alt:   (downloads)
.. |docker_svaba| image:: https://quay.io/repository/biocontainers/svaba/status
   :target: https://quay.io/repository/biocontainers/svaba
.. _`svaba/tags`: https://quay.io/repository/biocontainers/svaba?tab=tags


.. raw:: html

    <script>
        var package = "svaba";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svaba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svaba/README.html