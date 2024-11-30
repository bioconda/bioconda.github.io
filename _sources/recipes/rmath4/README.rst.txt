:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmath4'
.. highlight: bash

rmath4
======

.. conda:recipe:: rmath4
   :replaces_section_title:
   :noindex:

   standalone Rmath library from R

   :homepage: https://github.com/alex-wave/Rmath-python
   :license: GPL-2.0
   :recipe: /`rmath4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmath4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmath4/meta.yaml>`_

   


.. conda:package:: rmath4

   |downloads_rmath4| |docker_rmath4|

   :versions:
      
      

      ``4.3.1-1``,  ``4.3.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install rmath4

   and update with::

      mamba update rmath4

  To create a new environment, run::

      mamba create --name myenvname rmath4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmath4:<tag>

   (see `rmath4/tags`_ for valid values for ``<tag>``)


.. |downloads_rmath4| image:: https://img.shields.io/conda/dn/bioconda/rmath4.svg?style=flat
   :target: https://anaconda.org/bioconda/rmath4
   :alt:   (downloads)
.. |docker_rmath4| image:: https://quay.io/repository/biocontainers/rmath4/status
   :target: https://quay.io/repository/biocontainers/rmath4
.. _`rmath4/tags`: https://quay.io/repository/biocontainers/rmath4?tab=tags


.. raw:: html

    <script>
        var package = "rmath4";
        var versions = ["4.3.1","4.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmath4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmath4/README.html