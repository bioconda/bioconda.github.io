:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estscan'
.. highlight: bash

estscan
=======

.. conda:recipe:: estscan/3.0
   :replaces_section_title:
   :noindex:

   Detects coding regions in DNA sequences even if they are of low quality

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`estscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan>`_/`3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0/meta.yaml>`_

   


.. conda:package:: estscan

   |downloads_estscan| |docker_estscan|

   :versions:
      
      

      ``3.0-8``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install estscan

   and update with::

      mamba update estscan

  To create a new environment, run::

      mamba create --name myenvname estscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/estscan:<tag>

   (see `estscan/tags`_ for valid values for ``<tag>``)


.. |downloads_estscan| image:: https://img.shields.io/conda/dn/bioconda/estscan.svg?style=flat
   :target: https://anaconda.org/bioconda/estscan
   :alt:   (downloads)
.. |docker_estscan| image:: https://quay.io/repository/biocontainers/estscan/status
   :target: https://quay.io/repository/biocontainers/estscan
.. _`estscan/tags`: https://quay.io/repository/biocontainers/estscan?tab=tags


.. raw:: html

    <script>
        var package = "estscan";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estscan/README.html