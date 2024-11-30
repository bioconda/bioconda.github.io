:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-vcf'
.. highlight: bash

bio-vcf
=======

.. conda:recipe:: bio-vcf
   :replaces_section_title:
   :noindex:

   Smart VCF parser

   :homepage: https://github.com/vcflib/bio-vcf
   :license: MIT
   :recipe: /`bio-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-vcf/meta.yaml>`_

   


.. conda:package:: bio-vcf

   |downloads_bio-vcf| |docker_bio-vcf|

   :versions:
      
      

      ``0.9.5-0``,  ``0.9.2-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends ruby: ``2.6.6.*``
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

      mamba install bio-vcf

   and update with::

      mamba update bio-vcf

  To create a new environment, run::

      mamba create --name myenvname bio-vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio-vcf:<tag>

   (see `bio-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-vcf| image:: https://img.shields.io/conda/dn/bioconda/bio-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-vcf
   :alt:   (downloads)
.. |docker_bio-vcf| image:: https://quay.io/repository/biocontainers/bio-vcf/status
   :target: https://quay.io/repository/biocontainers/bio-vcf
.. _`bio-vcf/tags`: https://quay.io/repository/biocontainers/bio-vcf?tab=tags


.. raw:: html

    <script>
        var package = "bio-vcf";
        var versions = ["0.9.5","0.9.2","0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-vcf/README.html