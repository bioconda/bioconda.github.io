:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtfsort'
.. highlight: bash

gtfsort
=======

.. conda:recipe:: gtfsort
   :replaces_section_title:
   :noindex:

   A chr\/pos\/feature GTF sorter that uses a lexicographically\-based index ordering algorithm.

   :homepage: https://github.com/alejandrogzi/gtfsort
   :license: MIT / MIT
   :recipe: /`gtfsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfsort/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.10.21.563454`

   


.. conda:package:: gtfsort

   |downloads_gtfsort| |docker_gtfsort|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``

      

   
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

      mamba install gtfsort

   and update with::

      mamba update gtfsort

  To create a new environment, run::

      mamba create --name myenvname gtfsort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtfsort:<tag>

   (see `gtfsort/tags`_ for valid values for ``<tag>``)


.. |downloads_gtfsort| image:: https://img.shields.io/conda/dn/bioconda/gtfsort.svg?style=flat
   :target: https://anaconda.org/bioconda/gtfsort
   :alt:   (downloads)
.. |docker_gtfsort| image:: https://quay.io/repository/biocontainers/gtfsort/status
   :target: https://quay.io/repository/biocontainers/gtfsort
.. _`gtfsort/tags`: https://quay.io/repository/biocontainers/gtfsort?tab=tags


.. raw:: html

    <script>
        var package = "gtfsort";
        var versions = ["0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtfsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtfsort/README.html