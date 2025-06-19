:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastn2dotplots'
.. highlight: bash

blastn2dotplots
===============

.. conda:recipe:: blastn2dotplots
   :replaces_section_title:
   :noindex:

   A script for visualizing multiple dot\-plot alignments from BLASTN output.

   :homepage: https://github.com/mokuno3430/blastn2dotplots
   :license: MIT / MIT
   :recipe: /`blastn2dotplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastn2dotplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastn2dotplots/meta.yaml>`_

   


.. conda:package:: blastn2dotplots

   |downloads_blastn2dotplots| |docker_blastn2dotplots|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends matplotlib-base: ``>=3.7``
   :depends numpy: ``>=1.24,<2.0``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.8``
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

      mamba install blastn2dotplots

   and update with::

      mamba update blastn2dotplots

  To create a new environment, run::

      mamba create --name myenvname blastn2dotplots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blastn2dotplots:<tag>

   (see `blastn2dotplots/tags`_ for valid values for ``<tag>``)


.. |downloads_blastn2dotplots| image:: https://img.shields.io/conda/dn/bioconda/blastn2dotplots.svg?style=flat
   :target: https://anaconda.org/bioconda/blastn2dotplots
   :alt:   (downloads)
.. |docker_blastn2dotplots| image:: https://quay.io/repository/biocontainers/blastn2dotplots/status
   :target: https://quay.io/repository/biocontainers/blastn2dotplots
.. _`blastn2dotplots/tags`: https://quay.io/repository/biocontainers/blastn2dotplots?tab=tags


.. raw:: html

    <script>
        var package = "blastn2dotplots";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastn2dotplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastn2dotplots/README.html