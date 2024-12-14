:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'narfmap'
.. highlight: bash

narfmap
=======

.. conda:recipe:: narfmap
   :replaces_section_title:
   :noindex:

   NARFMAP is a fork of the Dragen mapper\/aligner Open Source Software.

   :homepage: https://github.com/bioinformaticsorphanage/NARFMAP
   :license: GPL-3
   :recipe: /`narfmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/narfmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/narfmap/meta.yaml>`_

   


.. conda:package:: narfmap

   |downloads_narfmap| |docker_narfmap|

   :versions:
      
      

      ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-0``

      

   
   :depends boost: ``>=1.69,<=1.71``
   :depends boost-cpp: ``>=1.69,<=1.71``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install narfmap

   and update with::

      mamba update narfmap

  To create a new environment, run::

      mamba create --name myenvname narfmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/narfmap:<tag>

   (see `narfmap/tags`_ for valid values for ``<tag>``)


.. |downloads_narfmap| image:: https://img.shields.io/conda/dn/bioconda/narfmap.svg?style=flat
   :target: https://anaconda.org/bioconda/narfmap
   :alt:   (downloads)
.. |docker_narfmap| image:: https://quay.io/repository/biocontainers/narfmap/status
   :target: https://quay.io/repository/biocontainers/narfmap
.. _`narfmap/tags`: https://quay.io/repository/biocontainers/narfmap?tab=tags


.. raw:: html

    <script>
        var package = "narfmap";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/narfmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/narfmap/README.html