:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conus'
.. highlight: bash

conus
=====

.. conda:recipe:: conus
   :replaces_section_title:
   :noindex:

   CONUS is an implementation of simple stochastic context\-free grammars for RNA secondary structure analysis.CONUS developed for exploring the consequences of different single sequence SCFG designs in predicting RNA secondary structure.

   :homepage: http://eddylab.org/software/conus/
   :license: file
   :recipe: /`conus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus/meta.yaml>`_
   :links: biotools: :biotools:`CONUS`, doi: :doi:`10.1186/1471-2105-5-71`

   


.. conda:package:: conus

   |downloads_conus| |docker_conus|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install conus

   and update with::

      mamba update conus

  To create a new environment, run::

      mamba create --name myenvname conus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conus:<tag>

   (see `conus/tags`_ for valid values for ``<tag>``)


.. |downloads_conus| image:: https://img.shields.io/conda/dn/bioconda/conus.svg?style=flat
   :target: https://anaconda.org/bioconda/conus
   :alt:   (downloads)
.. |docker_conus| image:: https://quay.io/repository/biocontainers/conus/status
   :target: https://quay.io/repository/biocontainers/conus
.. _`conus/tags`: https://quay.io/repository/biocontainers/conus?tab=tags


.. raw:: html

    <script>
        var package = "conus";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conus/README.html