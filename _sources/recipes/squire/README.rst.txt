:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squire'
.. highlight: bash

squire
======

.. conda:recipe:: squire
   :replaces_section_title:
   :noindex:

   Quantitative\, locus\-specific view of transposable element expression.

   :homepage: https://github.com/wyang17/SQuIRE
   :license: GNU
   :recipe: /`squire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squire/meta.yaml>`_

   


.. conda:package:: squire

   |downloads_squire| |docker_squire|

   :versions:
      
      

      ``0.9.9.92-1``,  ``0.9.9.92-0``

      

   
   :depends bedtools: ``2.25.0``
   :depends bioconductor-biocparallel: ``1.12.0``
   :depends bioconductor-deseq2: ``1.16.1``
   :depends bioconductor-vsn: 
   :depends igvtools: ``2.3.93``
   :depends pyfaidx: 
   :depends python: ``2.7.*``
   :depends r-base: ``3.4.1``
   :depends r-ggrepel: 
   :depends r-hexbin: 
   :depends r-pheatmap: 
   :depends samtools: ``1.1``
   :depends star: ``2.5.3a``
   :depends stringtie: ``1.3.3``
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-genepredtobed: 
   :depends ucsc-genepredtogtf: 
   :depends ucsc-gtftogenepred: 
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

      mamba install squire

   and update with::

      mamba update squire

  To create a new environment, run::

      mamba create --name myenvname squire

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squire:<tag>

   (see `squire/tags`_ for valid values for ``<tag>``)


.. |downloads_squire| image:: https://img.shields.io/conda/dn/bioconda/squire.svg?style=flat
   :target: https://anaconda.org/bioconda/squire
   :alt:   (downloads)
.. |docker_squire| image:: https://quay.io/repository/biocontainers/squire/status
   :target: https://quay.io/repository/biocontainers/squire
.. _`squire/tags`: https://quay.io/repository/biocontainers/squire?tab=tags


.. raw:: html

    <script>
        var package = "squire";
        var versions = ["0.9.9.92","0.9.9.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squire/README.html