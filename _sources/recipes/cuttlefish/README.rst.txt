:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuttlefish'
.. highlight: bash

cuttlefish
==========

.. conda:recipe:: cuttlefish
   :replaces_section_title:
   :noindex:

   Construction of the compacted de Bruijn graph efficiently

   :homepage: https://github.com/COMBINE-lab/cuttlefish
   :documentation: https://github.com/COMBINE-lab/cuttlefish#readme
   
   :license: BSD-3-Clause
   :recipe: /`cuttlefish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab309`, doi: :doi:`10.1186/s13059-022-02743-6`

   


.. conda:package:: cuttlefish

   |downloads_cuttlefish| |docker_cuttlefish|

   :versions:
      
      

      ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install cuttlefish

   and update with::

      mamba update cuttlefish

  To create a new environment, run::

      mamba create --name myenvname cuttlefish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cuttlefish:<tag>

   (see `cuttlefish/tags`_ for valid values for ``<tag>``)


.. |downloads_cuttlefish| image:: https://img.shields.io/conda/dn/bioconda/cuttlefish.svg?style=flat
   :target: https://anaconda.org/bioconda/cuttlefish
   :alt:   (downloads)
.. |docker_cuttlefish| image:: https://quay.io/repository/biocontainers/cuttlefish/status
   :target: https://quay.io/repository/biocontainers/cuttlefish
.. _`cuttlefish/tags`: https://quay.io/repository/biocontainers/cuttlefish?tab=tags


.. raw:: html

    <script>
        var package = "cuttlefish";
        var versions = ["2.2.0","2.2.0","2.2.0","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuttlefish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuttlefish/README.html