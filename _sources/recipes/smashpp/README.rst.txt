:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smashpp'
.. highlight: bash

smashpp
=======

.. conda:recipe:: smashpp
   :replaces_section_title:
   :noindex:

   A fast tool to find and visualize rearrangements in DNA sequences

   :homepage: https://github.com/smortezah/smashpp
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`smashpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashpp/meta.yaml>`_

   


.. conda:package:: smashpp

   |downloads_smashpp| |docker_smashpp|

   :versions:
      
      

      ``23.09-1``,  ``23.09-0``,  ``22.08-2``,  ``22.08-1``,  ``22.08-0``,  ``20.04-2``,  ``20.04-1``,  ``20.04-0``,  ``19.12-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install smashpp

   and update with::

      mamba update smashpp

  To create a new environment, run::

      mamba create --name myenvname smashpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smashpp:<tag>

   (see `smashpp/tags`_ for valid values for ``<tag>``)


.. |downloads_smashpp| image:: https://img.shields.io/conda/dn/bioconda/smashpp.svg?style=flat
   :target: https://anaconda.org/bioconda/smashpp
   :alt:   (downloads)
.. |docker_smashpp| image:: https://quay.io/repository/biocontainers/smashpp/status
   :target: https://quay.io/repository/biocontainers/smashpp
.. _`smashpp/tags`: https://quay.io/repository/biocontainers/smashpp?tab=tags


.. raw:: html

    <script>
        var package = "smashpp";
        var versions = ["23.09","23.09","22.08","22.08","22.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smashpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smashpp/README.html