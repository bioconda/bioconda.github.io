:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moni'
.. highlight: bash

moni
====

.. conda:recipe:: moni
   :replaces_section_title:
   :noindex:

   A Pangenomics Index for Finding MEMs

   :homepage: https://github.com/maxrossi91/moni
   :license: MIT / MIT
   :recipe: /`moni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moni/meta.yaml>`_

   MONI \(Multi\) is a Pangenomics Index for Finding Maximal Exact Matches \(MEMs\).
   It uses the prefix\-free parsing of the text to build the Burrows\-Wheeler Transform \(BWT\) 
   of the reference genomes\, the suffix array \(SA\) samples at the beginning and at the end 
   of each run of the BWT\, and the threshold positions.



.. conda:package:: moni

   |downloads_moni| |docker_moni|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends libgcc: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
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

      mamba install moni

   and update with::

      mamba update moni

  To create a new environment, run::

      mamba create --name myenvname moni

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moni:<tag>

   (see `moni/tags`_ for valid values for ``<tag>``)


.. |downloads_moni| image:: https://img.shields.io/conda/dn/bioconda/moni.svg?style=flat
   :target: https://anaconda.org/bioconda/moni
   :alt:   (downloads)
.. |docker_moni| image:: https://quay.io/repository/biocontainers/moni/status
   :target: https://quay.io/repository/biocontainers/moni
.. _`moni/tags`: https://quay.io/repository/biocontainers/moni?tab=tags


.. raw:: html

    <script>
        var package = "moni";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moni/README.html