:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtf_to_genes'
.. highlight: bash

gtf_to_genes
============

.. conda:recipe:: gtf_to_genes
   :replaces_section_title:
   :noindex:

   Fast GTF parser

   :homepage: http://code.google.com/p/gtf-to-genes/
   :license: MIT / MIT License
   :recipe: /`gtf_to_genes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtf_to_genes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtf_to_genes/meta.yaml>`_

   


.. conda:package:: gtf_to_genes

   |downloads_gtf_to_genes| |docker_gtf_to_genes|

   :versions:
      
      

      ``1.40-2``,  ``1.40-1``,  ``1.40-0``

      

   
   :depends python: ``<3``
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

      mamba install gtf_to_genes

   and update with::

      mamba update gtf_to_genes

  To create a new environment, run::

      mamba create --name myenvname gtf_to_genes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtf_to_genes:<tag>

   (see `gtf_to_genes/tags`_ for valid values for ``<tag>``)


.. |downloads_gtf_to_genes| image:: https://img.shields.io/conda/dn/bioconda/gtf_to_genes.svg?style=flat
   :target: https://anaconda.org/bioconda/gtf_to_genes
   :alt:   (downloads)
.. |docker_gtf_to_genes| image:: https://quay.io/repository/biocontainers/gtf_to_genes/status
   :target: https://quay.io/repository/biocontainers/gtf_to_genes
.. _`gtf_to_genes/tags`: https://quay.io/repository/biocontainers/gtf_to_genes?tab=tags


.. raw:: html

    <script>
        var package = "gtf_to_genes";
        var versions = ["1.40","1.40","1.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtf_to_genes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtf_to_genes/README.html