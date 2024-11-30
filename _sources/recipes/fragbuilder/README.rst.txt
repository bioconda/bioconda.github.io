:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fragbuilder'
.. highlight: bash

fragbuilder
===========

.. conda:recipe:: fragbuilder
   :replaces_section_title:
   :noindex:

   FragBuilder is a tool to create\, setup and analyze QM calculations on peptides.

   :homepage: https://github.com/jensengroup/fragbuilder
   :license: GPL / GPL
   :recipe: /`fragbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragbuilder/meta.yaml>`_

   


.. conda:package:: fragbuilder

   |downloads_fragbuilder| |docker_fragbuilder|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends openbabel: ``2.4.1.*``
   :depends python: ``2.*``
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

      mamba install fragbuilder

   and update with::

      mamba update fragbuilder

  To create a new environment, run::

      mamba create --name myenvname fragbuilder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fragbuilder:<tag>

   (see `fragbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_fragbuilder| image:: https://img.shields.io/conda/dn/bioconda/fragbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/fragbuilder
   :alt:   (downloads)
.. |docker_fragbuilder| image:: https://quay.io/repository/biocontainers/fragbuilder/status
   :target: https://quay.io/repository/biocontainers/fragbuilder
.. _`fragbuilder/tags`: https://quay.io/repository/biocontainers/fragbuilder?tab=tags


.. raw:: html

    <script>
        var package = "fragbuilder";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fragbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fragbuilder/README.html