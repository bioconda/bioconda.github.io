:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openmg'
.. highlight: bash

openmg
======

.. conda:recipe:: openmg
   :replaces_section_title:
   :noindex:

   Exhaustive generation of chemical structures

   :homepage: https://sourceforge.net/projects/openmg
   :license: GNU General Public License
   :recipe: /`openmg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openmg/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_openmg`

   


.. conda:package:: openmg

   |downloads_openmg| |docker_openmg|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=6,<=8``
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

      mamba install openmg

   and update with::

      mamba update openmg

  To create a new environment, run::

      mamba create --name myenvname openmg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openmg:<tag>

   (see `openmg/tags`_ for valid values for ``<tag>``)


.. |downloads_openmg| image:: https://img.shields.io/conda/dn/bioconda/openmg.svg?style=flat
   :target: https://anaconda.org/bioconda/openmg
   :alt:   (downloads)
.. |docker_openmg| image:: https://quay.io/repository/biocontainers/openmg/status
   :target: https://quay.io/repository/biocontainers/openmg
.. _`openmg/tags`: https://quay.io/repository/biocontainers/openmg?tab=tags


.. raw:: html

    <script>
        var package = "openmg";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openmg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openmg/README.html