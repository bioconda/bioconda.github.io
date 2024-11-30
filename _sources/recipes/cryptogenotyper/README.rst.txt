:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryptogenotyper'
.. highlight: bash

cryptogenotyper
===============

.. conda:recipe:: cryptogenotyper
   :replaces_section_title:
   :noindex:

   This package crypto\_typer\: tool to subtype the parasite\, Cryptosporidium\, based on the 18S and gp60 markers.

   :homepage: https://github.com/phac-nml/CryptoGenotyper
   :license: Apache License, Version 2.0
   :recipe: /`cryptogenotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptogenotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptogenotyper/meta.yaml>`_

   


.. conda:package:: cryptogenotyper

   |downloads_cryptogenotyper| |docker_cryptogenotyper|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: ``>=1.70,<1.78``
   :depends blast: ``2.9.0``
   :depends clustalw: ``>=2.1``
   :depends numpy: ``>=1.15.4``
   :depends python: ``>=3.4``
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

      mamba install cryptogenotyper

   and update with::

      mamba update cryptogenotyper

  To create a new environment, run::

      mamba create --name myenvname cryptogenotyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cryptogenotyper:<tag>

   (see `cryptogenotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_cryptogenotyper| image:: https://img.shields.io/conda/dn/bioconda/cryptogenotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/cryptogenotyper
   :alt:   (downloads)
.. |docker_cryptogenotyper| image:: https://quay.io/repository/biocontainers/cryptogenotyper/status
   :target: https://quay.io/repository/biocontainers/cryptogenotyper
.. _`cryptogenotyper/tags`: https://quay.io/repository/biocontainers/cryptogenotyper?tab=tags


.. raw:: html

    <script>
        var package = "cryptogenotyper";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryptogenotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryptogenotyper/README.html