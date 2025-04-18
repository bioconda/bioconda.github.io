:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpomatic'
.. highlight: bash

snpomatic
=========

.. conda:recipe:: snpomatic
   :replaces_section_title:
   :noindex:

   SNP\-o\-matic is a fast\, stringent short\-read mapping software.

   :homepage: https://github.com/magnusmanske/snpomatic
   :license: GPL3
   :recipe: /`snpomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpomatic/meta.yaml>`_

   


.. conda:package:: snpomatic

   |downloads_snpomatic| |docker_snpomatic|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install snpomatic

   and update with::

      mamba update snpomatic

  To create a new environment, run::

      mamba create --name myenvname snpomatic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpomatic:<tag>

   (see `snpomatic/tags`_ for valid values for ``<tag>``)


.. |downloads_snpomatic| image:: https://img.shields.io/conda/dn/bioconda/snpomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/snpomatic
   :alt:   (downloads)
.. |docker_snpomatic| image:: https://quay.io/repository/biocontainers/snpomatic/status
   :target: https://quay.io/repository/biocontainers/snpomatic
.. _`snpomatic/tags`: https://quay.io/repository/biocontainers/snpomatic?tab=tags


.. raw:: html

    <script>
        var package = "snpomatic";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpomatic/README.html