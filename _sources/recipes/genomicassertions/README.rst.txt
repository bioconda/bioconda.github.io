:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomicassertions'
.. highlight: bash

genomicassertions
=================

.. conda:recipe:: genomicassertions
   :replaces_section_title:
   :noindex:

   A package to test common files in genomics \(.vcf.gz\, .bam\)

   :homepage: https://github.com/dakl/genomicassertions
   :license: MIT
   :recipe: /`genomicassertions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicassertions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicassertions/meta.yaml>`_

   


.. conda:package:: genomicassertions

   |downloads_genomicassertions| |docker_genomicassertions|

   :versions:
      
      

      ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends pysam: 
   :depends python: 
   :depends pyvcf: 
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

      mamba install genomicassertions

   and update with::

      mamba update genomicassertions

  To create a new environment, run::

      mamba create --name myenvname genomicassertions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomicassertions:<tag>

   (see `genomicassertions/tags`_ for valid values for ``<tag>``)


.. |downloads_genomicassertions| image:: https://img.shields.io/conda/dn/bioconda/genomicassertions.svg?style=flat
   :target: https://anaconda.org/bioconda/genomicassertions
   :alt:   (downloads)
.. |docker_genomicassertions| image:: https://quay.io/repository/biocontainers/genomicassertions/status
   :target: https://quay.io/repository/biocontainers/genomicassertions
.. _`genomicassertions/tags`: https://quay.io/repository/biocontainers/genomicassertions?tab=tags


.. raw:: html

    <script>
        var package = "genomicassertions";
        var versions = ["0.2.5","0.2.5","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicassertions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicassertions/README.html