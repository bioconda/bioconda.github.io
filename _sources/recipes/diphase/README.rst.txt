:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diphase'
.. highlight: bash

diphase
=======

.. conda:recipe:: diphase
   :replaces_section_title:
   :noindex:

   A diploid genome phasing tool

   :homepage: https://github.com/zhangjuncsu/Diphase
   :license: MIT
   :recipe: /`diphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diphase/meta.yaml>`_

   


.. conda:package:: diphase

   |downloads_diphase| |docker_diphase|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bwa: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=7.87.0,<8.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=1.1.1w,<1.1.2a``
   :depends python: ``3.9.0.*``
   :depends samtools: 
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install diphase

   and update with::

      mamba update diphase

  To create a new environment, run::

      mamba create --name myenvname diphase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/diphase:<tag>

   (see `diphase/tags`_ for valid values for ``<tag>``)


.. |downloads_diphase| image:: https://img.shields.io/conda/dn/bioconda/diphase.svg?style=flat
   :target: https://anaconda.org/bioconda/diphase
   :alt:   (downloads)
.. |docker_diphase| image:: https://quay.io/repository/biocontainers/diphase/status
   :target: https://quay.io/repository/biocontainers/diphase
.. _`diphase/tags`: https://quay.io/repository/biocontainers/diphase?tab=tags


.. raw:: html

    <script>
        var package = "diphase";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diphase/README.html