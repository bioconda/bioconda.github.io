:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'helitronscanner'
.. highlight: bash

helitronscanner
===============

.. conda:recipe:: helitronscanner
   :replaces_section_title:
   :noindex:

   HelitronScanner uncovers a large overlooked cache of Helitron transposons in many genomes

   :homepage: https://sourceforge.net/projects/helitronscanner
   :license: GPL-3.0-or-later
   :recipe: /`helitronscanner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helitronscanner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helitronscanner/meta.yaml>`_

   


.. conda:package:: helitronscanner

   |downloads_helitronscanner| |docker_helitronscanner|

   :versions:
      
      

      ``1.0-0``

      

   
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

      mamba install helitronscanner

   and update with::

      mamba update helitronscanner

  To create a new environment, run::

      mamba create --name myenvname helitronscanner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/helitronscanner:<tag>

   (see `helitronscanner/tags`_ for valid values for ``<tag>``)


.. |downloads_helitronscanner| image:: https://img.shields.io/conda/dn/bioconda/helitronscanner.svg?style=flat
   :target: https://anaconda.org/bioconda/helitronscanner
   :alt:   (downloads)
.. |docker_helitronscanner| image:: https://quay.io/repository/biocontainers/helitronscanner/status
   :target: https://quay.io/repository/biocontainers/helitronscanner
.. _`helitronscanner/tags`: https://quay.io/repository/biocontainers/helitronscanner?tab=tags


.. raw:: html

    <script>
        var package = "helitronscanner";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/helitronscanner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/helitronscanner/README.html