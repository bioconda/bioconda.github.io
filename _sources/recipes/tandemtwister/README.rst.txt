:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tandemtwister'
.. highlight: bash

tandemtwister
=============

.. conda:recipe:: tandemtwister
   :replaces_section_title:
   :noindex:

   Detection of interleaved and embedded tandem repeats from long reads

   :homepage: https://github.com/Lionward/tandemtwister
   :license: BSD / BSD-3-Clause-Non-Commercial
   :recipe: /`tandemtwister <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandemtwister>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandemtwister/meta.yaml>`_

   TandemTwister is a tool designed for the detection of interleaved and embedded
   tandem repeats from long reads\, facilitating advanced genomic analysis.
   This software is licensed for NON\-COMMERCIAL USE ONLY under the BSD 3\-Clause
   Non\-Commercial License. For commercial licensing inquiries\, please contact
   the author.



.. conda:package:: tandemtwister

   |downloads_tandemtwister| |docker_tandemtwister|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fmt: ``11.2.0``
   :depends fmt: ``>=11.2.0,<11.3.0a0``
   :depends htslib: ``1.22.1``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libdeflate: ``>=1.25,<1.26.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends mlpack: ``4.5.0``
   :depends spdlog: ``>=1.15.3,<1.16.0a0``
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

      mamba install tandemtwister

   and update with::

      mamba update tandemtwister

  To create a new environment, run::

      mamba create --name myenvname tandemtwister

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tandemtwister:<tag>

   (see `tandemtwister/tags`_ for valid values for ``<tag>``)


.. |downloads_tandemtwister| image:: https://img.shields.io/conda/dn/bioconda/tandemtwister.svg?style=flat
   :target: https://anaconda.org/bioconda/tandemtwister
   :alt:   (downloads)
.. |docker_tandemtwister| image:: https://quay.io/repository/biocontainers/tandemtwister/status
   :target: https://quay.io/repository/biocontainers/tandemtwister
.. _`tandemtwister/tags`: https://quay.io/repository/biocontainers/tandemtwister?tab=tags


.. raw:: html

    <script>
        var package = "tandemtwister";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tandemtwister/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tandemtwister/README.html