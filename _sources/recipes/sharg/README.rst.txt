:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sharg'
.. highlight: bash

sharg
=====

.. conda:recipe:: sharg
   :replaces_section_title:
   :noindex:

   A modern argument parser for C\+\+ tools.

   :homepage: https://github.com/seqan/sharg-parser
   :documentation: https://docs.seqan.de/sharg/1.1.1/index.html
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sharg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharg/meta.yaml>`_

   


.. conda:package:: sharg

   |downloads_sharg| |docker_sharg|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends yaml-cpp: ``>=0.8.0,<0.9.0a0``
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

      mamba install sharg

   and update with::

      mamba update sharg

  To create a new environment, run::

      mamba create --name myenvname sharg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sharg:<tag>

   (see `sharg/tags`_ for valid values for ``<tag>``)


.. |downloads_sharg| image:: https://img.shields.io/conda/dn/bioconda/sharg.svg?style=flat
   :target: https://anaconda.org/bioconda/sharg
   :alt:   (downloads)
.. |docker_sharg| image:: https://quay.io/repository/biocontainers/sharg/status
   :target: https://quay.io/repository/biocontainers/sharg
.. _`sharg/tags`: https://quay.io/repository/biocontainers/sharg?tab=tags


.. raw:: html

    <script>
        var package = "sharg";
        var versions = ["1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sharg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sharg/README.html