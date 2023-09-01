:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicktree'
.. highlight: bash

quicktree
=========

.. conda:recipe:: quicktree
   :replaces_section_title:
   :noindex:

   Fast implementation of the neighbour\-joining phylogenetic inference method

   :homepage: https://github.com/khowe/quicktree
   :license: Apache-2.0
   :recipe: /`quicktree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicktree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicktree/meta.yaml>`_

   


.. conda:package:: quicktree

   |downloads_quicktree| |docker_quicktree|

   :versions:
      
      

      ``2.5-4``,  ``2.5-3``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install quicktree

   and update with::

      mamba update quicktree

  To create a new environment, run::

      mamba create --name myenvname quicktree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quicktree:<tag>

   (see `quicktree/tags`_ for valid values for ``<tag>``)


.. |downloads_quicktree| image:: https://img.shields.io/conda/dn/bioconda/quicktree.svg?style=flat
   :target: https://anaconda.org/bioconda/quicktree
   :alt:   (downloads)
.. |docker_quicktree| image:: https://quay.io/repository/biocontainers/quicktree/status
   :target: https://quay.io/repository/biocontainers/quicktree
.. _`quicktree/tags`: https://quay.io/repository/biocontainers/quicktree?tab=tags


.. raw:: html

    <script>
        var package = "quicktree";
        var versions = ["2.5","2.5","2.5","2.5","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicktree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicktree/README.html