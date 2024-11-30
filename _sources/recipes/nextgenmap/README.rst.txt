:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextgenmap'
.. highlight: bash

nextgenmap
==========

.. conda:recipe:: nextgenmap
   :replaces_section_title:
   :noindex:

   NextGenMap is a flexible highly sensitive short read mapping tool that handles much higher mismatch rates than comparable algorithms while still outperforming them in terms of runtime.

   :homepage: https://github.com/Cibiv/NextGenMap
   :license: MIT / MIT
   :recipe: /`nextgenmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextgenmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextgenmap/meta.yaml>`_

   


.. conda:package:: nextgenmap

   |downloads_nextgenmap| |docker_nextgenmap|

   :versions:
      
      

      ``0.5.5-4``,  ``0.5.5-3``,  ``0.5.5-2``,  ``0.5.5-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.4.13-1``,  ``0.4.13-0``

      

   
   :depends binutils: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
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

      mamba install nextgenmap

   and update with::

      mamba update nextgenmap

  To create a new environment, run::

      mamba create --name myenvname nextgenmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextgenmap:<tag>

   (see `nextgenmap/tags`_ for valid values for ``<tag>``)


.. |downloads_nextgenmap| image:: https://img.shields.io/conda/dn/bioconda/nextgenmap.svg?style=flat
   :target: https://anaconda.org/bioconda/nextgenmap
   :alt:   (downloads)
.. |docker_nextgenmap| image:: https://quay.io/repository/biocontainers/nextgenmap/status
   :target: https://quay.io/repository/biocontainers/nextgenmap
.. _`nextgenmap/tags`: https://quay.io/repository/biocontainers/nextgenmap?tab=tags


.. raw:: html

    <script>
        var package = "nextgenmap";
        var versions = ["0.5.5","0.5.5","0.5.5","0.5.5","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextgenmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextgenmap/README.html