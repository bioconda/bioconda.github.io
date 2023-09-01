:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libbambamc'
.. highlight: bash

libbambamc
==========

.. conda:recipe:: libbambamc/0.5.00
   :replaces_section_title:
   :noindex:

   lightweight C implementation of name collating BAM file input and BAM file output

   :homepage: https://github.com/gt1/bambamc
   :license: GPLv3
   :recipe: /`libbambamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc>`_/`0.5.00 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00/meta.yaml>`_

   


.. conda:package:: libbambamc

   |downloads_libbambamc| |docker_libbambamc|

   :versions:
      
      

      ``0.0.50-5``,  ``0.0.50-4``,  ``0.0.50-3``,  ``0.0.50-2``,  ``0.0.50-1``,  ``0.0.50-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install libbambamc

   and update with::

      mamba update libbambamc

  To create a new environment, run::

      mamba create --name myenvname libbambamc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libbambamc:<tag>

   (see `libbambamc/tags`_ for valid values for ``<tag>``)


.. |downloads_libbambamc| image:: https://img.shields.io/conda/dn/bioconda/libbambamc.svg?style=flat
   :target: https://anaconda.org/bioconda/libbambamc
   :alt:   (downloads)
.. |docker_libbambamc| image:: https://quay.io/repository/biocontainers/libbambamc/status
   :target: https://quay.io/repository/biocontainers/libbambamc
.. _`libbambamc/tags`: https://quay.io/repository/biocontainers/libbambamc?tab=tags


.. raw:: html

    <script>
        var package = "libbambamc";
        var versions = ["0.0.50","0.0.50","0.0.50","0.0.50","0.0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libbambamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libbambamc/README.html