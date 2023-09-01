:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepbinner'
.. highlight: bash

deepbinner
==========

.. conda:recipe:: deepbinner
   :replaces_section_title:
   :noindex:

   A signal\-level demultiplexer for Oxford Nanopore reads.

   :homepage: https://github.com/rrwick/Deepbinner
   :license: GPL3
   :recipe: /`deepbinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner/meta.yaml>`_

   


.. conda:package:: deepbinner

   |downloads_deepbinner| |docker_deepbinner|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends h5py: 
   :depends keras: 
   :depends matplotlib: 
   :depends noise: 
   :depends numpy: 
   :depends python: ``>3``
   :depends tensorflow: 
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

      mamba install deepbinner

   and update with::

      mamba update deepbinner

  To create a new environment, run::

      mamba create --name myenvname deepbinner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepbinner:<tag>

   (see `deepbinner/tags`_ for valid values for ``<tag>``)


.. |downloads_deepbinner| image:: https://img.shields.io/conda/dn/bioconda/deepbinner.svg?style=flat
   :target: https://anaconda.org/bioconda/deepbinner
   :alt:   (downloads)
.. |docker_deepbinner| image:: https://quay.io/repository/biocontainers/deepbinner/status
   :target: https://quay.io/repository/biocontainers/deepbinner
.. _`deepbinner/tags`: https://quay.io/repository/biocontainers/deepbinner?tab=tags


.. raw:: html

    <script>
        var package = "deepbinner";
        var versions = ["0.2.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbinner/README.html