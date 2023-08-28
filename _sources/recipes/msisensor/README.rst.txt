:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor'
.. highlight: bash

msisensor
=========

.. conda:recipe:: msisensor
   :replaces_section_title:
   :noindex:

   MSIsensor is a C\+\+ program to detect replication slippage variants at microsatellite regions\, and differentiate them as somatic or germline.

   :homepage: https://github.com/ding-lab/msisensor
   :license: MIT
   :recipe: /`msisensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor/meta.yaml>`_

   


.. conda:package:: msisensor

   |downloads_msisensor| |docker_msisensor|

   :versions:
      
      

      ``0.5-6``,  ``0.5-5``,  ``0.5-4``,  ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends openmp: 
   :depends zlib: 
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

      mamba install msisensor

   and update with::

      mamba update msisensor

  To create a new environment, run::

      mamba create --name myenvname msisensor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msisensor:<tag>

   (see `msisensor/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor| image:: https://img.shields.io/conda/dn/bioconda/msisensor.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor
   :alt:   (downloads)
.. |docker_msisensor| image:: https://quay.io/repository/biocontainers/msisensor/status
   :target: https://quay.io/repository/biocontainers/msisensor
.. _`msisensor/tags`: https://quay.io/repository/biocontainers/msisensor?tab=tags


.. raw:: html

    <script>
        var package = "msisensor";
        var versions = ["0.5","0.5","0.5","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor/README.html