:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genefuse'
.. highlight: bash

genefuse
========

.. conda:recipe:: genefuse
   :replaces_section_title:
   :noindex:

   Gene fusion detection and visualization

   :homepage: https://github.com/OpenGene/genefuse
   :license: MIT
   :recipe: /`genefuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genefuse/meta.yaml>`_

   


.. conda:package:: genefuse

   |downloads_genefuse| |docker_genefuse|

   :versions:
      
      

      ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install genefuse

   and update with::

      mamba update genefuse

  To create a new environment, run::

      mamba create --name myenvname genefuse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genefuse:<tag>

   (see `genefuse/tags`_ for valid values for ``<tag>``)


.. |downloads_genefuse| image:: https://img.shields.io/conda/dn/bioconda/genefuse.svg?style=flat
   :target: https://anaconda.org/bioconda/genefuse
   :alt:   (downloads)
.. |docker_genefuse| image:: https://quay.io/repository/biocontainers/genefuse/status
   :target: https://quay.io/repository/biocontainers/genefuse
.. _`genefuse/tags`: https://quay.io/repository/biocontainers/genefuse?tab=tags


.. raw:: html

    <script>
        var package = "genefuse";
        var versions = ["0.8.0","0.8.0","0.8.0","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genefuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genefuse/README.html