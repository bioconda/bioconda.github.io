:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipandmerge'
.. highlight: bash

clipandmerge
============

.. conda:recipe:: clipandmerge
   :replaces_section_title:
   :noindex:

   Clip\&Merge is a tool to clip off adapters from sequencing reads and merge overlapping paired end reads together.

   :homepage: https://github.com/apeltzer/ClipAndMerge
   :license: GPLv3
   :recipe: /`clipandmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipandmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipandmerge/meta.yaml>`_

   


.. conda:package:: clipandmerge

   |downloads_clipandmerge| |docker_clipandmerge|

   :versions:
      
      

      ``1.7.9-0``,  ``1.7.8-2``,  ``1.7.8-1``,  ``1.7.8-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install clipandmerge

   and update with::

      mamba update clipandmerge

  To create a new environment, run::

      mamba create --name myenvname clipandmerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clipandmerge:<tag>

   (see `clipandmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_clipandmerge| image:: https://img.shields.io/conda/dn/bioconda/clipandmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/clipandmerge
   :alt:   (downloads)
.. |docker_clipandmerge| image:: https://quay.io/repository/biocontainers/clipandmerge/status
   :target: https://quay.io/repository/biocontainers/clipandmerge
.. _`clipandmerge/tags`: https://quay.io/repository/biocontainers/clipandmerge?tab=tags


.. raw:: html

    <script>
        var package = "clipandmerge";
        var versions = ["1.7.9","1.7.8","1.7.8","1.7.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipandmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipandmerge/README.html