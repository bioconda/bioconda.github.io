:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffindex'
.. highlight: bash

ffindex
=======

.. conda:recipe:: ffindex
   :replaces_section_title:
   :noindex:

   FFindex \- A database wrapped around mmap.

   :homepage: https://github.com/soedinglab/ffindex_soedinglab
   :license: CC-BY-SA-3.0
   :recipe: /`ffindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex/meta.yaml>`_

   


.. conda:package:: ffindex

   |downloads_ffindex| |docker_ffindex|

   :versions:
      
      

      ``0.98-5``,  ``0.98-4``,  ``0.98-3``,  ``0.98-2``,  ``0.98-1``,  ``0.98-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install ffindex

   and update with::

      mamba update ffindex

  To create a new environment, run::

      mamba create --name myenvname ffindex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ffindex:<tag>

   (see `ffindex/tags`_ for valid values for ``<tag>``)


.. |downloads_ffindex| image:: https://img.shields.io/conda/dn/bioconda/ffindex.svg?style=flat
   :target: https://anaconda.org/bioconda/ffindex
   :alt:   (downloads)
.. |docker_ffindex| image:: https://quay.io/repository/biocontainers/ffindex/status
   :target: https://quay.io/repository/biocontainers/ffindex
.. _`ffindex/tags`: https://quay.io/repository/biocontainers/ffindex?tab=tags


.. raw:: html

    <script>
        var package = "ffindex";
        var versions = ["0.98","0.98","0.98","0.98","0.98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffindex/README.html