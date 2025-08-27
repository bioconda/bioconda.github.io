:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cesar'
.. highlight: bash

cesar
=====

.. conda:recipe:: cesar
   :replaces_section_title:
   :noindex:

   CESAR 2.0 is a method to realign coding exons or genes to DNA sequences using a Hidden Markov Model


   :homepage: https://github.com/hillerlab/CESAR2.0
   :license: MIT license
   :recipe: /`cesar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesar/meta.yaml>`_

   


.. conda:package:: cesar

   |downloads_cesar| |docker_cesar|

   :versions:
      
      

      ``1.01-3``,  ``1.01-2``,  ``1.01-1``,  ``1.01-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install cesar

   and update with::

      mamba update cesar

  To create a new environment, run::

      mamba create --name myenvname cesar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cesar:<tag>

   (see `cesar/tags`_ for valid values for ``<tag>``)


.. |downloads_cesar| image:: https://img.shields.io/conda/dn/bioconda/cesar.svg?style=flat
   :target: https://anaconda.org/bioconda/cesar
   :alt:   (downloads)
.. |docker_cesar| image:: https://quay.io/repository/biocontainers/cesar/status
   :target: https://quay.io/repository/biocontainers/cesar
.. _`cesar/tags`: https://quay.io/repository/biocontainers/cesar?tab=tags


.. raw:: html

    <script>
        var package = "cesar";
        var versions = ["1.01","1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cesar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cesar/README.html