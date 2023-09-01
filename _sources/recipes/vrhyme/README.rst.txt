:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vrhyme'
.. highlight: bash

vrhyme
======

.. conda:recipe:: vrhyme
   :replaces_section_title:
   :noindex:

   Binning Virus Genomes from Metagenomes.

   :homepage: https://github.com/AnantharamanLab/vRhyme
   :license: GPL / GPL-3.0
   :recipe: /`vrhyme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vrhyme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vrhyme/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkac341`

   


.. conda:package:: vrhyme

   |downloads_vrhyme| |docker_vrhyme|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bowtie2: 
   :depends bwa: 
   :depends mash: 
   :depends mmseqs2: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends samtools: 
   :depends scikit-learn: 
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

      mamba install vrhyme

   and update with::

      mamba update vrhyme

  To create a new environment, run::

      mamba create --name myenvname vrhyme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vrhyme:<tag>

   (see `vrhyme/tags`_ for valid values for ``<tag>``)


.. |downloads_vrhyme| image:: https://img.shields.io/conda/dn/bioconda/vrhyme.svg?style=flat
   :target: https://anaconda.org/bioconda/vrhyme
   :alt:   (downloads)
.. |docker_vrhyme| image:: https://quay.io/repository/biocontainers/vrhyme/status
   :target: https://quay.io/repository/biocontainers/vrhyme
.. _`vrhyme/tags`: https://quay.io/repository/biocontainers/vrhyme?tab=tags


.. raw:: html

    <script>
        var package = "vrhyme";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vrhyme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vrhyme/README.html