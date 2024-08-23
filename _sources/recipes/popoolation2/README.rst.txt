:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popoolation2'
.. highlight: bash

popoolation2
============

.. conda:recipe:: popoolation2
   :replaces_section_title:
   :noindex:

   PoPoolation2 allows to compare allele frequencies for SNPs between two or more populations and to identify significant differences.

   :homepage: https://sourceforge.net/projects/popoolation2
   :license: BSD / BSD-3
   :recipe: /`popoolation2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popoolation2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popoolation2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btr589`

   


.. conda:package:: popoolation2

   |downloads_popoolation2| |docker_popoolation2|

   :versions:
      
      

      ``1.201-0``

      

   
   :depends bwa: 
   :depends igv: 
   :depends openjdk: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-text-nsp: 
   :depends python: 
   :depends r-base: 
   :depends samtools: 
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

      mamba install popoolation2

   and update with::

      mamba update popoolation2

  To create a new environment, run::

      mamba create --name myenvname popoolation2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/popoolation2:<tag>

   (see `popoolation2/tags`_ for valid values for ``<tag>``)


.. |downloads_popoolation2| image:: https://img.shields.io/conda/dn/bioconda/popoolation2.svg?style=flat
   :target: https://anaconda.org/bioconda/popoolation2
   :alt:   (downloads)
.. |docker_popoolation2| image:: https://quay.io/repository/biocontainers/popoolation2/status
   :target: https://quay.io/repository/biocontainers/popoolation2
.. _`popoolation2/tags`: https://quay.io/repository/biocontainers/popoolation2?tab=tags


.. raw:: html

    <script>
        var package = "popoolation2";
        var versions = ["1.201"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popoolation2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popoolation2/README.html