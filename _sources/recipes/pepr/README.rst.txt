:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepr'
.. highlight: bash

pepr
====

.. conda:recipe:: pepr
   :replaces_section_title:
   :noindex:

   Peak\-calling and Prioritization pipeline for replicated ChIP\-Seq data

   :homepage: https://github.com/shawnzhangyx/PePr/
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`pepr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr/meta.yaml>`_

   


.. conda:package:: pepr

   |downloads_pepr| |docker_pepr|

   :versions:
      
      

      ``1.1.24-3``,  ``1.1.24-2``,  ``1.1.24-1``,  ``1.1.24-0``,  ``1.1.18-0``,  ``1.0.9-0``

      

   
   :depends numpy: ``>=1.6.0``
   :depends pysam: 
   :depends python: 
   :depends scipy: ``>=0.14.0``
   :depends sharedmem: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pepr

   and update with::

      mamba update pepr

  To create a new environment, run::

      mamba create --name myenvname pepr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pepr:<tag>

   (see `pepr/tags`_ for valid values for ``<tag>``)


.. |downloads_pepr| image:: https://img.shields.io/conda/dn/bioconda/pepr.svg?style=flat
   :target: https://anaconda.org/bioconda/pepr
   :alt:   (downloads)
.. |docker_pepr| image:: https://quay.io/repository/biocontainers/pepr/status
   :target: https://quay.io/repository/biocontainers/pepr
.. _`pepr/tags`: https://quay.io/repository/biocontainers/pepr?tab=tags


.. raw:: html

    <script>
        var package = "pepr";
        var versions = ["1.1.24","1.1.24","1.1.24","1.1.24","1.1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepr/README.html