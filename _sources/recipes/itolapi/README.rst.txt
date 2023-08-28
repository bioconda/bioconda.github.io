:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itolapi'
.. highlight: bash

itolapi
=======

.. conda:recipe:: itolapi
   :replaces_section_title:
   :noindex:

   API for interacting with itol.embl.de

   :homepage: https://github.com/albertyw/itolapi
   :license: MIT / MIT License
   :recipe: /`itolapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolapi/meta.yaml>`_

   iTOL Python API for the Interactive Tree of Life \(iTOL\). Created by Albert Wang \(git at albertyw.com\) With Complements to\: \`iTOL \(Interactive Tree of Life\). This iTOL API allows local software to upload trees to iTOL using itol.py and export uploaded trees using itolexport.py using direct Python calls or through shell.  An active internet connection to the iTOL website is required.


.. conda:package:: itolapi

   |downloads_itolapi| |docker_itolapi|

   :versions:
      
      

      ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: ``>=2.0,<3.0``
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

      mamba install itolapi

   and update with::

      mamba update itolapi

  To create a new environment, run::

      mamba create --name myenvname itolapi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/itolapi:<tag>

   (see `itolapi/tags`_ for valid values for ``<tag>``)


.. |downloads_itolapi| image:: https://img.shields.io/conda/dn/bioconda/itolapi.svg?style=flat
   :target: https://anaconda.org/bioconda/itolapi
   :alt:   (downloads)
.. |docker_itolapi| image:: https://quay.io/repository/biocontainers/itolapi/status
   :target: https://quay.io/repository/biocontainers/itolapi
.. _`itolapi/tags`: https://quay.io/repository/biocontainers/itolapi?tab=tags


.. raw:: html

    <script>
        var package = "itolapi";
        var versions = ["4.1.0","4.0.2","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itolapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itolapi/README.html