:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tepid'
.. highlight: bash

tepid
=====

.. conda:recipe:: tepid
   :replaces_section_title:
   :noindex:

   TEPID uses paired\-end illumina sequencing reads to identify novel TE variants.

   :homepage: https://github.com/ListerLab/TEPID
   :license: GPL-3.0-only
   :recipe: /`tepid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid/meta.yaml>`_

   


.. conda:package:: tepid

   |downloads_tepid| |docker_tepid|

   :versions:
      
      

      ``0.10-0``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``

      

   
   :depends bedtools: ``>=2.25.0``
   :depends bowtie2: 
   :depends nose: 
   :depends numpy: ``>=1.9.2``
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``<0.9,>0.8``
   :depends python: ``<3``
   :depends samblaster: 
   :depends samtools: ``>=1.4``
   :depends yaha: 
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

      mamba install tepid

   and update with::

      mamba update tepid

  To create a new environment, run::

      mamba create --name myenvname tepid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tepid:<tag>

   (see `tepid/tags`_ for valid values for ``<tag>``)


.. |downloads_tepid| image:: https://img.shields.io/conda/dn/bioconda/tepid.svg?style=flat
   :target: https://anaconda.org/bioconda/tepid
   :alt:   (downloads)
.. |docker_tepid| image:: https://quay.io/repository/biocontainers/tepid/status
   :target: https://quay.io/repository/biocontainers/tepid
.. _`tepid/tags`: https://quay.io/repository/biocontainers/tepid?tab=tags


.. raw:: html

    <script>
        var package = "tepid";
        var versions = ["0.10","0.8","0.8","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tepid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tepid/README.html