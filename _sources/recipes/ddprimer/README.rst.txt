:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddprimer'
.. highlight: bash

ddprimer
========

.. conda:recipe:: ddprimer
   :replaces_section_title:
   :noindex:

   Pipeline for designing primers optimized for droplet digital PCR

   :homepage: https://github.com/globuzzz2000/ddPrimer
   :license: MIT
   :recipe: /`ddprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddprimer/meta.yaml>`_

   


.. conda:package:: ddprimer

   |downloads_ddprimer| |docker_ddprimer|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bcftools: 
   :depends biopython: ``>=1.78``
   :depends blast: 
   :depends colorama: ``>=0.4.4``
   :depends htslib: 
   :depends numpy: ``>=1.20``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.3``
   :depends primer3-py: ``>=2.0.0``
   :depends python: ``>=3.10``
   :depends samtools: 
   :depends tqdm: ``>=4.60.0``
   :depends viennarna: ``>=2.7.0``
   :depends wxpython: ``>=4.1.0``
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

      mamba install ddprimer

   and update with::

      mamba update ddprimer

  To create a new environment, run::

      mamba create --name myenvname ddprimer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ddprimer:<tag>

   (see `ddprimer/tags`_ for valid values for ``<tag>``)


.. |downloads_ddprimer| image:: https://img.shields.io/conda/dn/bioconda/ddprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/ddprimer
   :alt:   (downloads)
.. |docker_ddprimer| image:: https://quay.io/repository/biocontainers/ddprimer/status
   :target: https://quay.io/repository/biocontainers/ddprimer
.. _`ddprimer/tags`: https://quay.io/repository/biocontainers/ddprimer?tab=tags


.. raw:: html

    <script>
        var package = "ddprimer";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddprimer/README.html