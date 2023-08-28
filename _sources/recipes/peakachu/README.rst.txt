:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakachu'
.. highlight: bash

peakachu
========

.. conda:recipe:: peakachu
   :replaces_section_title:
   :noindex:

   Peak calling tool for CLIP\-seq data.

   :homepage: https://github.com/tbischler/PEAKachu
   :license: ISCL
   :recipe: /`peakachu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakachu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakachu/meta.yaml>`_

   


.. conda:package:: peakachu

   |downloads_peakachu| |docker_peakachu|

   :versions:
      
      

      ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bcbio-gff: ``>=0.6.6``
   :depends bioconductor-deseq2: ``>=1.18.1``
   :depends bioconductor-edger: 
   :depends biopython: ``>=1.77``
   :depends blockbuster: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: ``>=3.3.1``
   :depends numexpr: ``>=2.7.0``
   :depends pandas: ``>=0.25.1``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends rpy2: 
   :depends statsmodels: ``>=0.10.1``
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

      mamba install peakachu

   and update with::

      mamba update peakachu

  To create a new environment, run::

      mamba create --name myenvname peakachu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peakachu:<tag>

   (see `peakachu/tags`_ for valid values for ``<tag>``)


.. |downloads_peakachu| image:: https://img.shields.io/conda/dn/bioconda/peakachu.svg?style=flat
   :target: https://anaconda.org/bioconda/peakachu
   :alt:   (downloads)
.. |docker_peakachu| image:: https://quay.io/repository/biocontainers/peakachu/status
   :target: https://quay.io/repository/biocontainers/peakachu
.. _`peakachu/tags`: https://quay.io/repository/biocontainers/peakachu?tab=tags


.. raw:: html

    <script>
        var package = "peakachu";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakachu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakachu/README.html