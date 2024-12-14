:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan_tcoffee'
.. highlight: bash

seqan_tcoffee
=============

.. conda:recipe:: seqan_tcoffee
   :replaces_section_title:
   :noindex:

   SeqAn\:\:T\-Coffee \- Multiple Sequence Alignment

   :homepage: http://www.seqan.de/apps/seqan-t-coffee/
   :developer docs: https://github.com/seqan/seqan/tree/master/apps/seqan_tcoffee
   :license: GPL / GPL (>=3)
   :recipe: /`seqan_tcoffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn281`

   


.. conda:package:: seqan_tcoffee

   |downloads_seqan_tcoffee| |docker_seqan_tcoffee|

   :versions:
      
      

      ``1.13.8-5``,  ``1.13.8-4``,  ``1.13.8-3``,  ``1.13.8-2``,  ``1.13.8-1``,  ``1.13.8-0``,  ``1.13.3-2``,  ``1.13.3-1``,  ``1.13.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install seqan_tcoffee

   and update with::

      mamba update seqan_tcoffee

  To create a new environment, run::

      mamba create --name myenvname seqan_tcoffee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqan_tcoffee:<tag>

   (see `seqan_tcoffee/tags`_ for valid values for ``<tag>``)


.. |downloads_seqan_tcoffee| image:: https://img.shields.io/conda/dn/bioconda/seqan_tcoffee.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan_tcoffee
   :alt:   (downloads)
.. |docker_seqan_tcoffee| image:: https://quay.io/repository/biocontainers/seqan_tcoffee/status
   :target: https://quay.io/repository/biocontainers/seqan_tcoffee
.. _`seqan_tcoffee/tags`: https://quay.io/repository/biocontainers/seqan_tcoffee?tab=tags


.. raw:: html

    <script>
        var package = "seqan_tcoffee";
        var versions = ["1.13.8","1.13.8","1.13.8","1.13.8","1.13.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan_tcoffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan_tcoffee/README.html