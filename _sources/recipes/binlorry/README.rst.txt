:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binlorry'
.. highlight: bash

binlorry
========

.. conda:recipe:: binlorry
   :replaces_section_title:
   :noindex:

   BinLorry\, a flexible tool for binning and filtering sequencing reads

   :homepage: https://github.com/rambaut/binlorry
   :license: GPL3 / GPL-3.0
   :recipe: /`binlorry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binlorry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binlorry/meta.yaml>`_

   


.. conda:package:: binlorry

   |downloads_binlorry| |docker_binlorry|

   :versions:
      
      

      ``1.3.1-0``

      

   
   :depends python: ``>3``
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

      mamba install binlorry

   and update with::

      mamba update binlorry

  To create a new environment, run::

      mamba create --name myenvname binlorry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binlorry:<tag>

   (see `binlorry/tags`_ for valid values for ``<tag>``)


.. |downloads_binlorry| image:: https://img.shields.io/conda/dn/bioconda/binlorry.svg?style=flat
   :target: https://anaconda.org/bioconda/binlorry
   :alt:   (downloads)
.. |docker_binlorry| image:: https://quay.io/repository/biocontainers/binlorry/status
   :target: https://quay.io/repository/biocontainers/binlorry
.. _`binlorry/tags`: https://quay.io/repository/biocontainers/binlorry?tab=tags


.. raw:: html

    <script>
        var package = "binlorry";
        var versions = ["1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binlorry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binlorry/README.html