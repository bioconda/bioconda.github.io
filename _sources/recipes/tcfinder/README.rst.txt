:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tcfinder'
.. highlight: bash

tcfinder
========

.. conda:recipe:: tcfinder
   :replaces_section_title:
   :noindex:

   A lightweight tool to find clusters of samples within a phylogeny.

   :homepage: https://github.com/PathoGenOmics-Lab/tcfinder
   :license: GPL3 / GPL-3.0-only
   :recipe: /`tcfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcfinder/meta.yaml>`_

   


.. conda:package:: tcfinder

   |downloads_tcfinder| |docker_tcfinder|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install tcfinder

   and update with::

      mamba update tcfinder

  To create a new environment, run::

      mamba create --name myenvname tcfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tcfinder:<tag>

   (see `tcfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_tcfinder| image:: https://img.shields.io/conda/dn/bioconda/tcfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/tcfinder
   :alt:   (downloads)
.. |docker_tcfinder| image:: https://quay.io/repository/biocontainers/tcfinder/status
   :target: https://quay.io/repository/biocontainers/tcfinder
.. _`tcfinder/tags`: https://quay.io/repository/biocontainers/tcfinder?tab=tags


.. raw:: html

    <script>
        var package = "tcfinder";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tcfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tcfinder/README.html