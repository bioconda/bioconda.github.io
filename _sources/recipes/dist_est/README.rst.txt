:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dist_est'
.. highlight: bash

dist_est
========

.. conda:recipe:: dist_est
   :replaces_section_title:
   :noindex:

   Estimation of Rates\-Across\-Sites Distributions in Phylogenetic Subsititution Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/ras.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`dist_est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est/meta.yaml>`_

   


.. conda:package:: dist_est

   |downloads_dist_est| |docker_dist_est|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install dist_est

   and update with::

      mamba update dist_est

  To create a new environment, run::

      mamba create --name myenvname dist_est

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dist_est:<tag>

   (see `dist_est/tags`_ for valid values for ``<tag>``)


.. |downloads_dist_est| image:: https://img.shields.io/conda/dn/bioconda/dist_est.svg?style=flat
   :target: https://anaconda.org/bioconda/dist_est
   :alt:   (downloads)
.. |docker_dist_est| image:: https://quay.io/repository/biocontainers/dist_est/status
   :target: https://quay.io/repository/biocontainers/dist_est
.. _`dist_est/tags`: https://quay.io/repository/biocontainers/dist_est?tab=tags


.. raw:: html

    <script>
        var package = "dist_est";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dist_est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dist_est/README.html