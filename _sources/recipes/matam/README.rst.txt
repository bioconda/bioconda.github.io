:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matam'
.. highlight: bash

matam
=====

.. conda:recipe:: matam
   :replaces_section_title:
   :noindex:

   MATAM is a software dedicated to the fast and accurate targeted assembly of short reads.

   :homepage: https://github.com/bonsai-team/matam
   :license: AGPL-3.0
   :recipe: /`matam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matam/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx644`

   


.. conda:package:: matam

   |downloads_matam| |docker_matam|

   :versions:
      
      

      ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends bzip2: 
   :depends coreutils: 
   :depends krona: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends python: ``>=3``
   :depends rdptools: 
   :depends samtools: 
   :depends sga: 
   :depends sortmerna: ``2.1b.*``
   :depends vsearch: 
   :depends wget: 
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

      mamba install matam

   and update with::

      mamba update matam

  To create a new environment, run::

      mamba create --name myenvname matam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/matam:<tag>

   (see `matam/tags`_ for valid values for ``<tag>``)


.. |downloads_matam| image:: https://img.shields.io/conda/dn/bioconda/matam.svg?style=flat
   :target: https://anaconda.org/bioconda/matam
   :alt:   (downloads)
.. |docker_matam| image:: https://quay.io/repository/biocontainers/matam/status
   :target: https://quay.io/repository/biocontainers/matam
.. _`matam/tags`: https://quay.io/repository/biocontainers/matam?tab=tags


.. raw:: html

    <script>
        var package = "matam";
        var versions = ["1.6.1","1.6.1","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matam/README.html