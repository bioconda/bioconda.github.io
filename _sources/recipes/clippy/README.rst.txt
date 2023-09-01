:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clippy'
.. highlight: bash

clippy
======

.. conda:recipe:: clippy
   :replaces_section_title:
   :noindex:

   An intuitive and interactive peak caller for CLIP data

   :homepage: https://github.com/ulelab/clippy
   :license: GPL-3.0-only
   :recipe: /`clippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy/meta.yaml>`_

   


.. conda:package:: clippy

   |downloads_clippy| |docker_clippy|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-2``,  ``1.3.1-0``

      

   
   :depends bedtools: ``2.26.0.*``
   :depends dash: ``1.20.0.*``
   :depends dash-bootstrap-components: ``0.11.3.*``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.19.0,<1.20.3``
   :depends numpy-base: ``>=1.19.0,<1.20.3``
   :depends numpydoc: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends werkzeug: ``2.0.0.*``
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

      mamba install clippy

   and update with::

      mamba update clippy

  To create a new environment, run::

      mamba create --name myenvname clippy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clippy:<tag>

   (see `clippy/tags`_ for valid values for ``<tag>``)


.. |downloads_clippy| image:: https://img.shields.io/conda/dn/bioconda/clippy.svg?style=flat
   :target: https://anaconda.org/bioconda/clippy
   :alt:   (downloads)
.. |docker_clippy| image:: https://quay.io/repository/biocontainers/clippy/status
   :target: https://quay.io/repository/biocontainers/clippy
.. _`clippy/tags`: https://quay.io/repository/biocontainers/clippy?tab=tags


.. raw:: html

    <script>
        var package = "clippy";
        var versions = ["1.5.0","1.4.1","1.4.1","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clippy/README.html