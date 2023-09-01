:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msmc2'
.. highlight: bash

msmc2
=====

.. conda:recipe:: msmc2
   :replaces_section_title:
   :noindex:

   This program implements MSMC2\, a method to infer population size history and population separation history from whole genome sequencing data


   :homepage: https://github.com/stschiff/msmc2
   :license: GPL 3
   :recipe: /`msmc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmc2/meta.yaml>`_

   


.. conda:package:: msmc2

   |downloads_msmc2| |docker_msmc2|

   :versions:
      
      

      ``2.1.4-0``

      

   
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

      mamba install msmc2

   and update with::

      mamba update msmc2

  To create a new environment, run::

      mamba create --name myenvname msmc2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msmc2:<tag>

   (see `msmc2/tags`_ for valid values for ``<tag>``)


.. |downloads_msmc2| image:: https://img.shields.io/conda/dn/bioconda/msmc2.svg?style=flat
   :target: https://anaconda.org/bioconda/msmc2
   :alt:   (downloads)
.. |docker_msmc2| image:: https://quay.io/repository/biocontainers/msmc2/status
   :target: https://quay.io/repository/biocontainers/msmc2
.. _`msmc2/tags`: https://quay.io/repository/biocontainers/msmc2?tab=tags


.. raw:: html

    <script>
        var package = "msmc2";
        var versions = ["2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msmc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msmc2/README.html