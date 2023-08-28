:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expressbetadiversity'
.. highlight: bash

expressbetadiversity
====================

.. conda:recipe:: expressbetadiversity
   :replaces_section_title:
   :noindex:

   Taxon\- and phylogenetic\-based beta diversity measures.

   :homepage: https://github.com/dparks1134/ExpressBetaDiversity
   :license: GPL3 / GPL-3
   :recipe: /`expressbetadiversity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expressbetadiversity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expressbetadiversity/meta.yaml>`_
   :links: doi: :doi:`10.1038/ismej.2012.88`

   Taxon\- and phylogenetic\-based beta diversity measures.


.. conda:package:: expressbetadiversity

   |downloads_expressbetadiversity| |docker_expressbetadiversity|

   :versions:
      
      

      ``1.0.10-5``,  ``1.0.10-4``,  ``1.0.10-3``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install expressbetadiversity

   and update with::

      mamba update expressbetadiversity

  To create a new environment, run::

      mamba create --name myenvname expressbetadiversity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/expressbetadiversity:<tag>

   (see `expressbetadiversity/tags`_ for valid values for ``<tag>``)


.. |downloads_expressbetadiversity| image:: https://img.shields.io/conda/dn/bioconda/expressbetadiversity.svg?style=flat
   :target: https://anaconda.org/bioconda/expressbetadiversity
   :alt:   (downloads)
.. |docker_expressbetadiversity| image:: https://quay.io/repository/biocontainers/expressbetadiversity/status
   :target: https://quay.io/repository/biocontainers/expressbetadiversity
.. _`expressbetadiversity/tags`: https://quay.io/repository/biocontainers/expressbetadiversity?tab=tags


.. raw:: html

    <script>
        var package = "expressbetadiversity";
        var versions = ["1.0.10","1.0.10","1.0.10","1.0.10","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expressbetadiversity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expressbetadiversity/README.html