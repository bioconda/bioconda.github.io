:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgmlst-dists'
.. highlight: bash

cgmlst-dists
============

.. conda:recipe:: cgmlst-dists
   :replaces_section_title:
   :noindex:

   Convert cgMLST table to distance matrix

   :homepage: https://github.com/tseemann/cgmlst-dists
   :license: GPL3
   :recipe: /`cgmlst-dists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgmlst-dists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgmlst-dists/meta.yaml>`_

   


.. conda:package:: cgmlst-dists

   |downloads_cgmlst-dists| |docker_cgmlst-dists|

   :versions:
      
      

      ``0.4.0-5``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.2.0-0``

      

   
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

      mamba install cgmlst-dists

   and update with::

      mamba update cgmlst-dists

  To create a new environment, run::

      mamba create --name myenvname cgmlst-dists

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgmlst-dists:<tag>

   (see `cgmlst-dists/tags`_ for valid values for ``<tag>``)


.. |downloads_cgmlst-dists| image:: https://img.shields.io/conda/dn/bioconda/cgmlst-dists.svg?style=flat
   :target: https://anaconda.org/bioconda/cgmlst-dists
   :alt:   (downloads)
.. |docker_cgmlst-dists| image:: https://quay.io/repository/biocontainers/cgmlst-dists/status
   :target: https://quay.io/repository/biocontainers/cgmlst-dists
.. _`cgmlst-dists/tags`: https://quay.io/repository/biocontainers/cgmlst-dists?tab=tags


.. raw:: html

    <script>
        var package = "cgmlst-dists";
        var versions = ["0.4.0","0.4.0","0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgmlst-dists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgmlst-dists/README.html