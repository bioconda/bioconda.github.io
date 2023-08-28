:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctseq'
.. highlight: bash

ctseq
=====

.. conda:recipe:: ctseq
   :replaces_section_title:
   :noindex:

   ctSeq is a pipeline to analyze methylation patch PCR data

   :homepage: https://github.com/ryanhmiller/ctseq
   :license: MIT / MIT
   :recipe: /`ctseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctseq/meta.yaml>`_

   


.. conda:package:: ctseq

   |downloads_ctseq| |docker_ctseq|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends bismark: 
   :depends cutadapt: 
   :depends ncurses: ``6.1 he6710b0_1``
   :depends numpy: 
   :depends openssl: ``1.0.2p h14c3975_1002``
   :depends python: ``>=3.7``
   :depends r-base: ``3.5.1.*``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-reshape: 
   :depends samtools: ``1.9.*``
   :depends simplesam: ``0.1.3.1.*``
   :depends umi_tools: 
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

      mamba install ctseq

   and update with::

      mamba update ctseq

  To create a new environment, run::

      mamba create --name myenvname ctseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctseq:<tag>

   (see `ctseq/tags`_ for valid values for ``<tag>``)


.. |downloads_ctseq| image:: https://img.shields.io/conda/dn/bioconda/ctseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ctseq
   :alt:   (downloads)
.. |docker_ctseq| image:: https://quay.io/repository/biocontainers/ctseq/status
   :target: https://quay.io/repository/biocontainers/ctseq
.. _`ctseq/tags`: https://quay.io/repository/biocontainers/ctseq?tab=tags


.. raw:: html

    <script>
        var package = "ctseq";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctseq/README.html