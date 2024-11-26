:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agc'
.. highlight: bash

agc
===

.. conda:recipe:: agc
   :replaces_section_title:
   :noindex:

   Assembled Genomes Compressor \(AGC\) is a tool designed to compress collections of de\-novo assembled genomes. It can be used for various types of datasets\: short genomes \(viruses\) as well as long \(humans\).

   :homepage: https://github.com/refresh-bio/agc
   :license: MIT
   :recipe: /`agc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agc/meta.yaml>`_

   


.. conda:package:: agc

   |downloads_agc| |docker_agc|

   :versions:
      
      

      ``3.2-0``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-0``,  ``2.1-0``,  ``2.0-0``,  ``1.1-0``

      

   
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

      mamba install agc

   and update with::

      mamba update agc

  To create a new environment, run::

      mamba create --name myenvname agc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agc:<tag>

   (see `agc/tags`_ for valid values for ``<tag>``)


.. |downloads_agc| image:: https://img.shields.io/conda/dn/bioconda/agc.svg?style=flat
   :target: https://anaconda.org/bioconda/agc
   :alt:   (downloads)
.. |docker_agc| image:: https://quay.io/repository/biocontainers/agc/status
   :target: https://quay.io/repository/biocontainers/agc
.. _`agc/tags`: https://quay.io/repository/biocontainers/agc?tab=tags


.. raw:: html

    <script>
        var package = "agc";
        var versions = ["3.2","3.1","3.1","3.1","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agc/README.html