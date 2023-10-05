:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nthits'
.. highlight: bash

nthits
======

.. conda:recipe:: nthits
   :replaces_section_title:
   :noindex:

   ntHits is a tool for efficiently counting and filtering k\-mers based on their frequencies

   :homepage: https://github.com/bcgsc/ntHits
   :license: MIT / MIT
   :recipe: /`nthits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nthits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nthits/meta.yaml>`_

   


.. conda:package:: nthits

   |downloads_nthits| |docker_nthits|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.5.0``
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

      mamba install nthits

   and update with::

      mamba update nthits

  To create a new environment, run::

      mamba create --name myenvname nthits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nthits:<tag>

   (see `nthits/tags`_ for valid values for ``<tag>``)


.. |downloads_nthits| image:: https://img.shields.io/conda/dn/bioconda/nthits.svg?style=flat
   :target: https://anaconda.org/bioconda/nthits
   :alt:   (downloads)
.. |docker_nthits| image:: https://quay.io/repository/biocontainers/nthits/status
   :target: https://quay.io/repository/biocontainers/nthits
.. _`nthits/tags`: https://quay.io/repository/biocontainers/nthits?tab=tags


.. raw:: html

    <script>
        var package = "nthits";
        var versions = ["1.0.2","1.0.1","1.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nthits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nthits/README.html