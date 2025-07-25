:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcne'
.. highlight: bash

pcne
====

.. conda:recipe:: pcne
   :replaces_section_title:
   :noindex:

   Estimates plasmid copy number from assembled genome.

   :homepage: https://github.com/riccabolla/PCNE
   :license: MIT
   :recipe: /`pcne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcne/meta.yaml>`_

   


.. conda:package:: pcne

   |downloads_pcne| |docker_pcne|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends bash: 
   :depends bc: 
   :depends bedtools: ``>=2.31.1``
   :depends busco: ``5.8.2.*``
   :depends bwa: ``>=0.7.19``
   :depends r-base: ``>=4.4.2``
   :depends r-dplyr: ``>=1.1.4``
   :depends r-ggplot2: ``>=3.5.1``
   :depends r-readr: ``>=2.1.5``
   :depends samtools: ``>=1.20``
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

      mamba install pcne

   and update with::

      mamba update pcne

  To create a new environment, run::

      mamba create --name myenvname pcne

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcne:<tag>

   (see `pcne/tags`_ for valid values for ``<tag>``)


.. |downloads_pcne| image:: https://img.shields.io/conda/dn/bioconda/pcne.svg?style=flat
   :target: https://anaconda.org/bioconda/pcne
   :alt:   (downloads)
.. |docker_pcne| image:: https://quay.io/repository/biocontainers/pcne/status
   :target: https://quay.io/repository/biocontainers/pcne
.. _`pcne/tags`: https://quay.io/repository/biocontainers/pcne?tab=tags


.. raw:: html

    <script>
        var package = "pcne";
        var versions = ["1.0.0","1.0.0","0.2.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcne/README.html