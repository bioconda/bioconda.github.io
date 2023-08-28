:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncotator'
.. highlight: bash

oncotator
=========

.. conda:recipe:: oncotator
   :replaces_section_title:
   :noindex:

   Oncotator is a tool for annotating human genomic point mutations and indels with data relevant to cancer researchers.

   :homepage: https://github.com/broadinstitute/oncotator
   :documentation: https://gatkforums.broadinstitute.org/gatk/categories/oncotator-documentation
   
   :license: Custom OSS
   :recipe: /`oncotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncotator/meta.yaml>`_
   :links: doi: :doi:`10.1002/humu.22771`

   


.. conda:package:: oncotator

   |downloads_oncotator| |docker_oncotator|

   :versions:
      
      

      ``1.9.9.0-2``,  ``1.9.9.0-1``,  ``1.9.9.0-0``

      

   
   :depends bcbio-gff: ``0.6.2``
   :depends biopython: ``1.66``
   :depends enum34: ``1.1.2``
   :depends futures: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends more-itertools: ``2.2``
   :depends natsort: ``4.0.4``
   :depends numpy: ``1.11.0``
   :depends pandas: ``0.18.0``
   :depends pysam: ``0.9.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-memcached: ``1.57``
   :depends pyvcf: ``0.6.8``
   :depends shove: ``0.6.6``
   :depends sqlalchemy: ``1.0.12``
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

      mamba install oncotator

   and update with::

      mamba update oncotator

  To create a new environment, run::

      mamba create --name myenvname oncotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oncotator:<tag>

   (see `oncotator/tags`_ for valid values for ``<tag>``)


.. |downloads_oncotator| image:: https://img.shields.io/conda/dn/bioconda/oncotator.svg?style=flat
   :target: https://anaconda.org/bioconda/oncotator
   :alt:   (downloads)
.. |docker_oncotator| image:: https://quay.io/repository/biocontainers/oncotator/status
   :target: https://quay.io/repository/biocontainers/oncotator
.. _`oncotator/tags`: https://quay.io/repository/biocontainers/oncotator?tab=tags


.. raw:: html

    <script>
        var package = "oncotator";
        var versions = ["1.9.9.0","1.9.9.0","1.9.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncotator/README.html