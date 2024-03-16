:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revoluzer'
.. highlight: bash

revoluzer
=========

.. conda:recipe:: revoluzer
   :replaces_section_title:
   :noindex:

   Genome rearrangement analysis tools

   :homepage: https://gitlab.com/Bernt/revoluzer/
   :license: GPL-3.0-or-later
   :recipe: /`revoluzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revoluzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revoluzer/meta.yaml>`_

   


.. conda:package:: revoluzer

   |downloads_revoluzer| |docker_revoluzer|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.2-0``

      

   
   :depends boost-cpp: 
   :depends glpk: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install revoluzer

   and update with::

      mamba update revoluzer

  To create a new environment, run::

      mamba create --name myenvname revoluzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/revoluzer:<tag>

   (see `revoluzer/tags`_ for valid values for ``<tag>``)


.. |downloads_revoluzer| image:: https://img.shields.io/conda/dn/bioconda/revoluzer.svg?style=flat
   :target: https://anaconda.org/bioconda/revoluzer
   :alt:   (downloads)
.. |docker_revoluzer| image:: https://quay.io/repository/biocontainers/revoluzer/status
   :target: https://quay.io/repository/biocontainers/revoluzer
.. _`revoluzer/tags`: https://quay.io/repository/biocontainers/revoluzer?tab=tags


.. raw:: html

    <script>
        var package = "revoluzer";
        var versions = ["0.1.5","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revoluzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revoluzer/README.html