:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'defense-finder'
.. highlight: bash

defense-finder
==============

.. conda:recipe:: defense-finder
   :replaces_section_title:
   :noindex:

   Defense Finder\: allow for a systematic search of all known anti\-phage systems.

   :homepage: https://github.com/mdmparis/defense-finder
   :license: GPL-3.0
   :recipe: /`defense-finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defense-finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defense-finder/meta.yaml>`_

   


.. conda:package:: defense-finder

   |downloads_defense-finder| |docker_defense-finder|

   :versions:
      
      

      ``1.0.9-0``

      

   
   :depends click: ``>=8.0.3``
   :depends colorlog: ``>=6.3.0a1``
   :depends macsyfinder: ``>=2``
   :depends python: ``>=3.7``
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

      mamba install defense-finder

   and update with::

      mamba update defense-finder

  To create a new environment, run::

      mamba create --name myenvname defense-finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/defense-finder:<tag>

   (see `defense-finder/tags`_ for valid values for ``<tag>``)


.. |downloads_defense-finder| image:: https://img.shields.io/conda/dn/bioconda/defense-finder.svg?style=flat
   :target: https://anaconda.org/bioconda/defense-finder
   :alt:   (downloads)
.. |docker_defense-finder| image:: https://quay.io/repository/biocontainers/defense-finder/status
   :target: https://quay.io/repository/biocontainers/defense-finder
.. _`defense-finder/tags`: https://quay.io/repository/biocontainers/defense-finder?tab=tags


.. raw:: html

    <script>
        var package = "defense-finder";
        var versions = ["1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/defense-finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/defense-finder/README.html