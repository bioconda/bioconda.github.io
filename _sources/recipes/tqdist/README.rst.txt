:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tqdist'
.. highlight: bash

tqdist
======

.. conda:recipe:: tqdist/1.0.0
   :replaces_section_title:
   :noindex:

   computes the triplet distance between rooted trees in O\(n log n\) time and the quartet distance between unrooted trees in O\(dn log n\) time\, where d degree of the tree with the smallest degree.

   :homepage: http://users-cs.au.dk/cstorm/software/tqdist/
   :license: GPL / GPL
   :recipe: /`tqdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist>`_/`1.0.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist/1.0.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist/1.0.0/meta.yaml>`_

   


.. conda:package:: tqdist

   |downloads_tqdist| |docker_tqdist|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
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

      mamba install tqdist

   and update with::

      mamba update tqdist

  To create a new environment, run::

      mamba create --name myenvname tqdist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tqdist:<tag>

   (see `tqdist/tags`_ for valid values for ``<tag>``)


.. |downloads_tqdist| image:: https://img.shields.io/conda/dn/bioconda/tqdist.svg?style=flat
   :target: https://anaconda.org/bioconda/tqdist
   :alt:   (downloads)
.. |docker_tqdist| image:: https://quay.io/repository/biocontainers/tqdist/status
   :target: https://quay.io/repository/biocontainers/tqdist
.. _`tqdist/tags`: https://quay.io/repository/biocontainers/tqdist?tab=tags


.. raw:: html

    <script>
        var package = "tqdist";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tqdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tqdist/README.html