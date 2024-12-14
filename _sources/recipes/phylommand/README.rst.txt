:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylommand'
.. highlight: bash

phylommand
==========

.. conda:recipe:: phylommand
   :replaces_section_title:
   :noindex:

   Command\-line phylogenetics tools.

   :homepage: https://github.com/mr-y/phylommand
   :license: GPLv3
   :recipe: /`phylommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand/meta.yaml>`_

   Command\-line tools to create\, manipulate\, and\/or analyze phylogenetic trees or pairwise alignments. Does not include \"rudisvg\" svg viewer.


.. conda:package:: phylommand

   |downloads_phylommand| |docker_phylommand|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends nlopt: ``>=2.8.0,<2.9.0a0``
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

      mamba install phylommand

   and update with::

      mamba update phylommand

  To create a new environment, run::

      mamba create --name myenvname phylommand

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylommand:<tag>

   (see `phylommand/tags`_ for valid values for ``<tag>``)


.. |downloads_phylommand| image:: https://img.shields.io/conda/dn/bioconda/phylommand.svg?style=flat
   :target: https://anaconda.org/bioconda/phylommand
   :alt:   (downloads)
.. |docker_phylommand| image:: https://quay.io/repository/biocontainers/phylommand/status
   :target: https://quay.io/repository/biocontainers/phylommand
.. _`phylommand/tags`: https://quay.io/repository/biocontainers/phylommand?tab=tags


.. raw:: html

    <script>
        var package = "phylommand";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylommand/README.html