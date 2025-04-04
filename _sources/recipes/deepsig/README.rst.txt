:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsig'
.. highlight: bash

deepsig
=======

.. conda:recipe:: deepsig
   :replaces_section_title:
   :noindex:

   Predictor of signal peptides in proteins based on deep learning

   :homepage: https://github.com/BolognaBiocomp/deepsig
   :license: GPL / GPLv3
   :recipe: /`deepsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsig/meta.yaml>`_

   


.. conda:package:: deepsig

   |downloads_deepsig| |docker_deepsig|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends keras: ``2.4.3.*``
   :depends numpy: ``1.23.*``
   :depends python: ``=3.8,<3.9``
   :depends tensorflow: ``2.2.0.*``
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

      mamba install deepsig

   and update with::

      mamba update deepsig

  To create a new environment, run::

      mamba create --name myenvname deepsig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepsig:<tag>

   (see `deepsig/tags`_ for valid values for ``<tag>``)


.. |downloads_deepsig| image:: https://img.shields.io/conda/dn/bioconda/deepsig.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsig
   :alt:   (downloads)
.. |docker_deepsig| image:: https://quay.io/repository/biocontainers/deepsig/status
   :target: https://quay.io/repository/biocontainers/deepsig
.. _`deepsig/tags`: https://quay.io/repository/biocontainers/deepsig?tab=tags


.. raw:: html

    <script>
        var package = "deepsig";
        var versions = ["1.2.5","1.2.5","1.2.4","1.2.3","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsig/README.html