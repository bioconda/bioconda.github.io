:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popscle'
.. highlight: bash

popscle
=======

.. conda:recipe:: popscle
   :replaces_section_title:
   :noindex:

   A suite of population scale analysis tools for single\-cell genomics data including implementation of Demuxlet \/ Freemuxlet methods and auxilary tools

   :homepage: https://github.com/statgen/popscle
   :license: MIT
   :recipe: /`popscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popscle/meta.yaml>`_

   


.. conda:package:: popscle

   |downloads_popscle| |docker_popscle|

   :versions:
      
      

      ``0.1-0``,  ``0.1beta-1``,  ``0.1beta-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.16,<1.22.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :depends samtools: 
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
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

      mamba install popscle

   and update with::

      mamba update popscle

  To create a new environment, run::

      mamba create --name myenvname popscle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/popscle:<tag>

   (see `popscle/tags`_ for valid values for ``<tag>``)


.. |downloads_popscle| image:: https://img.shields.io/conda/dn/bioconda/popscle.svg?style=flat
   :target: https://anaconda.org/bioconda/popscle
   :alt:   (downloads)
.. |docker_popscle| image:: https://quay.io/repository/biocontainers/popscle/status
   :target: https://quay.io/repository/biocontainers/popscle
.. _`popscle/tags`: https://quay.io/repository/biocontainers/popscle?tab=tags


.. raw:: html

    <script>
        var package = "popscle";
        var versions = ["0.1","0.1beta","0.1beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popscle/README.html