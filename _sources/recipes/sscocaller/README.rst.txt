:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sscocaller'
.. highlight: bash

sscocaller
==========

.. conda:recipe:: sscocaller
   :replaces_section_title:
   :noindex:

   Haplotyping single\-cell DNA sequenced gamete cells.

   :homepage: https://gitlab.svi.edu.au/biocellgen-public/sscocaller
   :license: MIT
   :recipe: /`sscocaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sscocaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sscocaller/meta.yaml>`_
   :links: biotools: :biotools:`sscocaller`

   


.. conda:package:: sscocaller

   |downloads_sscocaller| |docker_sscocaller|

   :versions:
      
      

      ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install sscocaller

   and update with::

      mamba update sscocaller

  To create a new environment, run::

      mamba create --name myenvname sscocaller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sscocaller:<tag>

   (see `sscocaller/tags`_ for valid values for ``<tag>``)


.. |downloads_sscocaller| image:: https://img.shields.io/conda/dn/bioconda/sscocaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sscocaller
   :alt:   (downloads)
.. |docker_sscocaller| image:: https://quay.io/repository/biocontainers/sscocaller/status
   :target: https://quay.io/repository/biocontainers/sscocaller
.. _`sscocaller/tags`: https://quay.io/repository/biocontainers/sscocaller?tab=tags


.. raw:: html

    <script>
        var package = "sscocaller";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sscocaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sscocaller/README.html