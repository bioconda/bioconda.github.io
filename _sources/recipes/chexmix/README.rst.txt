:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chexmix'
.. highlight: bash

chexmix
=======

.. conda:recipe:: chexmix
   :replaces_section_title:
   :noindex:

   ChExMix aims to characterize protein\-DNA binding subtypes in ChIP\-exo experiments. ChExMix assumes that different regulatory complexes will result in different protein\-DNA crosslinking signatures in ChIP\-exo data\, and thus analysis of ChIP\-exo sequencing tag patterns should enable detection of multiple protein\-DNA binding modes for a given regulatory protein. ChExMix uses a mixture modeling framework to probabilistically model the genomic locations and subtype membership of protein\-DNA binding events\, leveraging both ChIP\-exo tag enrichment patterns and DNA sequence information. In doing so\, ChExMix offers a more principled and robust approach to characterizing binding subtypes than simply clustering binding events using motif information.

   :homepage: http://mahonylab.org/software/chexmix/
   :license: MIT
   :recipe: /`chexmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexmix/meta.yaml>`_

   


.. conda:package:: chexmix

   |downloads_chexmix| |docker_chexmix|

   :versions:
      
      

      ``0.52-0``,  ``0.51-0``,  ``0.45-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
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

      mamba install chexmix

   and update with::

      mamba update chexmix

  To create a new environment, run::

      mamba create --name myenvname chexmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chexmix:<tag>

   (see `chexmix/tags`_ for valid values for ``<tag>``)


.. |downloads_chexmix| image:: https://img.shields.io/conda/dn/bioconda/chexmix.svg?style=flat
   :target: https://anaconda.org/bioconda/chexmix
   :alt:   (downloads)
.. |docker_chexmix| image:: https://quay.io/repository/biocontainers/chexmix/status
   :target: https://quay.io/repository/biocontainers/chexmix
.. _`chexmix/tags`: https://quay.io/repository/biocontainers/chexmix?tab=tags


.. raw:: html

    <script>
        var package = "chexmix";
        var versions = ["0.52","0.51","0.45","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chexmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chexmix/README.html