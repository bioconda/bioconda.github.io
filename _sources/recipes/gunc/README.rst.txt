:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gunc'
.. highlight: bash

gunc
====

.. conda:recipe:: gunc
   :replaces_section_title:
   :noindex:

   Python package for detection of chimerism and contamination in prokaryotic genomes.

   :homepage: https://github.com/grp-bork/gunc
   :documentation: https://grp-bork.embl-community.io/gunc/
   
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`gunc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gunc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gunc/meta.yaml>`_

   


.. conda:package:: gunc

   |downloads_gunc| |docker_gunc|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends diamond: ``2.0.4.*``
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
   :depends scipy: 
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

      mamba install gunc

   and update with::

      mamba update gunc

  To create a new environment, run::

      mamba create --name myenvname gunc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gunc:<tag>

   (see `gunc/tags`_ for valid values for ``<tag>``)


.. |downloads_gunc| image:: https://img.shields.io/conda/dn/bioconda/gunc.svg?style=flat
   :target: https://anaconda.org/bioconda/gunc
   :alt:   (downloads)
.. |docker_gunc| image:: https://quay.io/repository/biocontainers/gunc/status
   :target: https://quay.io/repository/biocontainers/gunc
.. _`gunc/tags`: https://quay.io/repository/biocontainers/gunc?tab=tags


.. raw:: html

    <script>
        var package = "gunc";
        var versions = ["1.0.5","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gunc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gunc/README.html