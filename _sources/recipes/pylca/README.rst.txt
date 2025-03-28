:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylca'
.. highlight: bash

pylca
=====

.. conda:recipe:: pylca
   :replaces_section_title:
   :noindex:

   Lowest common ancestor \(LCA\) algorithm implementation in python

   :homepage: https://github.com/pirovc/pylca
   :license: MIT / MIT License
   :recipe: /`pylca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylca/meta.yaml>`_

   Adaptation of the the lowest common ancestor \(LCA\) algorithm 
   originally developed by D. Eppstein 
   \(https\:\/\/www.ics.uci.edu\/\~eppstein\/\)



.. conda:package:: pylca

   |downloads_pylca| |docker_pylca|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install pylca

   and update with::

      mamba update pylca

  To create a new environment, run::

      mamba create --name myenvname pylca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pylca:<tag>

   (see `pylca/tags`_ for valid values for ``<tag>``)


.. |downloads_pylca| image:: https://img.shields.io/conda/dn/bioconda/pylca.svg?style=flat
   :target: https://anaconda.org/bioconda/pylca
   :alt:   (downloads)
.. |docker_pylca| image:: https://quay.io/repository/biocontainers/pylca/status
   :target: https://quay.io/repository/biocontainers/pylca
.. _`pylca/tags`: https://quay.io/repository/biocontainers/pylca?tab=tags


.. raw:: html

    <script>
        var package = "pylca";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylca/README.html