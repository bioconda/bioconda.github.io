:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squigulator'
.. highlight: bash

squigulator
===========

.. conda:recipe:: squigulator
   :replaces_section_title:
   :noindex:

   A tool for simulating nanopore raw signal data

   :homepage: https://github.com/hasindu2008/squigulator
   :license: MIT / MIT
   :recipe: /`squigulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator/meta.yaml>`_

   squigulator is a tool for simulating nanopore raw signal data.


.. conda:package:: squigulator

   |downloads_squigulator| |docker_squigulator|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install squigulator

   and update with::

      mamba update squigulator

  To create a new environment, run::

      mamba create --name myenvname squigulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squigulator:<tag>

   (see `squigulator/tags`_ for valid values for ``<tag>``)


.. |downloads_squigulator| image:: https://img.shields.io/conda/dn/bioconda/squigulator.svg?style=flat
   :target: https://anaconda.org/bioconda/squigulator
   :alt:   (downloads)
.. |docker_squigulator| image:: https://quay.io/repository/biocontainers/squigulator/status
   :target: https://quay.io/repository/biocontainers/squigulator
.. _`squigulator/tags`: https://quay.io/repository/biocontainers/squigulator?tab=tags


.. raw:: html

    <script>
        var package = "squigulator";
        var versions = ["0.4.0","0.4.0","0.3.0","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squigulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squigulator/README.html