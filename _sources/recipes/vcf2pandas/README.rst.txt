:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2pandas'
.. highlight: bash

vcf2pandas
==========

.. conda:recipe:: vcf2pandas
   :replaces_section_title:
   :noindex:

   Package to convert a VCF into a pandas dataframe.

   :homepage: https://github.com/trentzz/vcf2pandas
   :license: MIT / MIT
   :recipe: /`vcf2pandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2pandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2pandas/meta.yaml>`_

   


.. conda:package:: vcf2pandas

   |downloads_vcf2pandas| |docker_vcf2pandas|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends pandas: ``>=2.1.0``
   :depends pysam: ``>=0.22.1``
   :depends pytest: ``>=8.3.5``
   :depends python: ``>=3.10``
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

      mamba install vcf2pandas

   and update with::

      mamba update vcf2pandas

  To create a new environment, run::

      mamba create --name myenvname vcf2pandas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2pandas:<tag>

   (see `vcf2pandas/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2pandas| image:: https://img.shields.io/conda/dn/bioconda/vcf2pandas.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2pandas
   :alt:   (downloads)
.. |docker_vcf2pandas| image:: https://quay.io/repository/biocontainers/vcf2pandas/status
   :target: https://quay.io/repository/biocontainers/vcf2pandas
.. _`vcf2pandas/tags`: https://quay.io/repository/biocontainers/vcf2pandas?tab=tags


.. raw:: html

    <script>
        var package = "vcf2pandas";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2pandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2pandas/README.html