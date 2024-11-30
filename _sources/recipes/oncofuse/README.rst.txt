:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncofuse'
.. highlight: bash

oncofuse
========

.. conda:recipe:: oncofuse
   :replaces_section_title:
   :noindex:

   Predicting oncogenic potential of gene fusions

   :homepage: https://github.com/mikessh/oncofuse
   :license: Apache v2.0
   :recipe: /`oncofuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncofuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncofuse/meta.yaml>`_

   


.. conda:package:: oncofuse

   |downloads_oncofuse| |docker_oncofuse|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends openjdk: 
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

      mamba install oncofuse

   and update with::

      mamba update oncofuse

  To create a new environment, run::

      mamba create --name myenvname oncofuse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oncofuse:<tag>

   (see `oncofuse/tags`_ for valid values for ``<tag>``)


.. |downloads_oncofuse| image:: https://img.shields.io/conda/dn/bioconda/oncofuse.svg?style=flat
   :target: https://anaconda.org/bioconda/oncofuse
   :alt:   (downloads)
.. |docker_oncofuse| image:: https://quay.io/repository/biocontainers/oncofuse/status
   :target: https://quay.io/repository/biocontainers/oncofuse
.. _`oncofuse/tags`: https://quay.io/repository/biocontainers/oncofuse?tab=tags


.. raw:: html

    <script>
        var package = "oncofuse";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncofuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncofuse/README.html