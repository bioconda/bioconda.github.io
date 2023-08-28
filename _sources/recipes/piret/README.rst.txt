:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piret'
.. highlight: bash

piret
=====

.. conda:recipe:: piret
   :replaces_section_title:
   :noindex:

   A tool for conducting RNA seq analysis.

   :homepage: https://github.com/mshakya/PyPiReT
   :license: GPLV2
   :recipe: /`piret <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret/meta.yaml>`_
   :links: biotools: :biotools:`piret`

   


.. conda:package:: piret

   |downloads_piret| |docker_piret|

   :versions:
      
      

      ``0.3.4-1``,  ``0.3.4-0``

      

   
   :depends argparse: 
   :depends bamtools: ``>=2.4.0``
   :depends bioconductor-deseq2: ``>=1.20.0``
   :depends bioconductor-edger: ``>=3.22.5``
   :depends biopython: ``>=1.7.0``
   :depends hisat2: ``>=2.0.5``
   :depends luigi: ``>=2.7.9``
   :depends pandas: ``>=0.23.4``
   :depends plumbum: ``>=1.6.0``
   :depends python: 
   :depends r: 
   :depends samtools: ``>=1.3.1``
   :depends stringtie: ``>=1.3.3``
   :depends subread: ``>=1.5.0``
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

      mamba install piret

   and update with::

      mamba update piret

  To create a new environment, run::

      mamba create --name myenvname piret

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piret:<tag>

   (see `piret/tags`_ for valid values for ``<tag>``)


.. |downloads_piret| image:: https://img.shields.io/conda/dn/bioconda/piret.svg?style=flat
   :target: https://anaconda.org/bioconda/piret
   :alt:   (downloads)
.. |docker_piret| image:: https://quay.io/repository/biocontainers/piret/status
   :target: https://quay.io/repository/biocontainers/piret
.. _`piret/tags`: https://quay.io/repository/biocontainers/piret?tab=tags


.. raw:: html

    <script>
        var package = "piret";
        var versions = ["0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piret/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piret/README.html