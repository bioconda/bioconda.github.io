:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-mutator'
.. highlight: bash

snp-mutator
===========

.. conda:recipe:: snp-mutator
   :replaces_section_title:
   :noindex:

   Generate mutated sequence files from a reference genome.

   :homepage: https://github.com/CFSAN-Biostatistics/snp-mutator
   :license: BSD / BSD
   :recipe: /`snp-mutator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-mutator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-mutator/meta.yaml>`_

   


.. conda:package:: snp-mutator

   |downloads_snp-mutator| |docker_snp-mutator|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
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

      mamba install snp-mutator

   and update with::

      mamba update snp-mutator

  To create a new environment, run::

      mamba create --name myenvname snp-mutator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp-mutator:<tag>

   (see `snp-mutator/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-mutator| image:: https://img.shields.io/conda/dn/bioconda/snp-mutator.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-mutator
   :alt:   (downloads)
.. |docker_snp-mutator| image:: https://quay.io/repository/biocontainers/snp-mutator/status
   :target: https://quay.io/repository/biocontainers/snp-mutator
.. _`snp-mutator/tags`: https://quay.io/repository/biocontainers/snp-mutator?tab=tags


.. raw:: html

    <script>
        var package = "snp-mutator";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-mutator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-mutator/README.html