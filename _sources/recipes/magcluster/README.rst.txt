:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magcluster'
.. highlight: bash

magcluster
==========

.. conda:recipe:: magcluster
   :replaces_section_title:
   :noindex:

   Magnetosome gene cluster identification\, annotation and visualization tool

   :homepage: https://github.com/runjiaji/magcluster
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`magcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magcluster/meta.yaml>`_

   


.. conda:package:: magcluster

   |downloads_magcluster| |docker_magcluster|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.6-0``

      

   
   :depends blast: ``<=2.9``
   :depends clinker-py: 
   :depends pandas: 
   :depends prokka: ``1.13.4.*``
   :depends python: ``>=3.6``
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

      mamba install magcluster

   and update with::

      mamba update magcluster

  To create a new environment, run::

      mamba create --name myenvname magcluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magcluster:<tag>

   (see `magcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_magcluster| image:: https://img.shields.io/conda/dn/bioconda/magcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/magcluster
   :alt:   (downloads)
.. |docker_magcluster| image:: https://quay.io/repository/biocontainers/magcluster/status
   :target: https://quay.io/repository/biocontainers/magcluster
.. _`magcluster/tags`: https://quay.io/repository/biocontainers/magcluster?tab=tags


.. raw:: html

    <script>
        var package = "magcluster";
        var versions = ["0.2.5","0.2.2","0.2.0","0.1.8","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magcluster/README.html