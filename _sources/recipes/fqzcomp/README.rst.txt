:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqzcomp'
.. highlight: bash

fqzcomp
=======

.. conda:recipe:: fqzcomp
   :replaces_section_title:
   :noindex:

   Fqzcomp is a basic fastq compressor\, designed primarily for high performance.

   :homepage: https://sourceforge.net/projects/fqzcomp/
   :license: BSD / BSD License
   :recipe: /`fqzcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp/meta.yaml>`_

   


.. conda:package:: fqzcomp

   |downloads_fqzcomp| |docker_fqzcomp|

   :versions:
      
      

      ``4.6-6``,  ``4.6-5``,  ``4.6-4``,  ``4.6-3``,  ``4.6-2``,  ``4.6-1``,  ``4.6-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install fqzcomp

   and update with::

      mamba update fqzcomp

  To create a new environment, run::

      mamba create --name myenvname fqzcomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fqzcomp:<tag>

   (see `fqzcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_fqzcomp| image:: https://img.shields.io/conda/dn/bioconda/fqzcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/fqzcomp
   :alt:   (downloads)
.. |docker_fqzcomp| image:: https://quay.io/repository/biocontainers/fqzcomp/status
   :target: https://quay.io/repository/biocontainers/fqzcomp
.. _`fqzcomp/tags`: https://quay.io/repository/biocontainers/fqzcomp?tab=tags


.. raw:: html

    <script>
        var package = "fqzcomp";
        var versions = ["4.6","4.6","4.6","4.6","4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqzcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqzcomp/README.html