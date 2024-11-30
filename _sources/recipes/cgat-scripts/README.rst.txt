:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-scripts'
.. highlight: bash

cgat-scripts
============

.. conda:recipe:: cgat-scripts
   :replaces_section_title:
   :noindex:

   Computational Genomics Analysis Toolkit

   :homepage: https://www.cgat.org/downloads/public/cgat/documentation
   :license: BSD
   :recipe: /`cgat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-scripts/meta.yaml>`_

   


.. conda:package:: cgat-scripts

   |downloads_cgat-scripts| |docker_cgat-scripts|

   :versions:
      
      

      ``0.3.2-2``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.7-0``,  ``0.2.6-0``

      

   
   :depends alignlib-lite: ``0.3.*``
   :depends bedtools: ``2.26.*``
   :depends biopython: ``1.70.*``
   :depends coreutils: ``8.25.*``
   :depends cython: ``0.27.*``
   :depends future: ``0.16.*``
   :depends grep: ``2.14.*``
   :depends libgcc-ng: ``>=4.9``
   :depends libpng: ``>=1.6.34,<1.7.0a0``
   :depends matplotlib: ``2.1.*``
   :depends numpy: ``1.12.*``
   :depends pandas: ``0.21.*``
   :depends pybedtools: ``0.7.*``
   :depends pybigwig: ``0.3.*``
   :depends pysam: ``0.13.*``
   :depends python: ``>=3.5,<3.6.0a0``
   :depends python-lzo: ``1.11.*``
   :depends pyyaml: ``3.12.*``
   :depends rpy2: ``2.8.*``
   :depends scipy: ``0.19.*``
   :depends six: ``1.11.*``
   :depends ucsc-bedgraphtobigwig: ``357.*``
   :depends ucsc-bedtobigbed: ``357.*``
   :depends ucsc-wigtobigwig: ``357.*``
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

      mamba install cgat-scripts

   and update with::

      mamba update cgat-scripts

  To create a new environment, run::

      mamba create --name myenvname cgat-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgat-scripts:<tag>

   (see `cgat-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-scripts| image:: https://img.shields.io/conda/dn/bioconda/cgat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-scripts
   :alt:   (downloads)
.. |docker_cgat-scripts| image:: https://quay.io/repository/biocontainers/cgat-scripts/status
   :target: https://quay.io/repository/biocontainers/cgat-scripts
.. _`cgat-scripts/tags`: https://quay.io/repository/biocontainers/cgat-scripts?tab=tags


.. raw:: html

    <script>
        var package = "cgat-scripts";
        var versions = ["0.3.2","0.3.2","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-scripts/README.html