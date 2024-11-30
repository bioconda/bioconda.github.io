:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nose-capturestderr'
.. highlight: bash

nose-capturestderr
==================

.. conda:recipe:: nose-capturestderr
   :replaces_section_title:
   :noindex:

   Nose plugin for capturing stderr.

   :homepage: http://github.com/sio2project/nose-capturestderr
   :license: GPL
   :recipe: /`nose-capturestderr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nose-capturestderr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nose-capturestderr/meta.yaml>`_

   


.. conda:package:: nose-capturestderr

   |downloads_nose-capturestderr| |docker_nose-capturestderr|

   :versions:
      
      

      ``1.2-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends nose: ``>=0.11.1``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends setuptools: 
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

      mamba install nose-capturestderr

   and update with::

      mamba update nose-capturestderr

  To create a new environment, run::

      mamba create --name myenvname nose-capturestderr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nose-capturestderr:<tag>

   (see `nose-capturestderr/tags`_ for valid values for ``<tag>``)


.. |downloads_nose-capturestderr| image:: https://img.shields.io/conda/dn/bioconda/nose-capturestderr.svg?style=flat
   :target: https://anaconda.org/bioconda/nose-capturestderr
   :alt:   (downloads)
.. |docker_nose-capturestderr| image:: https://quay.io/repository/biocontainers/nose-capturestderr/status
   :target: https://quay.io/repository/biocontainers/nose-capturestderr
.. _`nose-capturestderr/tags`: https://quay.io/repository/biocontainers/nose-capturestderr?tab=tags


.. raw:: html

    <script>
        var package = "nose-capturestderr";
        var versions = ["1.2","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nose-capturestderr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nose-capturestderr/README.html