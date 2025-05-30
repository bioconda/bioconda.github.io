:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'disty'
.. highlight: bash

disty
=====

.. conda:recipe:: disty
   :replaces_section_title:
   :noindex:

   Disty McMatrixface \- compute a distance matrix from a core genome alignment file.

   :homepage: https://github.com/c2-d2/disty
   :license: MIT
   :recipe: /`disty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty/meta.yaml>`_

   


.. conda:package:: disty

   |downloads_disty| |docker_disty|

   :versions:
      
      

      ``0.1.0-8``,  ``0.1.0-7``,  ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install disty

   and update with::

      mamba update disty

  To create a new environment, run::

      mamba create --name myenvname disty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/disty:<tag>

   (see `disty/tags`_ for valid values for ``<tag>``)


.. |downloads_disty| image:: https://img.shields.io/conda/dn/bioconda/disty.svg?style=flat
   :target: https://anaconda.org/bioconda/disty
   :alt:   (downloads)
.. |docker_disty| image:: https://quay.io/repository/biocontainers/disty/status
   :target: https://quay.io/repository/biocontainers/disty
.. _`disty/tags`: https://quay.io/repository/biocontainers/disty?tab=tags


.. raw:: html

    <script>
        var package = "disty";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disty/README.html