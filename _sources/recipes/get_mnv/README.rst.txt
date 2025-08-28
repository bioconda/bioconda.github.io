:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_mnv'
.. highlight: bash

get_mnv
=======

.. conda:recipe:: get_mnv
   :replaces_section_title:
   :noindex:

   Tool to identify Multi\-Nucleotide Variants \(MNVs\) in genomic sequences.

   :homepage: https://github.com/PathoGenOmics-Lab/get_mnv
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`get_mnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_mnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_mnv/meta.yaml>`_

   get\_MNV is a tool designed to identify Multi\-Nucleotide Variants \(MNVs\) within the same codon in genomic sequences\, providing more accurate annotation for genomic data.



.. conda:package:: get_mnv

   |downloads_get_mnv| |docker_get_mnv|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=8.8.0,<9.0a0``
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends htslib: ``>=1.21,<2.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.2,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: ``>=1.2.13,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install get_mnv

   and update with::

      mamba update get_mnv

  To create a new environment, run::

      mamba create --name myenvname get_mnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/get_mnv:<tag>

   (see `get_mnv/tags`_ for valid values for ``<tag>``)


.. |downloads_get_mnv| image:: https://img.shields.io/conda/dn/bioconda/get_mnv.svg?style=flat
   :target: https://anaconda.org/bioconda/get_mnv
   :alt:   (downloads)
.. |docker_get_mnv| image:: https://quay.io/repository/biocontainers/get_mnv/status
   :target: https://quay.io/repository/biocontainers/get_mnv
.. _`get_mnv/tags`: https://quay.io/repository/biocontainers/get_mnv?tab=tags


.. raw:: html

    <script>
        var package = "get_mnv";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_mnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_mnv/README.html