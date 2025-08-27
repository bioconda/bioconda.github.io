:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roguenarok'
.. highlight: bash

roguenarok
==========

.. conda:recipe:: roguenarok
   :replaces_section_title:
   :noindex:

   Phylogenetics \- algorithm for the identification of rogue taxa in a tree set.

   :homepage: https://github.com/aberer/RogueNaRok
   :license: GPL-2.0-or-later
   :recipe: /`roguenarok <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roguenarok>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roguenarok/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/sys078`

   


.. conda:package:: roguenarok

   |downloads_roguenarok| |docker_roguenarok|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
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

      mamba install roguenarok

   and update with::

      mamba update roguenarok

  To create a new environment, run::

      mamba create --name myenvname roguenarok

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/roguenarok:<tag>

   (see `roguenarok/tags`_ for valid values for ``<tag>``)


.. |downloads_roguenarok| image:: https://img.shields.io/conda/dn/bioconda/roguenarok.svg?style=flat
   :target: https://anaconda.org/bioconda/roguenarok
   :alt:   (downloads)
.. |docker_roguenarok| image:: https://quay.io/repository/biocontainers/roguenarok/status
   :target: https://quay.io/repository/biocontainers/roguenarok
.. _`roguenarok/tags`: https://quay.io/repository/biocontainers/roguenarok?tab=tags


.. raw:: html

    <script>
        var package = "roguenarok";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roguenarok/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roguenarok/README.html