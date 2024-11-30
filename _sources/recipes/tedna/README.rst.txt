:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tedna'
.. highlight: bash

tedna
=====

.. conda:recipe:: tedna
   :replaces_section_title:
   :noindex:

   Tedna is a lightweight de novo transposable element assembler

   :homepage: https://urgi.versailles.inra.fr/Tools/Tedna
   :license: GNU Affero General Public License
   :recipe: /`tedna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna/meta.yaml>`_

   


.. conda:package:: tedna

   |downloads_tedna| |docker_tedna|

   :versions:
      
      

      ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install tedna

   and update with::

      mamba update tedna

  To create a new environment, run::

      mamba create --name myenvname tedna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tedna:<tag>

   (see `tedna/tags`_ for valid values for ``<tag>``)


.. |downloads_tedna| image:: https://img.shields.io/conda/dn/bioconda/tedna.svg?style=flat
   :target: https://anaconda.org/bioconda/tedna
   :alt:   (downloads)
.. |docker_tedna| image:: https://quay.io/repository/biocontainers/tedna/status
   :target: https://quay.io/repository/biocontainers/tedna
.. _`tedna/tags`: https://quay.io/repository/biocontainers/tedna?tab=tags


.. raw:: html

    <script>
        var package = "tedna";
        var versions = ["1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tedna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tedna/README.html