:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'juicertools'
.. highlight: bash

juicertools
===========

.. conda:recipe:: juicertools
   :replaces_section_title:
   :noindex:

   Visualization and analysis software for Hi\-C data

   :homepage: https://github.com/aidenlab/Juicebox
   :license: MIT
   :recipe: /`juicertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/juicertools/meta.yaml>`_

   


.. conda:package:: juicertools

   |downloads_juicertools| |docker_juicertools|

   :versions:
      
      

      ``2.20.00-0``

      

   
   :depends openjdk: 
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

      mamba install juicertools

   and update with::

      mamba update juicertools

  To create a new environment, run::

      mamba create --name myenvname juicertools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/juicertools:<tag>

   (see `juicertools/tags`_ for valid values for ``<tag>``)


.. |downloads_juicertools| image:: https://img.shields.io/conda/dn/bioconda/juicertools.svg?style=flat
   :target: https://anaconda.org/bioconda/juicertools
   :alt:   (downloads)
.. |docker_juicertools| image:: https://quay.io/repository/biocontainers/juicertools/status
   :target: https://quay.io/repository/biocontainers/juicertools
.. _`juicertools/tags`: https://quay.io/repository/biocontainers/juicertools?tab=tags


.. raw:: html

    <script>
        var package = "juicertools";
        var versions = ["2.20.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/juicertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/juicertools/README.html