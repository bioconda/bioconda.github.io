:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbcgmlst'
.. highlight: bash

mbcgmlst
========

.. conda:recipe:: mbcgmlst
   :replaces_section_title:
   :noindex:

   cgMLST allele calling pipeline with Ridom\-style output.

   :homepage: https://github.com/liviurotiul/mbcgmlst
   :documentation: https://github.com/liviurotiul/mbcgmlst#readme
   
   :developer docs: https://github.com/liviurotiul/mbcgmlst/issues
   :license: GPL / GPL-2.0-only
   :recipe: /`mbcgmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbcgmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbcgmlst/meta.yaml>`_

   cgMLST allele calling pipeline that maps allele FASTA sequences against assembled
   genomes and emits a Ridom\-style CSV.



.. conda:package:: mbcgmlst

   |downloads_mbcgmlst| |docker_mbcgmlst|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends minimap2: 
   :depends python: ``>=3.9``
   :depends tk: 
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

      mamba install mbcgmlst

   and update with::

      mamba update mbcgmlst

  To create a new environment, run::

      mamba create --name myenvname mbcgmlst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mbcgmlst:<tag>

   (see `mbcgmlst/tags`_ for valid values for ``<tag>``)


.. |downloads_mbcgmlst| image:: https://img.shields.io/conda/dn/bioconda/mbcgmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/mbcgmlst
   :alt:   (downloads)
.. |docker_mbcgmlst| image:: https://quay.io/repository/biocontainers/mbcgmlst/status
   :target: https://quay.io/repository/biocontainers/mbcgmlst
.. _`mbcgmlst/tags`: https://quay.io/repository/biocontainers/mbcgmlst?tab=tags


.. raw:: html

    <script>
        var package = "mbcgmlst";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbcgmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbcgmlst/README.html