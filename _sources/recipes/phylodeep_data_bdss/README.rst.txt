:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodeep_data_bdss'
.. highlight: bash

phylodeep_data_bdss
===================

.. conda:recipe:: phylodeep_data_bdss
   :replaces_section_title:
   :noindex:

   Package containing data for the phylodeep package.

   :homepage: https://github.com/evolbioinfo/phylodeep_data_bdss
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phylodeep_data_bdss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep_data_bdss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep_data_bdss/meta.yaml>`_

   


.. conda:package:: phylodeep_data_bdss

   |downloads_phylodeep_data_bdss| |docker_phylodeep_data_bdss|

   :versions:
      
      

      ``0.4-0``,  ``0.3-0``

      

   
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3``
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

      mamba install phylodeep_data_bdss

   and update with::

      mamba update phylodeep_data_bdss

  To create a new environment, run::

      mamba create --name myenvname phylodeep_data_bdss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylodeep_data_bdss:<tag>

   (see `phylodeep_data_bdss/tags`_ for valid values for ``<tag>``)


.. |downloads_phylodeep_data_bdss| image:: https://img.shields.io/conda/dn/bioconda/phylodeep_data_bdss.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodeep_data_bdss
   :alt:   (downloads)
.. |docker_phylodeep_data_bdss| image:: https://quay.io/repository/biocontainers/phylodeep_data_bdss/status
   :target: https://quay.io/repository/biocontainers/phylodeep_data_bdss
.. _`phylodeep_data_bdss/tags`: https://quay.io/repository/biocontainers/phylodeep_data_bdss?tab=tags


.. raw:: html

    <script>
        var package = "phylodeep_data_bdss";
        var versions = ["0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodeep_data_bdss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodeep_data_bdss/README.html