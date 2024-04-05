:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtgrasp'
.. highlight: bash

mtgrasp
=======

.. conda:recipe:: mtgrasp
   :replaces_section_title:
   :noindex:

   reference\-grade de novo animal mitochondrial genome assembly and standardization

   :homepage: https://github.com/bcgsc/mtGrasp
   :license: GPL-3.0
   :recipe: /`mtgrasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtgrasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtgrasp/meta.yaml>`_

   


.. conda:package:: mtgrasp

   |downloads_mtgrasp| |docker_mtgrasp|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends abyss: 
   :depends biopython: 
   :depends blast: ``>=2.9.0``
   :depends bwa: 
   :depends mitos: ``>=2.1.7``
   :depends ntcard: 
   :depends ntjoin: 
   :depends pilon: 
   :depends python: 
   :depends samtools: 
   :depends seqtk: 
   :depends snakemake: 
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

      mamba install mtgrasp

   and update with::

      mamba update mtgrasp

  To create a new environment, run::

      mamba create --name myenvname mtgrasp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mtgrasp:<tag>

   (see `mtgrasp/tags`_ for valid values for ``<tag>``)


.. |downloads_mtgrasp| image:: https://img.shields.io/conda/dn/bioconda/mtgrasp.svg?style=flat
   :target: https://anaconda.org/bioconda/mtgrasp
   :alt:   (downloads)
.. |docker_mtgrasp| image:: https://quay.io/repository/biocontainers/mtgrasp/status
   :target: https://quay.io/repository/biocontainers/mtgrasp
.. _`mtgrasp/tags`: https://quay.io/repository/biocontainers/mtgrasp?tab=tags


.. raw:: html

    <script>
        var package = "mtgrasp";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtgrasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtgrasp/README.html