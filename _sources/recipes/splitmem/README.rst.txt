:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitmem'
.. highlight: bash

splitmem
========

.. conda:recipe:: splitmem
   :replaces_section_title:
   :noindex:

   Graphical pan\-genome analysis with suffix skips

   :homepage: https://sourceforge.net/projects/splitmem/
   :license: Apache License V2.0
   :recipe: /`splitmem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem/meta.yaml>`_

   


.. conda:package:: splitmem

   |downloads_splitmem| |docker_splitmem|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install splitmem

   and update with::

      mamba update splitmem

  To create a new environment, run::

      mamba create --name myenvname splitmem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/splitmem:<tag>

   (see `splitmem/tags`_ for valid values for ``<tag>``)


.. |downloads_splitmem| image:: https://img.shields.io/conda/dn/bioconda/splitmem.svg?style=flat
   :target: https://anaconda.org/bioconda/splitmem
   :alt:   (downloads)
.. |docker_splitmem| image:: https://quay.io/repository/biocontainers/splitmem/status
   :target: https://quay.io/repository/biocontainers/splitmem
.. _`splitmem/tags`: https://quay.io/repository/biocontainers/splitmem?tab=tags


.. raw:: html

    <script>
        var package = "splitmem";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitmem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitmem/README.html