:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titanomics'
.. highlight: bash

titanomics
==========

.. conda:recipe:: titanomics
   :replaces_section_title:
   :noindex:

   A comprehensive multi\-omics data analysis pipeline.

   :homepage: https://github.com/raw-lab/titan
   :license: BSD / BSD
   :recipe: /`titanomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics/meta.yaml>`_

   


.. conda:package:: titanomics

   |downloads_titanomics| |docker_titanomics|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends bowtie2: 
   :depends configargparse: 
   :depends fastp: 
   :depends fastqc: 
   :depends flash2: 
   :depends flye: 
   :depends grpcio: ``<=1.43``
   :depends megahit: 
   :depends metaomestats: 
   :depends psutil: 
   :depends python: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install titanomics

   and update with::

      mamba update titanomics

  To create a new environment, run::

      mamba create --name myenvname titanomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/titanomics:<tag>

   (see `titanomics/tags`_ for valid values for ``<tag>``)


.. |downloads_titanomics| image:: https://img.shields.io/conda/dn/bioconda/titanomics.svg?style=flat
   :target: https://anaconda.org/bioconda/titanomics
   :alt:   (downloads)
.. |docker_titanomics| image:: https://quay.io/repository/biocontainers/titanomics/status
   :target: https://quay.io/repository/biocontainers/titanomics
.. _`titanomics/tags`: https://quay.io/repository/biocontainers/titanomics?tab=tags


.. raw:: html

    <script>
        var package = "titanomics";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titanomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titanomics/README.html