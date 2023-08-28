:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kyototycoon'
.. highlight: bash

kyototycoon
===========

.. conda:recipe:: kyototycoon
   :replaces_section_title:
   :noindex:

   a lightweight network server on top of the Kyoto Cabinet key\-value database\, built for high\-performance and concurrency

   :homepage: https://github.com/alticelabs/kyoto
   :license: GNU GPL v3.0
   :recipe: /`kyototycoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon/meta.yaml>`_

   


.. conda:package:: kyototycoon

   |downloads_kyototycoon| |docker_kyototycoon|

   :versions:
      
      

      ``20170410-4``,  ``20170410-3``,  ``20170410-2``,  ``20170410-1``,  ``20170410-0``,  ``2017.04.10-3``,  ``2017.04.10-2``,  ``2017.04.10-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends lzo: ``>=2.10,<3.0a0``
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

      mamba install kyototycoon

   and update with::

      mamba update kyototycoon

  To create a new environment, run::

      mamba create --name myenvname kyototycoon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kyototycoon:<tag>

   (see `kyototycoon/tags`_ for valid values for ``<tag>``)


.. |downloads_kyototycoon| image:: https://img.shields.io/conda/dn/bioconda/kyototycoon.svg?style=flat
   :target: https://anaconda.org/bioconda/kyototycoon
   :alt:   (downloads)
.. |docker_kyototycoon| image:: https://quay.io/repository/biocontainers/kyototycoon/status
   :target: https://quay.io/repository/biocontainers/kyototycoon
.. _`kyototycoon/tags`: https://quay.io/repository/biocontainers/kyototycoon?tab=tags


.. raw:: html

    <script>
        var package = "kyototycoon";
        var versions = ["20170410","20170410","20170410","20170410","20170410"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kyototycoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kyototycoon/README.html