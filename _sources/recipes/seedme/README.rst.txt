:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seedme'
.. highlight: bash

seedme
======

.. conda:recipe:: seedme
   :replaces_section_title:
   :noindex:

   Python REST like client for SeedMe.org

   :homepage: https://www.seedme.org/downloads
   :license: GPL
   :recipe: /`seedme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme/meta.yaml>`_

   


.. conda:package:: seedme

   |downloads_seedme| |docker_seedme|

   :versions:
      
      

      ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends curl: 
   :depends python: ``<3``
   :depends requests: ``2.7.0``
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

      mamba install seedme

   and update with::

      mamba update seedme

  To create a new environment, run::

      mamba create --name myenvname seedme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seedme:<tag>

   (see `seedme/tags`_ for valid values for ``<tag>``)


.. |downloads_seedme| image:: https://img.shields.io/conda/dn/bioconda/seedme.svg?style=flat
   :target: https://anaconda.org/bioconda/seedme
   :alt:   (downloads)
.. |docker_seedme| image:: https://quay.io/repository/biocontainers/seedme/status
   :target: https://quay.io/repository/biocontainers/seedme
.. _`seedme/tags`: https://quay.io/repository/biocontainers/seedme?tab=tags


.. raw:: html

    <script>
        var package = "seedme";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seedme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seedme/README.html