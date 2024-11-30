:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bs_call'
.. highlight: bash

bs_call
=======

.. conda:recipe:: bs_call
   :replaces_section_title:
   :noindex:

   DNA methylation and variant Caller for Bisulfite Sequencing Data.

   :homepage: https://github.com/heathsc/bs_call
   :license: GPL-3.0
   :recipe: /`bs_call <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs_call>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs_call/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: bs_call

   |downloads_bs_call| |docker_bs_call|

   :versions:
      
      

      ``2.02-8``,  ``2.02-7``,  ``2.02-6``,  ``2.02-5``,  ``2.02-4``,  ``2.02-3``,  ``2.02-2``,  ``2.02-1``,  ``2.02-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmp: 
   :depends zlib: 
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

      mamba install bs_call

   and update with::

      mamba update bs_call

  To create a new environment, run::

      mamba create --name myenvname bs_call

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bs_call:<tag>

   (see `bs_call/tags`_ for valid values for ``<tag>``)


.. |downloads_bs_call| image:: https://img.shields.io/conda/dn/bioconda/bs_call.svg?style=flat
   :target: https://anaconda.org/bioconda/bs_call
   :alt:   (downloads)
.. |docker_bs_call| image:: https://quay.io/repository/biocontainers/bs_call/status
   :target: https://quay.io/repository/biocontainers/bs_call
.. _`bs_call/tags`: https://quay.io/repository/biocontainers/bs_call?tab=tags


.. raw:: html

    <script>
        var package = "bs_call";
        var versions = ["2.02","2.02","2.02","2.02","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bs_call/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bs_call/README.html