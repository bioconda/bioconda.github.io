:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxtax'
.. highlight: bash

raxtax
======

.. conda:recipe:: raxtax
   :replaces_section_title:
   :noindex:

   raxtax is a k\-mer\-based non\-Bayesian Taxonomic Classifier.

   :homepage: https://github.com/noahares/raxtax
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`raxtax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxtax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxtax/meta.yaml>`_

   


.. conda:package:: raxtax

   |downloads_raxtax| |docker_raxtax|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``

      

   
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

      mamba install raxtax

   and update with::

      mamba update raxtax

  To create a new environment, run::

      mamba create --name myenvname raxtax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/raxtax:<tag>

   (see `raxtax/tags`_ for valid values for ``<tag>``)


.. |downloads_raxtax| image:: https://img.shields.io/conda/dn/bioconda/raxtax.svg?style=flat
   :target: https://anaconda.org/bioconda/raxtax
   :alt:   (downloads)
.. |docker_raxtax| image:: https://quay.io/repository/biocontainers/raxtax/status
   :target: https://quay.io/repository/biocontainers/raxtax
.. _`raxtax/tags`: https://quay.io/repository/biocontainers/raxtax?tab=tags


.. raw:: html

    <script>
        var package = "raxtax";
        var versions = ["1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxtax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxtax/README.html