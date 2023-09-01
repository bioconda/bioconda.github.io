:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogtriangles'
.. highlight: bash

cogtriangles
============

.. conda:recipe:: cogtriangles
   :replaces_section_title:
   :noindex:

   low\-polynomial algorithm for assembling clusters of orthologous groups from intergenomic symmetric best matches

   :homepage: https://ftp.ncbi.nih.gov/pub/wolf/COGs/COGsoft/
   :license: Public Domain
   :recipe: /`cogtriangles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles/meta.yaml>`_
   :links: biotools: :biotools:`cogtriangles`, doi: :doi:`10.1093/bioinformatics/btq229`

   


.. conda:package:: cogtriangles

   |downloads_cogtriangles| |docker_cogtriangles|

   :versions:
      
      

      ``2012.04-2``,  ``2012.04-1``,  ``2012.04-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install cogtriangles

   and update with::

      mamba update cogtriangles

  To create a new environment, run::

      mamba create --name myenvname cogtriangles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cogtriangles:<tag>

   (see `cogtriangles/tags`_ for valid values for ``<tag>``)


.. |downloads_cogtriangles| image:: https://img.shields.io/conda/dn/bioconda/cogtriangles.svg?style=flat
   :target: https://anaconda.org/bioconda/cogtriangles
   :alt:   (downloads)
.. |docker_cogtriangles| image:: https://quay.io/repository/biocontainers/cogtriangles/status
   :target: https://quay.io/repository/biocontainers/cogtriangles
.. _`cogtriangles/tags`: https://quay.io/repository/biocontainers/cogtriangles?tab=tags


.. raw:: html

    <script>
        var package = "cogtriangles";
        var versions = ["2012.04","2012.04","2012.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogtriangles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogtriangles/README.html