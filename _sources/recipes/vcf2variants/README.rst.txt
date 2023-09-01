:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2variants'
.. highlight: bash

vcf2variants
============

.. conda:recipe:: vcf2variants
   :replaces_section_title:
   :noindex:

   Convert vcf files to varda variant files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`vcf2variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants/meta.yaml>`_

   


.. conda:package:: vcf2variants

   |downloads_vcf2variants| |docker_vcf2variants|

   :versions:
      
      

      ``0.3-0``,  ``0.2-0``

      

   
   :depends cyvcf2: 
   :depends python: ``>=3.6``
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

      mamba install vcf2variants

   and update with::

      mamba update vcf2variants

  To create a new environment, run::

      mamba create --name myenvname vcf2variants

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2variants:<tag>

   (see `vcf2variants/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2variants| image:: https://img.shields.io/conda/dn/bioconda/vcf2variants.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2variants
   :alt:   (downloads)
.. |docker_vcf2variants| image:: https://quay.io/repository/biocontainers/vcf2variants/status
   :target: https://quay.io/repository/biocontainers/vcf2variants
.. _`vcf2variants/tags`: https://quay.io/repository/biocontainers/vcf2variants?tab=tags


.. raw:: html

    <script>
        var package = "vcf2variants";
        var versions = ["0.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2variants/README.html