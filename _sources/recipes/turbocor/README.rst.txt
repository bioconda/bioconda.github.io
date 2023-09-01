:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'turbocor'
.. highlight: bash

turbocor
========

.. conda:recipe:: turbocor
   :replaces_section_title:
   :noindex:

   A command line tool to compute very large correlation matrices.

   :homepage: https://github.com/dcjones/turbocor
   :license: MIT / MIT
   :recipe: /`turbocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/turbocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/turbocor/meta.yaml>`_

   


.. conda:package:: turbocor

   |downloads_turbocor| |docker_turbocor|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=9.4.0``
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

      mamba install turbocor

   and update with::

      mamba update turbocor

  To create a new environment, run::

      mamba create --name myenvname turbocor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/turbocor:<tag>

   (see `turbocor/tags`_ for valid values for ``<tag>``)


.. |downloads_turbocor| image:: https://img.shields.io/conda/dn/bioconda/turbocor.svg?style=flat
   :target: https://anaconda.org/bioconda/turbocor
   :alt:   (downloads)
.. |docker_turbocor| image:: https://quay.io/repository/biocontainers/turbocor/status
   :target: https://quay.io/repository/biocontainers/turbocor
.. _`turbocor/tags`: https://quay.io/repository/biocontainers/turbocor?tab=tags


.. raw:: html

    <script>
        var package = "turbocor";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/turbocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/turbocor/README.html