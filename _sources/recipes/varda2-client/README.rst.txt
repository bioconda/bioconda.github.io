:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varda2-client'
.. highlight: bash

varda2-client
=============

.. conda:recipe:: varda2-client
   :replaces_section_title:
   :noindex:

   A python CLI to Varda2 frequency database server.

   :homepage: https://github.com/varda/varda2-client
   :license: MIT / MIT
   :recipe: /`varda2-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varda2-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varda2-client/meta.yaml>`_

   


.. conda:package:: varda2-client

   |downloads_varda2-client| |docker_varda2-client|

   :versions:
      
      

      ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.3-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: 
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

      mamba install varda2-client

   and update with::

      mamba update varda2-client

  To create a new environment, run::

      mamba create --name myenvname varda2-client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varda2-client:<tag>

   (see `varda2-client/tags`_ for valid values for ``<tag>``)


.. |downloads_varda2-client| image:: https://img.shields.io/conda/dn/bioconda/varda2-client.svg?style=flat
   :target: https://anaconda.org/bioconda/varda2-client
   :alt:   (downloads)
.. |docker_varda2-client| image:: https://quay.io/repository/biocontainers/varda2-client/status
   :target: https://quay.io/repository/biocontainers/varda2-client
.. _`varda2-client/tags`: https://quay.io/repository/biocontainers/varda2-client?tab=tags


.. raw:: html

    <script>
        var package = "varda2-client";
        var versions = ["0.9","0.8","0.7","0.6","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varda2-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varda2-client/README.html