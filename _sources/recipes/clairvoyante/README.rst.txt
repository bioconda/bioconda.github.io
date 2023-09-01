:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clairvoyante'
.. highlight: bash

clairvoyante
============

.. conda:recipe:: clairvoyante
   :replaces_section_title:
   :noindex:

   Identifying the variants of DNA sequences sensitively and accurately is an important but challenging task in the field of genomics. This task is particularly difficult when dealing with Single Molecule Sequencing\, the error rate of which is still tens to hundreds of times higher than Next Generation Sequencing. With the increasing prevalence of Single Molecule Sequencing\, an efficient variant caller will not only expedite basic research but also enable various downstream applications. To meet this demand\, we developed Clairvoyante\, a multi\-task five\-layer convolutional neural network model for predicting variant type\, zygosity\, alternative allele and Indel length. On NA12878\, Clairvoyante achieved 99.73\%\, 97.68\% and 95.36\% accuracy on known variants\, and achieved 98.65\%\, 92.57\%\, 77.89\% F1 score on the whole genome\, in Illumina\, PacBio\, and Oxford Nanopore data\, respectively. Training Clairvoyante with a sample and call variant on another shows that Clairvoyante is sample agnostic and general for variant calling. A slim version of Clairvoyante with reduced model parameters produced a much lower F1\, suggesting the full model\'s power in disentangling subtle details in read alignment. Clairvoyante is the first method for Single Molecule Sequencing to finish a whole genome variant calling in two hours on a 28 CPU\-core machine\, with top\-tier accuracy and sensitivity. A toolset was developed to train\, utilize and visualize the Clairvoyante model easily\, and is publically available here is this repo.

   :homepage: https://github.com/aquaskyline/Clairvoyante
   :license: AGPLv3
   :recipe: /`clairvoyante <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clairvoyante>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clairvoyante/meta.yaml>`_

   


.. conda:package:: clairvoyante

   |downloads_clairvoyante| |docker_clairvoyante|

   :versions:
      
      

      ``1.02-2``,  ``1.02-1``,  ``1.02-0``,  ``1.01-1``,  ``1.01-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends intervaltree: ``2.1.0``
   :depends numpy: ``1.16.2``
   :depends pypy2.7: ``5.10.0``
   :depends python: ``2.7.*``
   :depends python-blosc: ``1.8.1``
   :depends tensorflow: ``1.9.0.*``
   :depends zlib: ``1.2.11.*``
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

      mamba install clairvoyante

   and update with::

      mamba update clairvoyante

  To create a new environment, run::

      mamba create --name myenvname clairvoyante

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clairvoyante:<tag>

   (see `clairvoyante/tags`_ for valid values for ``<tag>``)


.. |downloads_clairvoyante| image:: https://img.shields.io/conda/dn/bioconda/clairvoyante.svg?style=flat
   :target: https://anaconda.org/bioconda/clairvoyante
   :alt:   (downloads)
.. |docker_clairvoyante| image:: https://quay.io/repository/biocontainers/clairvoyante/status
   :target: https://quay.io/repository/biocontainers/clairvoyante
.. _`clairvoyante/tags`: https://quay.io/repository/biocontainers/clairvoyante?tab=tags


.. raw:: html

    <script>
        var package = "clairvoyante";
        var versions = ["1.02","1.02","1.02","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clairvoyante/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clairvoyante/README.html