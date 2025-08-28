:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phast'
.. highlight: bash

phast
=====

.. conda:recipe:: phast
   :replaces_section_title:
   :noindex:

   PHAST is a freely available software package for comparative and evolutionary genomics.

   :homepage: http://compgen.cshl.edu/phast/
   :license: BSD
   :recipe: /`phast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phast/meta.yaml>`_

   


.. conda:package:: phast

   |downloads_phast| |docker_phast|

   :versions:
      
      

      ``1.5-7``,  ``1.5-6``,  ``1.5-5``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install phast

   and update with::

      mamba update phast

  To create a new environment, run::

      mamba create --name myenvname phast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phast:<tag>

   (see `phast/tags`_ for valid values for ``<tag>``)


.. |downloads_phast| image:: https://img.shields.io/conda/dn/bioconda/phast.svg?style=flat
   :target: https://anaconda.org/bioconda/phast
   :alt:   (downloads)
.. |docker_phast| image:: https://quay.io/repository/biocontainers/phast/status
   :target: https://quay.io/repository/biocontainers/phast
.. _`phast/tags`: https://quay.io/repository/biocontainers/phast?tab=tags


.. raw:: html

    <script>
        var package = "phast";
        var versions = ["1.5","1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phast/README.html