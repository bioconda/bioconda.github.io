:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reseek'
.. highlight: bash

reseek
======

.. conda:recipe:: reseek
   :replaces_section_title:
   :noindex:

   Protein structure alignment and search algorithm.

   :homepage: https://github.com/rcedgar/reseek
   :documentation: https://drive5.com/reseek/doc.html
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`reseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseek/meta.yaml>`_

   


.. conda:package:: reseek

   |downloads_reseek| |docker_reseek|

   :versions:
      
      

      ``2.4-0``,  ``2.3-0``,  ``2.02-0``,  ``2.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
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

      mamba install reseek

   and update with::

      mamba update reseek

  To create a new environment, run::

      mamba create --name myenvname reseek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reseek:<tag>

   (see `reseek/tags`_ for valid values for ``<tag>``)


.. |downloads_reseek| image:: https://img.shields.io/conda/dn/bioconda/reseek.svg?style=flat
   :target: https://anaconda.org/bioconda/reseek
   :alt:   (downloads)
.. |docker_reseek| image:: https://quay.io/repository/biocontainers/reseek/status
   :target: https://quay.io/repository/biocontainers/reseek
.. _`reseek/tags`: https://quay.io/repository/biocontainers/reseek?tab=tags


.. raw:: html

    <script>
        var package = "reseek";
        var versions = ["2.4","2.3","2.02","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reseek/README.html