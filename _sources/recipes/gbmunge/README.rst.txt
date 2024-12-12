:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbmunge'
.. highlight: bash

gbmunge
=======

.. conda:recipe:: gbmunge
   :replaces_section_title:
   :noindex:

   Munge GenBank files into FASTA and tab\-separated metadata.

   :homepage: https://github.com/sdwfrost/gbmunge
   :license: MIT / MIT
   :recipe: /`gbmunge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbmunge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbmunge/meta.yaml>`_

   


.. conda:package:: gbmunge

   |downloads_gbmunge| |docker_gbmunge|

   :versions:
      
      

      ``2018.07.06-7``,  ``2018.07.06-6``,  ``2018.07.06-5``,  ``2018.07.06-4``,  ``2018.07.06-3``,  ``2018.07.06-2``,  ``2018.07.06-1``,  ``2018.07.06-0``

      

   
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

      mamba install gbmunge

   and update with::

      mamba update gbmunge

  To create a new environment, run::

      mamba create --name myenvname gbmunge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gbmunge:<tag>

   (see `gbmunge/tags`_ for valid values for ``<tag>``)


.. |downloads_gbmunge| image:: https://img.shields.io/conda/dn/bioconda/gbmunge.svg?style=flat
   :target: https://anaconda.org/bioconda/gbmunge
   :alt:   (downloads)
.. |docker_gbmunge| image:: https://quay.io/repository/biocontainers/gbmunge/status
   :target: https://quay.io/repository/biocontainers/gbmunge
.. _`gbmunge/tags`: https://quay.io/repository/biocontainers/gbmunge?tab=tags


.. raw:: html

    <script>
        var package = "gbmunge";
        var versions = ["2018.07.06","2018.07.06","2018.07.06","2018.07.06","2018.07.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbmunge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbmunge/README.html