:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitig-counter'
.. highlight: bash

unitig-counter
==============

.. conda:recipe:: unitig-counter
   :replaces_section_title:
   :noindex:

   Uses a compressed de Bruijn graph \(implemented in GATB\) to count unitigs in bacterial populations.

   :homepage: https://github.com/johnlees/unitig-counter
   :license: AGPL / GNU Affero General Public License
   :recipe: /`unitig-counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-counter/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pgen.1007758`

   


.. conda:package:: unitig-counter

   |downloads_unitig-counter| |docker_unitig-counter|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends pthread-stubs: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install unitig-counter

   and update with::

      mamba update unitig-counter

  To create a new environment, run::

      mamba create --name myenvname unitig-counter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unitig-counter:<tag>

   (see `unitig-counter/tags`_ for valid values for ``<tag>``)


.. |downloads_unitig-counter| image:: https://img.shields.io/conda/dn/bioconda/unitig-counter.svg?style=flat
   :target: https://anaconda.org/bioconda/unitig-counter
   :alt:   (downloads)
.. |docker_unitig-counter| image:: https://quay.io/repository/biocontainers/unitig-counter/status
   :target: https://quay.io/repository/biocontainers/unitig-counter
.. _`unitig-counter/tags`: https://quay.io/repository/biocontainers/unitig-counter?tab=tags


.. raw:: html

    <script>
        var package = "unitig-counter";
        var versions = ["1.1.0","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitig-counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitig-counter/README.html