:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-variants'
.. highlight: bash

bactopia-variants
=================

.. conda:recipe:: bactopia-variants
   :replaces_section_title:
   :noindex:

   Methods used by Bactopia for SNP and InDel analysis

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-variants/
   :license: MIT
   :recipe: /`bactopia-variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-variants/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-variants

   |downloads_bactopia-variants| |docker_bactopia-variants|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends coreutils: 
   :depends gsl: ``2.6.*``
   :depends openjdk: ``11.0.15.*``
   :depends pigz: 
   :depends python: ``>=3.6,<3.11``
   :depends rename: 
   :depends sed: 
   :depends snippy: ``>=4.6.0``
   :depends snpeff: ``>=4.3,<5``
   :depends vcf-annotator: ``>=0.7``
   :depends vcflib: ``>=1.0.0_rc3,<=1.0.2``
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

      mamba install bactopia-variants

   and update with::

      mamba update bactopia-variants

  To create a new environment, run::

      mamba create --name myenvname bactopia-variants

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia-variants:<tag>

   (see `bactopia-variants/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-variants| image:: https://img.shields.io/conda/dn/bioconda/bactopia-variants.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-variants
   :alt:   (downloads)
.. |docker_bactopia-variants| image:: https://quay.io/repository/biocontainers/bactopia-variants/status
   :target: https://quay.io/repository/biocontainers/bactopia-variants
.. _`bactopia-variants/tags`: https://quay.io/repository/biocontainers/bactopia-variants?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-variants";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-variants/README.html