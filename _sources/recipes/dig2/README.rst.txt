:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dig2'
.. highlight: bash

dig2
====

.. conda:recipe:: dig2
   :replaces_section_title:
   :noindex:

   dig2 is a simple but flexible in silico digester of protein sequences in the FASTA format. It allows for almost any enzyme to be simulated\, including MS\/MS enzymes to generate CID or ECD\/ETD fragments.

   :homepage: http://www.ms-utils.org/dig2/dig2.html
   :license: GPL3
   :recipe: /`dig2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dig2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dig2/meta.yaml>`_
   :links: biotools: :biotools:`dig2`

   


.. conda:package:: dig2

   |downloads_dig2| |docker_dig2|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install dig2

   and update with::

      mamba update dig2

  To create a new environment, run::

      mamba create --name myenvname dig2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dig2:<tag>

   (see `dig2/tags`_ for valid values for ``<tag>``)


.. |downloads_dig2| image:: https://img.shields.io/conda/dn/bioconda/dig2.svg?style=flat
   :target: https://anaconda.org/bioconda/dig2
   :alt:   (downloads)
.. |docker_dig2| image:: https://quay.io/repository/biocontainers/dig2/status
   :target: https://quay.io/repository/biocontainers/dig2
.. _`dig2/tags`: https://quay.io/repository/biocontainers/dig2?tab=tags


.. raw:: html

    <script>
        var package = "dig2";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dig2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dig2/README.html