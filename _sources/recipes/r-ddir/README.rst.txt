:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ddir'
.. highlight: bash

r-ddir
======

.. conda:recipe:: r-ddir
   :replaces_section_title:
   :noindex:

   An R package to access to Omics Discovery Index API

   :homepage: https://github.com/OmicsDI/ddiR
   :license: GPL2
   :recipe: /`r-ddir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ddir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ddir/meta.yaml>`_

   


.. conda:package:: r-ddir

   |downloads_r-ddir| |docker_r-ddir|

   :versions:
      
      

      ``0.0.3-5``,  ``0.0.3-4``,  ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjsonio: 
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

      mamba install r-ddir

   and update with::

      mamba update r-ddir

  To create a new environment, run::

      mamba create --name myenvname r-ddir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ddir:<tag>

   (see `r-ddir/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ddir| image:: https://img.shields.io/conda/dn/bioconda/r-ddir.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ddir
   :alt:   (downloads)
.. |docker_r-ddir| image:: https://quay.io/repository/biocontainers/r-ddir/status
   :target: https://quay.io/repository/biocontainers/r-ddir
.. _`r-ddir/tags`: https://quay.io/repository/biocontainers/r-ddir?tab=tags


.. raw:: html

    <script>
        var package = "r-ddir";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ddir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ddir/README.html