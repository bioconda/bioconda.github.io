:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnrandomread'
.. highlight: bash

hmnrandomread
=============

.. conda:recipe:: hmnrandomread
   :replaces_section_title:
   :noindex:

   A sequence\-read simulator program for NGS

   :homepage: https://github.com/guillaume-gricourt/HmnRandomRead
   :license: MIT
   :recipe: /`hmnrandomread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread/meta.yaml>`_

   A sequence\-read simulator program for NGS


.. conda:package:: hmnrandomread

   |downloads_hmnrandomread| |docker_hmnrandomread|

   :versions:
      
      

      ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pytest: 
   :depends python: 
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

      mamba install hmnrandomread

   and update with::

      mamba update hmnrandomread

  To create a new environment, run::

      mamba create --name myenvname hmnrandomread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmnrandomread:<tag>

   (see `hmnrandomread/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnrandomread| image:: https://img.shields.io/conda/dn/bioconda/hmnrandomread.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnrandomread
   :alt:   (downloads)
.. |docker_hmnrandomread| image:: https://quay.io/repository/biocontainers/hmnrandomread/status
   :target: https://quay.io/repository/biocontainers/hmnrandomread
.. _`hmnrandomread/tags`: https://quay.io/repository/biocontainers/hmnrandomread?tab=tags


.. raw:: html

    <script>
        var package = "hmnrandomread";
        var versions = ["0.10.0","0.10.0","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnrandomread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnrandomread/README.html