:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'd4tools'
.. highlight: bash

d4tools
=======

.. conda:recipe:: d4tools
   :replaces_section_title:
   :noindex:

   The D4 command line utility program


   :homepage: https://github.com/38/d4-format
   :license: MIT
   :recipe: /`d4tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools/meta.yaml>`_

   


.. conda:package:: d4tools

   |downloads_d4tools| |docker_d4tools|

   :versions:
      
      

      ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends starcode: 
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

      mamba install d4tools

   and update with::

      mamba update d4tools

  To create a new environment, run::

      mamba create --name myenvname d4tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/d4tools:<tag>

   (see `d4tools/tags`_ for valid values for ``<tag>``)


.. |downloads_d4tools| image:: https://img.shields.io/conda/dn/bioconda/d4tools.svg?style=flat
   :target: https://anaconda.org/bioconda/d4tools
   :alt:   (downloads)
.. |docker_d4tools| image:: https://quay.io/repository/biocontainers/d4tools/status
   :target: https://quay.io/repository/biocontainers/d4tools
.. _`d4tools/tags`: https://quay.io/repository/biocontainers/d4tools?tab=tags


.. raw:: html

    <script>
        var package = "d4tools";
        var versions = ["0.3.8","0.3.8","0.3.7","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/d4tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/d4tools/README.html