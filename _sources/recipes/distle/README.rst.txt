:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'distle'
.. highlight: bash

distle
======

.. conda:recipe:: distle
   :replaces_section_title:
   :noindex:

   Fast distance matrix calculations on fasta and cgmlst files

   :homepage: https://github.com/KHajji/distle
   :license: GPL3 / GPL-3.0-only
   :recipe: /`distle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/distle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/distle/meta.yaml>`_

   


.. conda:package:: distle

   |downloads_distle| |docker_distle|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install distle

   and update with::

      mamba update distle

  To create a new environment, run::

      mamba create --name myenvname distle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/distle:<tag>

   (see `distle/tags`_ for valid values for ``<tag>``)


.. |downloads_distle| image:: https://img.shields.io/conda/dn/bioconda/distle.svg?style=flat
   :target: https://anaconda.org/bioconda/distle
   :alt:   (downloads)
.. |docker_distle| image:: https://quay.io/repository/biocontainers/distle/status
   :target: https://quay.io/repository/biocontainers/distle
.. _`distle/tags`: https://quay.io/repository/biocontainers/distle?tab=tags


.. raw:: html

    <script>
        var package = "distle";
        var versions = ["0.3.0","0.2.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/distle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/distle/README.html