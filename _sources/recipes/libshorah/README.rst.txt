:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libshorah'
.. highlight: bash

libshorah
=========

.. conda:recipe:: libshorah
   :replaces_section_title:
   :noindex:

   libshorah \- Short Reads Assembly into Haplotypes

   :homepage: https://github.com/LaraFuhrmann/VILOCA
   :license: GPL3 / GPLv3
   :recipe: /`libshorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libshorah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libshorah/meta.yaml>`_

   


.. conda:package:: libshorah

   |downloads_libshorah| |docker_libshorah|

   :versions:
      
      

      ``1.99.4-1``,  ``1.99.4-0``

      

   
   :depends htslib: ``>=1.17,<1.23.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install libshorah

   and update with::

      mamba update libshorah

  To create a new environment, run::

      mamba create --name myenvname libshorah

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libshorah:<tag>

   (see `libshorah/tags`_ for valid values for ``<tag>``)


.. |downloads_libshorah| image:: https://img.shields.io/conda/dn/bioconda/libshorah.svg?style=flat
   :target: https://anaconda.org/bioconda/libshorah
   :alt:   (downloads)
.. |docker_libshorah| image:: https://quay.io/repository/biocontainers/libshorah/status
   :target: https://quay.io/repository/biocontainers/libshorah
.. _`libshorah/tags`: https://quay.io/repository/biocontainers/libshorah?tab=tags


.. raw:: html

    <script>
        var package = "libshorah";
        var versions = ["1.99.4","1.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libshorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libshorah/README.html