:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refseq_masher'
.. highlight: bash

refseq_masher
=============

.. conda:recipe:: refseq_masher
   :replaces_section_title:
   :noindex:

   refseq\_masher finds what NCBI RefSeq genomes match or are contained within your sequence data using Mash

   :homepage: https://github.com/phac-nml/refseq_masher
   :license: Apache / Apache 2.0
   :recipe: /`refseq_masher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq_masher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq_masher/meta.yaml>`_

   


.. conda:package:: refseq_masher

   |downloads_refseq_masher| |docker_refseq_masher|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends mash: ``>=2.0``
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.20.1``
   :depends python: ``>=3``
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

      mamba install refseq_masher

   and update with::

      mamba update refseq_masher

  To create a new environment, run::

      mamba create --name myenvname refseq_masher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/refseq_masher:<tag>

   (see `refseq_masher/tags`_ for valid values for ``<tag>``)


.. |downloads_refseq_masher| image:: https://img.shields.io/conda/dn/bioconda/refseq_masher.svg?style=flat
   :target: https://anaconda.org/bioconda/refseq_masher
   :alt:   (downloads)
.. |docker_refseq_masher| image:: https://quay.io/repository/biocontainers/refseq_masher/status
   :target: https://quay.io/repository/biocontainers/refseq_masher
.. _`refseq_masher/tags`: https://quay.io/repository/biocontainers/refseq_masher?tab=tags


.. raw:: html

    <script>
        var package = "refseq_masher";
        var versions = ["0.1.2","0.1.1","0.1.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refseq_masher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refseq_masher/README.html