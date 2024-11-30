:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rop'
.. highlight: bash

rop
===

.. conda:recipe:: rop
   :replaces_section_title:
   :noindex:

   The Read Origin Protocol \(ROP\) is a computational protocol that aims to discover the source of all reads\, including those originating from repeat sequences\, recombinant B and T cell receptors\, and microbial communities. 

   :homepage: https://github.com/smangul1/rop
   :license: GPL-3.0
   :recipe: /`rop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rop/meta.yaml>`_

   


.. conda:package:: rop

   |downloads_rop| |docker_rop|

   :versions:
      
      

      ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends fastx_toolkit: 
   :depends intervaltree: 
   :depends kmer-jellyfish: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tophat: 
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

      mamba install rop

   and update with::

      mamba update rop

  To create a new environment, run::

      mamba create --name myenvname rop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rop:<tag>

   (see `rop/tags`_ for valid values for ``<tag>``)


.. |downloads_rop| image:: https://img.shields.io/conda/dn/bioconda/rop.svg?style=flat
   :target: https://anaconda.org/bioconda/rop
   :alt:   (downloads)
.. |docker_rop| image:: https://quay.io/repository/biocontainers/rop/status
   :target: https://quay.io/repository/biocontainers/rop
.. _`rop/tags`: https://quay.io/repository/biocontainers/rop?tab=tags


.. raw:: html

    <script>
        var package = "rop";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rop/README.html