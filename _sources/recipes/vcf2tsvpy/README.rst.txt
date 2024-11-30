:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2tsvpy'
.. highlight: bash

vcf2tsvpy
=========

.. conda:recipe:: vcf2tsvpy
   :replaces_section_title:
   :noindex:

   Genomic VCF to tab\-separated values \(TSV\)

   :homepage: https://github.com/sigven/vcf2tsvpy
   :license: MIT
   :recipe: /`vcf2tsvpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2tsvpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2tsvpy/meta.yaml>`_

   


.. conda:package:: vcf2tsvpy

   |downloads_vcf2tsvpy| |docker_vcf2tsvpy|

   :versions:
      
      

      ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends cyvcf2: 
   :depends numpy: 
   :depends pip: 
   :depends python: 
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

      mamba install vcf2tsvpy

   and update with::

      mamba update vcf2tsvpy

  To create a new environment, run::

      mamba create --name myenvname vcf2tsvpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2tsvpy:<tag>

   (see `vcf2tsvpy/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2tsvpy| image:: https://img.shields.io/conda/dn/bioconda/vcf2tsvpy.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2tsvpy
   :alt:   (downloads)
.. |docker_vcf2tsvpy| image:: https://quay.io/repository/biocontainers/vcf2tsvpy/status
   :target: https://quay.io/repository/biocontainers/vcf2tsvpy
.. _`vcf2tsvpy/tags`: https://quay.io/repository/biocontainers/vcf2tsvpy?tab=tags


.. raw:: html

    <script>
        var package = "vcf2tsvpy";
        var versions = ["0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2tsvpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2tsvpy/README.html