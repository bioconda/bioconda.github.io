:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-fastq-provider'
.. highlight: bash

atlas-fastq-provider
====================

.. conda:recipe:: atlas-fastq-provider
   :replaces_section_title:
   :noindex:

   A package to provide FASTQs via download or file system linking.

   :homepage: https://github.com/ebi-gene-expression-group/atlas-fastq-provider
   :license: GPL3 / GPL-3
   :recipe: /`atlas-fastq-provider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-fastq-provider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-fastq-provider/meta.yaml>`_

   


.. conda:package:: atlas-fastq-provider

   |downloads_atlas-fastq-provider| |docker_atlas-fastq-provider|

   :versions:
      
      

      ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends bash: 
   :depends coreutils: 
   :depends fastq_utils: 
   :depends grep: 
   :depends sra-tools: ``2.11.0.*``
   :depends wget: 
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

      mamba install atlas-fastq-provider

   and update with::

      mamba update atlas-fastq-provider

  To create a new environment, run::

      mamba create --name myenvname atlas-fastq-provider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atlas-fastq-provider:<tag>

   (see `atlas-fastq-provider/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-fastq-provider| image:: https://img.shields.io/conda/dn/bioconda/atlas-fastq-provider.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-fastq-provider
   :alt:   (downloads)
.. |docker_atlas-fastq-provider| image:: https://quay.io/repository/biocontainers/atlas-fastq-provider/status
   :target: https://quay.io/repository/biocontainers/atlas-fastq-provider
.. _`atlas-fastq-provider/tags`: https://quay.io/repository/biocontainers/atlas-fastq-provider?tab=tags


.. raw:: html

    <script>
        var package = "atlas-fastq-provider";
        var versions = ["0.4.7","0.4.6","0.4.5","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-fastq-provider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-fastq-provider/README.html