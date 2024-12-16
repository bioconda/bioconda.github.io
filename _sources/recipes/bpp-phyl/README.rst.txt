:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-phyl'
.. highlight: bash

bpp-phyl
========

.. conda:recipe:: bpp-phyl
   :replaces_section_title:
   :noindex:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-phyl
   :license: CeCILL
   :recipe: /`bpp-phyl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-phyl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-phyl/meta.yaml>`_

   


.. conda:package:: bpp-phyl

   |downloads_bpp-phyl| |docker_bpp-phyl|

   :versions:
      
      

      ``2.4.1-5``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends bpp-seq: 
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

      mamba install bpp-phyl

   and update with::

      mamba update bpp-phyl

  To create a new environment, run::

      mamba create --name myenvname bpp-phyl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bpp-phyl:<tag>

   (see `bpp-phyl/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-phyl| image:: https://img.shields.io/conda/dn/bioconda/bpp-phyl.svg?style=flat
   :target: https://anaconda.org/bioconda/bpp-phyl
   :alt:   (downloads)
.. |docker_bpp-phyl| image:: https://quay.io/repository/biocontainers/bpp-phyl/status
   :target: https://quay.io/repository/biocontainers/bpp-phyl
.. _`bpp-phyl/tags`: https://quay.io/repository/biocontainers/bpp-phyl?tab=tags


.. raw:: html

    <script>
        var package = "bpp-phyl";
        var versions = ["2.4.1","2.4.1","2.4.1","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-phyl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-phyl/README.html