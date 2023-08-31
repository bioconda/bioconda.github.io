:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haptools'
.. highlight: bash

haptools
========

.. conda:recipe:: haptools
   :replaces_section_title:
   :noindex:

   Ancestry and haplotype aware simulation of genotypes and phenotypes for complex trait analysis

   :homepage: https://github.com/cast-genomics/haptools
   :documentation: https://haptools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`haptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haptools/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad104`, biotools: :biotools:`haptools`

   


.. conda:package:: haptools

   |downloads_haptools| |docker_haptools|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends click: ``>=8.0.3``
   :depends cyvcf2: ``>=0.30.14``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.20.0``
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.7,<3.11``
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

      mamba install haptools

   and update with::

      mamba update haptools

  To create a new environment, run::

      mamba create --name myenvname haptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haptools:<tag>

   (see `haptools/tags`_ for valid values for ``<tag>``)


.. |downloads_haptools| image:: https://img.shields.io/conda/dn/bioconda/haptools.svg?style=flat
   :target: https://anaconda.org/bioconda/haptools
   :alt:   (downloads)
.. |docker_haptools| image:: https://quay.io/repository/biocontainers/haptools/status
   :target: https://quay.io/repository/biocontainers/haptools
.. _`haptools/tags`: https://quay.io/repository/biocontainers/haptools?tab=tags


.. raw:: html

    <script>
        var package = "haptools";
        var versions = ["0.3.0","0.2.1","0.2.0","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haptools/README.html