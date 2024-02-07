:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peer'
.. highlight: bash

peer
====

.. conda:recipe:: peer
   :replaces_section_title:
   :noindex:

   A collection of Bayesian approaches to infer hidden determinants and their effects from gene expression profiles using factor analysis methods

   :homepage: https://github.com/PMBio/peer
   :license: GPL-2.0-or-later
   :recipe: /`peer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peer/meta.yaml>`_

   


.. conda:package:: peer

   |downloads_peer| |docker_peer|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install peer

   and update with::

      mamba update peer

  To create a new environment, run::

      mamba create --name myenvname peer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peer:<tag>

   (see `peer/tags`_ for valid values for ``<tag>``)


.. |downloads_peer| image:: https://img.shields.io/conda/dn/bioconda/peer.svg?style=flat
   :target: https://anaconda.org/bioconda/peer
   :alt:   (downloads)
.. |docker_peer| image:: https://quay.io/repository/biocontainers/peer/status
   :target: https://quay.io/repository/biocontainers/peer
.. _`peer/tags`: https://quay.io/repository/biocontainers/peer?tab=tags


.. raw:: html

    <script>
        var package = "peer";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peer/README.html