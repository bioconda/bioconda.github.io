:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chisel'
.. highlight: bash

chisel
======

.. conda:recipe:: chisel
   :replaces_section_title:
   :noindex:

   Copy\-number Haplotype Inference in Single\-cell by Evolutionary Links

   :homepage: https://github.com/raphael-group/chisel
   :license: BSD-3
   :recipe: /`chisel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chisel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chisel/meta.yaml>`_

   CHISEL is an algorithm to infer allele\- and haplotype\-specififc copy numbers in individual cells from low\-coverage
   single\-cell DNA sequencing data. Specifically\, the current implementation of CHISEL has been designed to be diretly
   applied to ultra\-low coverage single\-cell DNA sequencing data from 10X Genomics CNV solution\, however CHISEL will
   be adapted to the data generated by any other available technology \(e.g. DLP\+\).


.. conda:package:: chisel

   |downloads_chisel| |docker_chisel|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.0-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      

   
   :depends art: 
   :depends bcftools: 
   :depends bwa: 
   :depends gawk: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.1``
   :depends pandas: 
   :depends python: ``<3``
   :depends samtools: 
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.7.1,<=0.9.0``
   :depends statsmodels: ``<=0.10.1``
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

      mamba install chisel

   and update with::

      mamba update chisel

  To create a new environment, run::

      mamba create --name myenvname chisel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chisel:<tag>

   (see `chisel/tags`_ for valid values for ``<tag>``)


.. |downloads_chisel| image:: https://img.shields.io/conda/dn/bioconda/chisel.svg?style=flat
   :target: https://anaconda.org/bioconda/chisel
   :alt:   (downloads)
.. |docker_chisel| image:: https://quay.io/repository/biocontainers/chisel/status
   :target: https://quay.io/repository/biocontainers/chisel
.. _`chisel/tags`: https://quay.io/repository/biocontainers/chisel?tab=tags


.. raw:: html

    <script>
        var package = "chisel";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chisel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chisel/README.html