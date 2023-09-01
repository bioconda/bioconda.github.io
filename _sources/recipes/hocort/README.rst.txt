:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hocort'
.. highlight: bash

hocort
======

.. conda:recipe:: hocort
   :replaces_section_title:
   :noindex:

   HoCoRT \- Host Contamination Removal Tool

   :homepage: https://github.com/ignasrum/hocort
   :license: MIT / MIT
   :recipe: /`hocort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hocort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hocort/meta.yaml>`_

   


.. conda:package:: hocort

   |downloads_hocort| |docker_hocort|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      

   
   :depends bbmap: 
   :depends biobloomtools: 
   :depends bowtie2: 
   :depends bwa-mem2: 
   :depends hisat2: 
   :depends kraken2: ``>=2.1.2``
   :depends minimap2: 
   :depends python: ``>=3.7,<3.10``
   :depends samtools: ``>=1.8``
   :depends tbb: ``2020.2.*``
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

      mamba install hocort

   and update with::

      mamba update hocort

  To create a new environment, run::

      mamba create --name myenvname hocort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hocort:<tag>

   (see `hocort/tags`_ for valid values for ``<tag>``)


.. |downloads_hocort| image:: https://img.shields.io/conda/dn/bioconda/hocort.svg?style=flat
   :target: https://anaconda.org/bioconda/hocort
   :alt:   (downloads)
.. |docker_hocort| image:: https://quay.io/repository/biocontainers/hocort/status
   :target: https://quay.io/repository/biocontainers/hocort
.. _`hocort/tags`: https://quay.io/repository/biocontainers/hocort?tab=tags


.. raw:: html

    <script>
        var package = "hocort";
        var versions = ["1.2.2","1.2.1","1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hocort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hocort/README.html