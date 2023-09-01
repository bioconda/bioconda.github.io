:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmratac'
.. highlight: bash

hmmratac
========

.. conda:recipe:: hmmratac
   :replaces_section_title:
   :noindex:

   Peak caller for ATAC\-seq data

   :homepage: https://github.com/LiuLabUB/HMMRATAC
   :license: GPLv3
   :recipe: /`hmmratac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmratac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmratac/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz533`

   


.. conda:package:: hmmratac

   |downloads_hmmratac| |docker_hmmratac|

   :versions:
      
      

      ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install hmmratac

   and update with::

      mamba update hmmratac

  To create a new environment, run::

      mamba create --name myenvname hmmratac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmmratac:<tag>

   (see `hmmratac/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmratac| image:: https://img.shields.io/conda/dn/bioconda/hmmratac.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmratac
   :alt:   (downloads)
.. |docker_hmmratac| image:: https://quay.io/repository/biocontainers/hmmratac/status
   :target: https://quay.io/repository/biocontainers/hmmratac
.. _`hmmratac/tags`: https://quay.io/repository/biocontainers/hmmratac?tab=tags


.. raw:: html

    <script>
        var package = "hmmratac";
        var versions = ["1.2.10","1.2.10","1.2.9","1.2.8","1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmratac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmratac/README.html