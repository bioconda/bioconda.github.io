:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migmap'
.. highlight: bash

migmap
======

.. conda:recipe:: migmap
   :replaces_section_title:
   :noindex:

   A wrapper for IgBlast V\-\(D\)\-J mapping tool designed to facilitate analysis immune receptor libraries profiled using high\-throughput sequencing.

   :homepage: https://github.com/mikessh/migmap
   :license: Apache / Apache-2.0
   :recipe: /`migmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migmap/meta.yaml>`_

   


.. conda:package:: migmap

   |downloads_migmap| |docker_migmap|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.9.7-0``

      

   
   :depends igblast: 
   :depends openjdk: ``<9``
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

      mamba install migmap

   and update with::

      mamba update migmap

  To create a new environment, run::

      mamba create --name myenvname migmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/migmap:<tag>

   (see `migmap/tags`_ for valid values for ``<tag>``)


.. |downloads_migmap| image:: https://img.shields.io/conda/dn/bioconda/migmap.svg?style=flat
   :target: https://anaconda.org/bioconda/migmap
   :alt:   (downloads)
.. |docker_migmap| image:: https://quay.io/repository/biocontainers/migmap/status
   :target: https://quay.io/repository/biocontainers/migmap
.. _`migmap/tags`: https://quay.io/repository/biocontainers/migmap?tab=tags


.. raw:: html

    <script>
        var package = "migmap";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migmap/README.html