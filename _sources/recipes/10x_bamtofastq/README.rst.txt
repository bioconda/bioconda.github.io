:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '10x_bamtofastq'
.. highlight: bash

10x_bamtofastq
==============

.. conda:recipe:: 10x_bamtofastq
   :replaces_section_title:
   :noindex:

   Tool for converting 10x BAMs produced by Cell Ranger\, Space Ranger\, Cell Ranger ATAC\, Cell Ranger DNA\, 
   and Long Ranger back to FASTQ files that can be used as inputs to re\-run analysis

   :homepage: https://github.com/10XGenomics/bamtofastq
   :license: MIT
   :recipe: /`10x_bamtofastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/10x_bamtofastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/10x_bamtofastq/meta.yaml>`_

   


.. conda:package:: 10x_bamtofastq

   |downloads_10x_bamtofastq| |docker_10x_bamtofastq|

   :versions:
      
      

      ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install 10x_bamtofastq

   and update with::

      mamba update 10x_bamtofastq

  To create a new environment, run::

      mamba create --name myenvname 10x_bamtofastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/10x_bamtofastq:<tag>

   (see `10x_bamtofastq/tags`_ for valid values for ``<tag>``)


.. |downloads_10x_bamtofastq| image:: https://img.shields.io/conda/dn/bioconda/10x_bamtofastq.svg?style=flat
   :target: https://anaconda.org/bioconda/10x_bamtofastq
   :alt:   (downloads)
.. |docker_10x_bamtofastq| image:: https://quay.io/repository/biocontainers/10x_bamtofastq/status
   :target: https://quay.io/repository/biocontainers/10x_bamtofastq
.. _`10x_bamtofastq/tags`: https://quay.io/repository/biocontainers/10x_bamtofastq?tab=tags


.. raw:: html

    <script>
        var package = "10x_bamtofastq";
        var versions = ["1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/10x_bamtofastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/10x_bamtofastq/README.html