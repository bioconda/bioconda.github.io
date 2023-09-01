:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wham'
.. highlight: bash

wham
====

.. conda:recipe:: wham
   :replaces_section_title:
   :noindex:

   Structural variant detection and association testing

   :homepage: https://github.com/zeeev/wham
   :license: MIT / MIT
   :recipe: /`wham <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham/meta.yaml>`_
   :links: biotools: :biotools:`Wham6216`

   


.. conda:package:: wham

   |downloads_wham| |docker_wham|

   :versions:
      
      

      ``1.8.0.1.2017.05.03-1``,  ``1.8.0.1.2017.05.03-0``,  ``1.8.0-0``,  ``1.7.0.311-1``,  ``1.7.0.311-0``,  ``1.7.0.307-0``,  ``1.7.0.162-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install wham

   and update with::

      mamba update wham

  To create a new environment, run::

      mamba create --name myenvname wham

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wham:<tag>

   (see `wham/tags`_ for valid values for ``<tag>``)


.. |downloads_wham| image:: https://img.shields.io/conda/dn/bioconda/wham.svg?style=flat
   :target: https://anaconda.org/bioconda/wham
   :alt:   (downloads)
.. |docker_wham| image:: https://quay.io/repository/biocontainers/wham/status
   :target: https://quay.io/repository/biocontainers/wham
.. _`wham/tags`: https://quay.io/repository/biocontainers/wham?tab=tags


.. raw:: html

    <script>
        var package = "wham";
        var versions = ["1.8.0.1.2017.05.03","1.8.0.1.2017.05.03","1.8.0","1.7.0.311","1.7.0.311"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wham/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wham/README.html