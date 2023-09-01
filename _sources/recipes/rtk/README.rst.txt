:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtk'
.. highlight: bash

rtk
===

.. conda:recipe:: rtk
   :replaces_section_title:
   :noindex:

   rtk \- rarefaction toolkit for OTU tables

   :homepage: https://github.com/hildebra/Rarefaction/
   :license: GPLv2
   :recipe: /`rtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk/meta.yaml>`_

   


.. conda:package:: rtk

   |downloads_rtk| |docker_rtk|

   :versions:
      
      

      ``0.93.2-4``,  ``0.93.2-3``,  ``0.93.2-2``,  ``0.93.2-1``,  ``0.93.2-0``,  ``0.93.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install rtk

   and update with::

      mamba update rtk

  To create a new environment, run::

      mamba create --name myenvname rtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rtk:<tag>

   (see `rtk/tags`_ for valid values for ``<tag>``)


.. |downloads_rtk| image:: https://img.shields.io/conda/dn/bioconda/rtk.svg?style=flat
   :target: https://anaconda.org/bioconda/rtk
   :alt:   (downloads)
.. |docker_rtk| image:: https://quay.io/repository/biocontainers/rtk/status
   :target: https://quay.io/repository/biocontainers/rtk
.. _`rtk/tags`: https://quay.io/repository/biocontainers/rtk?tab=tags


.. raw:: html

    <script>
        var package = "rtk";
        var versions = ["0.93.2","0.93.2","0.93.2","0.93.2","0.93.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtk/README.html