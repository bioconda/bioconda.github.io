:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phaser'
.. highlight: bash

phaser
======

.. conda:recipe:: phaser
   :replaces_section_title:
   :noindex:

   phASEr performs haplotype phasing and provides measures of haplotypic expression for RNA based assays.

   :homepage: https://github.com/secastel/phaser
   :license: file
   :recipe: /`phaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phaser/meta.yaml>`_

   


.. conda:package:: phaser

   |downloads_phaser| |docker_phaser|

   :versions:
      
      

      ``0.1.1ad5f89-0``

      

   
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends pyvcf: 
   :depends scipy: 
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

      mamba install phaser

   and update with::

      mamba update phaser

  To create a new environment, run::

      mamba create --name myenvname phaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phaser:<tag>

   (see `phaser/tags`_ for valid values for ``<tag>``)


.. |downloads_phaser| image:: https://img.shields.io/conda/dn/bioconda/phaser.svg?style=flat
   :target: https://anaconda.org/bioconda/phaser
   :alt:   (downloads)
.. |docker_phaser| image:: https://quay.io/repository/biocontainers/phaser/status
   :target: https://quay.io/repository/biocontainers/phaser
.. _`phaser/tags`: https://quay.io/repository/biocontainers/phaser?tab=tags


.. raw:: html

    <script>
        var package = "phaser";
        var versions = ["0.1.1ad5f89"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phaser/README.html