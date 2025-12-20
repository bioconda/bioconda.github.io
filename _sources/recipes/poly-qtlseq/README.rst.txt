:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poly-qtlseq'
.. highlight: bash

poly-qtlseq
===========

.. conda:recipe:: poly-qtlseq
   :replaces_section_title:
   :noindex:

   PolyploidQtlSeq is a program that extends QTL\-seq for polyploid F1 populations.

   :homepage: https://github.com/TatsumiMizubayashi/PolyploidQtlSeq
   :license: MIT License
   :recipe: /`poly-qtlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poly-qtlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poly-qtlseq/meta.yaml>`_

   


.. conda:package:: poly-qtlseq

   |downloads_poly-qtlseq| |docker_poly-qtlseq|

   :versions:
      
      

      ``1.2.6-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bcftools: ``>=1.16``
   :depends bwa: 
   :depends dotnet-runtime: ``>=8,<9``
   :depends fastp: ``>=0.23``
   :depends samtools: ``>=1.16``
   :depends snpeff: 
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

      mamba install poly-qtlseq

   and update with::

      mamba update poly-qtlseq

  To create a new environment, run::

      mamba create --name myenvname poly-qtlseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poly-qtlseq:<tag>

   (see `poly-qtlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_poly-qtlseq| image:: https://img.shields.io/conda/dn/bioconda/poly-qtlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/poly-qtlseq
   :alt:   (downloads)
.. |docker_poly-qtlseq| image:: https://quay.io/repository/biocontainers/poly-qtlseq/status
   :target: https://quay.io/repository/biocontainers/poly-qtlseq
.. _`poly-qtlseq/tags`: https://quay.io/repository/biocontainers/poly-qtlseq?tab=tags


.. raw:: html

    <script>
        var package = "poly-qtlseq";
        var versions = ["1.2.6","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poly-qtlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poly-qtlseq/README.html