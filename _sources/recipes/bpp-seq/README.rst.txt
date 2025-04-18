:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-seq'
.. highlight: bash

bpp-seq
=======

.. conda:recipe:: bpp-seq
   :replaces_section_title:
   :noindex:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-seq
   :license: CeCILL
   :recipe: /`bpp-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq/meta.yaml>`_

   


.. conda:package:: bpp-seq

   |downloads_bpp-seq| |docker_bpp-seq|

   :versions:
      
      

      ``2.4.1-5``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends bpp-core: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install bpp-seq

   and update with::

      mamba update bpp-seq

  To create a new environment, run::

      mamba create --name myenvname bpp-seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bpp-seq:<tag>

   (see `bpp-seq/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-seq| image:: https://img.shields.io/conda/dn/bioconda/bpp-seq.svg?style=flat
   :target: https://anaconda.org/bioconda/bpp-seq
   :alt:   (downloads)
.. |docker_bpp-seq| image:: https://quay.io/repository/biocontainers/bpp-seq/status
   :target: https://quay.io/repository/biocontainers/bpp-seq
.. _`bpp-seq/tags`: https://quay.io/repository/biocontainers/bpp-seq?tab=tags


.. raw:: html

    <script>
        var package = "bpp-seq";
        var versions = ["2.4.1","2.4.1","2.4.1","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-seq/README.html