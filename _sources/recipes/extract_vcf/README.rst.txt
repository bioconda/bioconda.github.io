:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_vcf'
.. highlight: bash

extract_vcf
===========

.. conda:recipe:: extract_vcf
   :replaces_section_title:
   :noindex:

   Tool to extract information from vcf file.

   :homepage: https://github.com/moonso/extract_vcf
   :license: BSD / BSD
   :recipe: /`extract_vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_vcf/meta.yaml>`_

   


.. conda:package:: extract_vcf

   |downloads_extract_vcf| |docker_extract_vcf|

   :versions:
      
      

      ``0.5-0``

      

   
   :depends configobj: 
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

      mamba install extract_vcf

   and update with::

      mamba update extract_vcf

  To create a new environment, run::

      mamba create --name myenvname extract_vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/extract_vcf:<tag>

   (see `extract_vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_vcf| image:: https://img.shields.io/conda/dn/bioconda/extract_vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_vcf
   :alt:   (downloads)
.. |docker_extract_vcf| image:: https://quay.io/repository/biocontainers/extract_vcf/status
   :target: https://quay.io/repository/biocontainers/extract_vcf
.. _`extract_vcf/tags`: https://quay.io/repository/biocontainers/extract_vcf?tab=tags


.. raw:: html

    <script>
        var package = "extract_vcf";
        var versions = ["0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_vcf/README.html