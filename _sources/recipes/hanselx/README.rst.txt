:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hanselx'
.. highlight: bash

hanselx
=======

.. conda:recipe:: hanselx
   :replaces_section_title:
   :noindex:

   A graph\-inspired data structure for determining likely chains of sequences from breadcrumbs of evidence

   :homepage: https://github.com/SamStudio8/hansel
   :license: MIT
   :recipe: /`hanselx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hanselx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hanselx/meta.yaml>`_
   :links: doi: :doi:`10.1101/223404`

   


.. conda:package:: hanselx

   |downloads_hanselx| |docker_hanselx|

   :versions:
      
      

      ``0.0.92-1``,  ``0.0.92-0``,  ``0.0.81-1``,  ``0.0.81-0``

      

   
   :depends numpy: 
   :depends python: 
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

      mamba install hanselx

   and update with::

      mamba update hanselx

  To create a new environment, run::

      mamba create --name myenvname hanselx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hanselx:<tag>

   (see `hanselx/tags`_ for valid values for ``<tag>``)


.. |downloads_hanselx| image:: https://img.shields.io/conda/dn/bioconda/hanselx.svg?style=flat
   :target: https://anaconda.org/bioconda/hanselx
   :alt:   (downloads)
.. |docker_hanselx| image:: https://quay.io/repository/biocontainers/hanselx/status
   :target: https://quay.io/repository/biocontainers/hanselx
.. _`hanselx/tags`: https://quay.io/repository/biocontainers/hanselx?tab=tags


.. raw:: html

    <script>
        var package = "hanselx";
        var versions = ["0.0.92","0.0.92","0.0.81","0.0.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hanselx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hanselx/README.html