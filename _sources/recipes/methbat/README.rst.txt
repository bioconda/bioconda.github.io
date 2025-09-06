:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methbat'
.. highlight: bash

methbat
=======

.. conda:recipe:: methbat
   :replaces_section_title:
   :noindex:

   A battery of methylation tools for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/MethBat
   :license: BSD-3-Clause-Clear
   :recipe: /`methbat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methbat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methbat/meta.yaml>`_

   


.. conda:package:: methbat

   |downloads_methbat| |docker_methbat|

   :versions:
      
      

      ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``

      

   
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

      mamba install methbat

   and update with::

      mamba update methbat

  To create a new environment, run::

      mamba create --name myenvname methbat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methbat:<tag>

   (see `methbat/tags`_ for valid values for ``<tag>``)


.. |downloads_methbat| image:: https://img.shields.io/conda/dn/bioconda/methbat.svg?style=flat
   :target: https://anaconda.org/bioconda/methbat
   :alt:   (downloads)
.. |docker_methbat| image:: https://quay.io/repository/biocontainers/methbat/status
   :target: https://quay.io/repository/biocontainers/methbat
.. _`methbat/tags`: https://quay.io/repository/biocontainers/methbat?tab=tags


.. raw:: html

    <script>
        var package = "methbat";
        var versions = ["0.16.0","0.15.0","0.14.2","0.14.1","0.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methbat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methbat/README.html