:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocutils'
.. highlight: bash

biocutils
=========

.. conda:recipe:: biocutils
   :replaces_section_title:
   :noindex:

   Miscellaneous utilities for BiocPy\, mostly to mimic base functionality in R.

   :homepage: https://github.com/biocpy/biocutils
   :license: MIT
   :recipe: /`biocutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocutils/meta.yaml>`_

   


.. conda:package:: biocutils

   |downloads_biocutils| |docker_biocutils|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``

      

   
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

      mamba install biocutils

   and update with::

      mamba update biocutils

  To create a new environment, run::

      mamba create --name myenvname biocutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biocutils:<tag>

   (see `biocutils/tags`_ for valid values for ``<tag>``)


.. |downloads_biocutils| image:: https://img.shields.io/conda/dn/bioconda/biocutils.svg?style=flat
   :target: https://anaconda.org/bioconda/biocutils
   :alt:   (downloads)
.. |docker_biocutils| image:: https://quay.io/repository/biocontainers/biocutils/status
   :target: https://quay.io/repository/biocontainers/biocutils
.. _`biocutils/tags`: https://quay.io/repository/biocontainers/biocutils?tab=tags


.. raw:: html

    <script>
        var package = "biocutils";
        var versions = ["0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocutils/README.html