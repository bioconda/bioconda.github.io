:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifyidintensity'
.. highlight: bash

verifyidintensity
=================

.. conda:recipe:: verifyidintensity
   :replaces_section_title:
   :noindex:

   verifyIDintensity detects and estimates sample contamination using intensity data from Illumina genotyping arrays.

   :homepage: https://genome.sph.umich.edu/wiki/VerifyIDintensity
   :license: GPL3
   :recipe: /`verifyidintensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ajhg.2012.09.004`

   


.. conda:package:: verifyidintensity

   |downloads_verifyidintensity| |docker_verifyidintensity|

   :versions:
      
      

      ``0.0.1-6``,  ``0.0.1-5``,  ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends tclap: 
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

      mamba install verifyidintensity

   and update with::

      mamba update verifyidintensity

  To create a new environment, run::

      mamba create --name myenvname verifyidintensity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verifyidintensity:<tag>

   (see `verifyidintensity/tags`_ for valid values for ``<tag>``)


.. |downloads_verifyidintensity| image:: https://img.shields.io/conda/dn/bioconda/verifyidintensity.svg?style=flat
   :target: https://anaconda.org/bioconda/verifyidintensity
   :alt:   (downloads)
.. |docker_verifyidintensity| image:: https://quay.io/repository/biocontainers/verifyidintensity/status
   :target: https://quay.io/repository/biocontainers/verifyidintensity
.. _`verifyidintensity/tags`: https://quay.io/repository/biocontainers/verifyidintensity?tab=tags


.. raw:: html

    <script>
        var package = "verifyidintensity";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifyidintensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifyidintensity/README.html