:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'read2tree'
.. highlight: bash

read2tree
=========

.. conda:recipe:: read2tree
   :replaces_section_title:
   :noindex:

   Building phylogenetic trees directly from sequencing reads.

   :homepage: https://github.com/DessimozLab/read2tree
   :license: MIT / MIT
   :recipe: /`read2tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01753-4`

   


.. conda:package:: read2tree

   |downloads_read2tree| |docker_read2tree|

   :versions:
      
      

      ``2.0.0-0``,  ``0.1.5-0``

      

   
   :depends biopython: 
   :depends dendropy: 
   :depends filelock: 
   :depends iqtree: 
   :depends lxml: 
   :depends mafft: 
   :depends natsort: 
   :depends nextgenmap: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pyham: 
   :depends pyparsing: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends requests: 
   :depends samtools: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install read2tree

   and update with::

      mamba update read2tree

  To create a new environment, run::

      mamba create --name myenvname read2tree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/read2tree:<tag>

   (see `read2tree/tags`_ for valid values for ``<tag>``)


.. |downloads_read2tree| image:: https://img.shields.io/conda/dn/bioconda/read2tree.svg?style=flat
   :target: https://anaconda.org/bioconda/read2tree
   :alt:   (downloads)
.. |docker_read2tree| image:: https://quay.io/repository/biocontainers/read2tree/status
   :target: https://quay.io/repository/biocontainers/read2tree
.. _`read2tree/tags`: https://quay.io/repository/biocontainers/read2tree?tab=tags


.. raw:: html

    <script>
        var package = "read2tree";
        var versions = ["2.0.0","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/read2tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/read2tree/README.html