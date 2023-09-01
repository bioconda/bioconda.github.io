:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'footprint'
.. highlight: bash

footprint
=========

.. conda:recipe:: footprint
   :replaces_section_title:
   :noindex:

   This is a pipeline to find transcription factor footprints in ATAC\-seq or DNase\-seq data.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Reproducible_footprinting_139/
   :license: GPL-2.0-or-later
   :recipe: /`footprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint/meta.yaml>`_

   


.. conda:package:: footprint

   |downloads_footprint| |docker_footprint|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bedtools: ``2.17.0``
   :depends bioconductor-genomicranges: 
   :depends gawk: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gtools: 
   :depends r-mixtools: 
   :depends r-segmented: 
   :depends samtools: ``1.1``
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

      mamba install footprint

   and update with::

      mamba update footprint

  To create a new environment, run::

      mamba create --name myenvname footprint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/footprint:<tag>

   (see `footprint/tags`_ for valid values for ``<tag>``)


.. |downloads_footprint| image:: https://img.shields.io/conda/dn/bioconda/footprint.svg?style=flat
   :target: https://anaconda.org/bioconda/footprint
   :alt:   (downloads)
.. |docker_footprint| image:: https://quay.io/repository/biocontainers/footprint/status
   :target: https://quay.io/repository/biocontainers/footprint
.. _`footprint/tags`: https://quay.io/repository/biocontainers/footprint?tab=tags


.. raw:: html

    <script>
        var package = "footprint";
        var versions = ["1.0.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/footprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/footprint/README.html