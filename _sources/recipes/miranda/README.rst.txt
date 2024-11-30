:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miranda'
.. highlight: bash

miranda
=======

.. conda:recipe:: miranda
   :replaces_section_title:
   :noindex:

   An algorithm for finding genomic targets for microRNAs

   :homepage: http://www.microrna.org/
   :license: GPLv2 + RNAlib license (no commercial redistribution)
   :recipe: /`miranda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda/meta.yaml>`_

   


.. conda:package:: miranda

   |downloads_miranda| |docker_miranda|

   :versions:
      
      

      ``3.3a-6``,  ``3.3a-5``,  ``3.3a-4``,  ``3.3a-3``,  ``3.3a-2``,  ``3.3a-1``,  ``3.3a-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install miranda

   and update with::

      mamba update miranda

  To create a new environment, run::

      mamba create --name myenvname miranda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miranda:<tag>

   (see `miranda/tags`_ for valid values for ``<tag>``)


.. |downloads_miranda| image:: https://img.shields.io/conda/dn/bioconda/miranda.svg?style=flat
   :target: https://anaconda.org/bioconda/miranda
   :alt:   (downloads)
.. |docker_miranda| image:: https://quay.io/repository/biocontainers/miranda/status
   :target: https://quay.io/repository/biocontainers/miranda
.. _`miranda/tags`: https://quay.io/repository/biocontainers/miranda?tab=tags


.. raw:: html

    <script>
        var package = "miranda";
        var versions = ["3.3a","3.3a","3.3a","3.3a","3.3a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miranda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miranda/README.html