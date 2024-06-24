:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atac'
.. highlight: bash

atac
====

.. conda:recipe:: atac
   :replaces_section_title:
   :noindex:

   ATAC is a computational process for comparative mapping between two genome assemblies\, or between two different genomes

   :homepage: http://kmer.sourceforge.net/wiki/index.php/Overview_of_the_ATAC_process
   :license: GPL
   :recipe: /`atac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atac/meta.yaml>`_
   :links: biotools: :biotools:`atac`

   


.. conda:package:: atac

   |downloads_atac| |docker_atac|

   :versions:
      
      

      ``2008-6``,  ``2008-5``,  ``2008-4``,  ``2008-3``,  ``2008-2``,  ``2008-1``,  ``2008-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install atac

   and update with::

      mamba update atac

  To create a new environment, run::

      mamba create --name myenvname atac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atac:<tag>

   (see `atac/tags`_ for valid values for ``<tag>``)


.. |downloads_atac| image:: https://img.shields.io/conda/dn/bioconda/atac.svg?style=flat
   :target: https://anaconda.org/bioconda/atac
   :alt:   (downloads)
.. |docker_atac| image:: https://quay.io/repository/biocontainers/atac/status
   :target: https://quay.io/repository/biocontainers/atac
.. _`atac/tags`: https://quay.io/repository/biocontainers/atac?tab=tags


.. raw:: html

    <script>
        var package = "atac";
        var versions = ["2008","2008","2008","2008","2008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atac/README.html