:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnaminer'
.. highlight: bash

srnaminer
=========

.. conda:recipe:: srnaminer
   :replaces_section_title:
   :noindex:

   sRNAminer\: a Multifunctional Toolkit for Next Generation Sequencing Small RNA Data Mining

   :homepage: https://github.com/kli28/sRNAminer
   :license: GPL3
   :recipe: /`srnaminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnaminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnaminer/meta.yaml>`_

   sRNAminer\-A multifunctional toolkit for sRNA analysis.


.. conda:package:: srnaminer

   |downloads_srnaminer| |docker_srnaminer|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie: 
   :depends fasta3: 
   :depends numpy: 
   :depends openjdk: 
   :depends pandas: 
   :depends parallel: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends viennarna: 
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

      mamba install srnaminer

   and update with::

      mamba update srnaminer

  To create a new environment, run::

      mamba create --name myenvname srnaminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srnaminer:<tag>

   (see `srnaminer/tags`_ for valid values for ``<tag>``)


.. |downloads_srnaminer| image:: https://img.shields.io/conda/dn/bioconda/srnaminer.svg?style=flat
   :target: https://anaconda.org/bioconda/srnaminer
   :alt:   (downloads)
.. |docker_srnaminer| image:: https://quay.io/repository/biocontainers/srnaminer/status
   :target: https://quay.io/repository/biocontainers/srnaminer
.. _`srnaminer/tags`: https://quay.io/repository/biocontainers/srnaminer?tab=tags


.. raw:: html

    <script>
        var package = "srnaminer";
        var versions = ["1.1.0","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnaminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnaminer/README.html