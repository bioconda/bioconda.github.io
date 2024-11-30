:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flair'
.. highlight: bash

flair
=====

.. conda:recipe:: flair
   :replaces_section_title:
   :noindex:

   Correction\, isoform definition\, and alternative splicing analysis of noisy reads \(ONT and PacBio\).

   :homepage: https://github.com/BrooksLabUCSC/flair
   :license: BSD-3
   :recipe: /`flair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flair/meta.yaml>`_
   :links: doi: :doi:`10.1101/410183`

   


.. conda:package:: flair

   |downloads_flair| |docker_flair|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.5-4``,  ``1.5-3``,  ``1.4-0``

      

   
   :depends bedtools: 
   :depends bioconductor-apeglm: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-drimseq: 
   :depends bioconductor-stager: 
   :depends mappy: ``2.24.*``
   :depends matplotlib-base: 
   :depends minimap2: ``2.24.*``
   :depends ncls: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends r-ggplot2: 
   :depends r-lazyeval: 
   :depends r-qqman: 
   :depends rpy2: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends tqdm: 
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

      mamba install flair

   and update with::

      mamba update flair

  To create a new environment, run::

      mamba create --name myenvname flair

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flair:<tag>

   (see `flair/tags`_ for valid values for ``<tag>``)


.. |downloads_flair| image:: https://img.shields.io/conda/dn/bioconda/flair.svg?style=flat
   :target: https://anaconda.org/bioconda/flair
   :alt:   (downloads)
.. |docker_flair| image:: https://quay.io/repository/biocontainers/flair/status
   :target: https://quay.io/repository/biocontainers/flair
.. _`flair/tags`: https://quay.io/repository/biocontainers/flair?tab=tags


.. raw:: html

    <script>
        var package = "flair";
        var versions = ["2.0.0","2.0.0","1.7.0","1.7.0","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flair/README.html