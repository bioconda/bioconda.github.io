:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaalishapes'
.. highlight: bash

rnaalishapes
============

.. conda:recipe:: rnaalishapes
   :replaces_section_title:
   :noindex:

   RNAalishapes is a tool for secondary structure prediction\, using shape abstraction. Input is a multiple sequence alignment. Pseudoknots are not considered at all.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnaalishapes
   :license: GPL-3.0-or-later
   :recipe: /`rnaalishapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaalishapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaalishapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnaalishapes

   |downloads_rnaalishapes| |docker_rnaalishapes|

   :versions:
      
      

      ``2.5.0-1``,  ``2.5.0-0``

      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends libgcc-ng: ``>=12``
   :depends libopenblas: ``>=0.3.27,<1.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install rnaalishapes

   and update with::

      mamba update rnaalishapes

  To create a new environment, run::

      mamba create --name myenvname rnaalishapes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaalishapes:<tag>

   (see `rnaalishapes/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaalishapes| image:: https://img.shields.io/conda/dn/bioconda/rnaalishapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaalishapes
   :alt:   (downloads)
.. |docker_rnaalishapes| image:: https://quay.io/repository/biocontainers/rnaalishapes/status
   :target: https://quay.io/repository/biocontainers/rnaalishapes
.. _`rnaalishapes/tags`: https://quay.io/repository/biocontainers/rnaalishapes?tab=tags


.. raw:: html

    <script>
        var package = "rnaalishapes";
        var versions = ["2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaalishapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaalishapes/README.html