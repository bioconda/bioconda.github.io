:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'array-as-vcf'
.. highlight: bash

array-as-vcf
============

.. conda:recipe:: array-as-vcf
   :replaces_section_title:
   :noindex:

   Convert SNP array to VCF

   :homepage: https://github.com/LUMC/array-as-vcf
   :license: MIT / MIT
   :recipe: /`array-as-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf/meta.yaml>`_

   


.. conda:package:: array-as-vcf

   |downloads_array-as-vcf| |docker_array-as-vcf|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install array-as-vcf

   and update with::

      mamba update array-as-vcf

  To create a new environment, run::

      mamba create --name myenvname array-as-vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/array-as-vcf:<tag>

   (see `array-as-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_array-as-vcf| image:: https://img.shields.io/conda/dn/bioconda/array-as-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/array-as-vcf
   :alt:   (downloads)
.. |docker_array-as-vcf| image:: https://quay.io/repository/biocontainers/array-as-vcf/status
   :target: https://quay.io/repository/biocontainers/array-as-vcf
.. _`array-as-vcf/tags`: https://quay.io/repository/biocontainers/array-as-vcf?tab=tags


.. raw:: html

    <script>
        var package = "array-as-vcf";
        var versions = ["1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/array-as-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/array-as-vcf/README.html