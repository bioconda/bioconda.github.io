:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapidnj'
.. highlight: bash

rapidnj
=======

.. conda:recipe:: rapidnj
   :replaces_section_title:
   :noindex:

   RapidNJ is an algorithmic engineered implementation of canonical neighbour\-joining. It uses an efficient search heuristic to speed\-up the core computations of the neighbour\-joining method that enables RapidNJ to outperform other state\-of\-the\-art neighbour\-joining implementations.

   :homepage: http://birc.au.dk/software/rapidnj/
   :license: GPL / GPL-2
   :recipe: /`rapidnj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-540-87361-7_10`

   


.. conda:package:: rapidnj

   |downloads_rapidnj| |docker_rapidnj|

   :versions:
      
      

      ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``v2.3.2-2``,  ``v2.3.2-1``,  ``v2.3.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install rapidnj

   and update with::

      mamba update rapidnj

  To create a new environment, run::

      mamba create --name myenvname rapidnj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapidnj:<tag>

   (see `rapidnj/tags`_ for valid values for ``<tag>``)


.. |downloads_rapidnj| image:: https://img.shields.io/conda/dn/bioconda/rapidnj.svg?style=flat
   :target: https://anaconda.org/bioconda/rapidnj
   :alt:   (downloads)
.. |docker_rapidnj| image:: https://quay.io/repository/biocontainers/rapidnj/status
   :target: https://quay.io/repository/biocontainers/rapidnj
.. _`rapidnj/tags`: https://quay.io/repository/biocontainers/rapidnj?tab=tags


.. raw:: html

    <script>
        var package = "rapidnj";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapidnj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapidnj/README.html