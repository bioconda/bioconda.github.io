:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amap'
.. highlight: bash

amap
====

.. conda:recipe:: amap
   :replaces_section_title:
   :noindex:

   AMAP is a multiple sequence alignment program based on sequence annealing.

   :homepage: https://web.archive.org/web/20060902044446/http://bio.math.berkeley.edu/amap/
   :developer docs: https://github.com/mes5k/amap-align
   :license: GPL-2
   :recipe: /`amap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amap/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btl311`

   


.. conda:package:: amap

   |downloads_amap| |docker_amap|

   :versions:
      
      

      ``2.2-4``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends blast: 
   :depends libcxx: ``>=15.0.7``
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

      mamba install amap

   and update with::

      mamba update amap

  To create a new environment, run::

      mamba create --name myenvname amap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amap:<tag>

   (see `amap/tags`_ for valid values for ``<tag>``)


.. |downloads_amap| image:: https://img.shields.io/conda/dn/bioconda/amap.svg?style=flat
   :target: https://anaconda.org/bioconda/amap
   :alt:   (downloads)
.. |docker_amap| image:: https://quay.io/repository/biocontainers/amap/status
   :target: https://quay.io/repository/biocontainers/amap
.. _`amap/tags`: https://quay.io/repository/biocontainers/amap?tab=tags


.. raw:: html

    <script>
        var package = "amap";
        var versions = ["2.2","2.2","2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amap/README.html