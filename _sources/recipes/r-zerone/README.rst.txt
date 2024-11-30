:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-zerone'
.. highlight: bash

r-zerone
========

.. conda:recipe:: r-zerone
   :replaces_section_title:
   :noindex:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL / GPL-3
   :recipe: /`r-zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone/meta.yaml>`_

   


.. conda:package:: r-zerone

   |downloads_r-zerone| |docker_r-zerone|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
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

      mamba install r-zerone

   and update with::

      mamba update r-zerone

  To create a new environment, run::

      mamba create --name myenvname r-zerone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-zerone:<tag>

   (see `r-zerone/tags`_ for valid values for ``<tag>``)


.. |downloads_r-zerone| image:: https://img.shields.io/conda/dn/bioconda/r-zerone.svg?style=flat
   :target: https://anaconda.org/bioconda/r-zerone
   :alt:   (downloads)
.. |docker_r-zerone| image:: https://quay.io/repository/biocontainers/r-zerone/status
   :target: https://quay.io/repository/biocontainers/r-zerone
.. _`r-zerone/tags`: https://quay.io/repository/biocontainers/r-zerone?tab=tags


.. raw:: html

    <script>
        var package = "r-zerone";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-zerone/README.html