:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultra_bioinformatics'
.. highlight: bash

ultra_bioinformatics
====================

.. conda:recipe:: ultra_bioinformatics
   :replaces_section_title:
   :noindex:

   Splice aligner of long transcriptomic reads to genome.

   :homepage: https://github.com/ksahlin/uLTRA
   :license: GPL3 / GNU GPLV3
   :recipe: /`ultra_bioinformatics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics/meta.yaml>`_

   


.. conda:package:: ultra_bioinformatics

   |downloads_ultra_bioinformatics| |docker_ultra_bioinformatics|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``,  ``0.0.4.2-0``,  ``0.0.4.1-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3.3-1``,  ``0.0.3.3-0``

      

   
   :depends dill: 
   :depends gffutils: 
   :depends intervaltree: 
   :depends minimap2: 
   :depends mummer: 
   :depends namfinder: 
   :depends parasail-python: 
   :depends pysam: 
   :depends python: 
   :depends python-edlib: 
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

      mamba install ultra_bioinformatics

   and update with::

      mamba update ultra_bioinformatics

  To create a new environment, run::

      mamba create --name myenvname ultra_bioinformatics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ultra_bioinformatics:<tag>

   (see `ultra_bioinformatics/tags`_ for valid values for ``<tag>``)


.. |downloads_ultra_bioinformatics| image:: https://img.shields.io/conda/dn/bioconda/ultra_bioinformatics.svg?style=flat
   :target: https://anaconda.org/bioconda/ultra_bioinformatics
   :alt:   (downloads)
.. |docker_ultra_bioinformatics| image:: https://quay.io/repository/biocontainers/ultra_bioinformatics/status
   :target: https://quay.io/repository/biocontainers/ultra_bioinformatics
.. _`ultra_bioinformatics/tags`: https://quay.io/repository/biocontainers/ultra_bioinformatics?tab=tags


.. raw:: html

    <script>
        var package = "ultra_bioinformatics";
        var versions = ["0.1","0.1","0.0.4.2","0.0.4.1","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultra_bioinformatics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultra_bioinformatics/README.html