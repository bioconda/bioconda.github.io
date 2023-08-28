:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simka'
.. highlight: bash

simka
=====

.. conda:recipe:: simka
   :replaces_section_title:
   :noindex:

   Simka and simkaMin are de novo comparative metagenomics tools. Simka represents each dataset as a k\-mer spectrum and computes several classical ecological distances between them. SimkaMin outputs approximate \(but very similar\) results by subsampling the kmer space and requires much less computational resources.

   :homepage: https://github.com/GATB/simka
   :license: AGPL-3.0-or-later
   :recipe: /`simka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simka/meta.yaml>`_
   :links: biotools: :biotools:`Simka`, doi: :doi:`10.7717/peerj-cs.94`, doi: :doi:`10.1093/bioinformatics/btz685`

   


.. conda:package:: simka

   |downloads_simka| |docker_simka|

   :versions:
      
      

      ``1.5.3-4``,  ``1.5.3-3``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: 
   :depends zlib: 
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

      mamba install simka

   and update with::

      mamba update simka

  To create a new environment, run::

      mamba create --name myenvname simka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simka:<tag>

   (see `simka/tags`_ for valid values for ``<tag>``)


.. |downloads_simka| image:: https://img.shields.io/conda/dn/bioconda/simka.svg?style=flat
   :target: https://anaconda.org/bioconda/simka
   :alt:   (downloads)
.. |docker_simka| image:: https://quay.io/repository/biocontainers/simka/status
   :target: https://quay.io/repository/biocontainers/simka
.. _`simka/tags`: https://quay.io/repository/biocontainers/simka?tab=tags


.. raw:: html

    <script>
        var package = "simka";
        var versions = ["1.5.3","1.5.3","1.5.3","1.5.3","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simka/README.html