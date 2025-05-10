:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutesv-ol'
.. highlight: bash

cutesv-ol
=========

.. conda:recipe:: cutesv-ol
   :replaces_section_title:
   :noindex:

   cuteSV\-OL\: real\-time structural variation detection for nanopore sequencing

   :homepage: https://github.com/120L022331/cuteSV-OL
   :license: MIT
   :recipe: /`cutesv-ol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutesv-ol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutesv-ol/meta.yaml>`_

   


.. conda:package:: cutesv-ol

   |downloads_cutesv-ol| |docker_cutesv-ol|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends cigar: 
   :depends libgcc: ``>=13``
   :depends minimap2: 
   :depends numpy: ``>=1.24.4,<2.0``
   :depends pysam: ``>=0.23.0,<0.24.0a0``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends pyvcf3: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends watchdog: 
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

      mamba install cutesv-ol

   and update with::

      mamba update cutesv-ol

  To create a new environment, run::

      mamba create --name myenvname cutesv-ol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cutesv-ol:<tag>

   (see `cutesv-ol/tags`_ for valid values for ``<tag>``)


.. |downloads_cutesv-ol| image:: https://img.shields.io/conda/dn/bioconda/cutesv-ol.svg?style=flat
   :target: https://anaconda.org/bioconda/cutesv-ol
   :alt:   (downloads)
.. |docker_cutesv-ol| image:: https://quay.io/repository/biocontainers/cutesv-ol/status
   :target: https://quay.io/repository/biocontainers/cutesv-ol
.. _`cutesv-ol/tags`: https://quay.io/repository/biocontainers/cutesv-ol?tab=tags


.. raw:: html

    <script>
        var package = "cutesv-ol";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutesv-ol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutesv-ol/README.html