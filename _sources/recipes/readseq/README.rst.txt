:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readseq'
.. highlight: bash

readseq
=======

.. conda:recipe:: readseq
   :replaces_section_title:
   :noindex:

   Read \& reformat biosequences\, Java command\-line version

   :homepage: http://iubio.bio.indiana.edu/soft/molbio/readseq/java/
   :license: PUBLIC DOMAIN
   :recipe: /`readseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq/meta.yaml>`_

   


.. conda:package:: readseq

   |downloads_readseq| |docker_readseq|

   :versions:
      
      

      ``2.1.30-1``,  ``2.1.30-0``

      

   
   :depends openjdk: 
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

      mamba install readseq

   and update with::

      mamba update readseq

  To create a new environment, run::

      mamba create --name myenvname readseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/readseq:<tag>

   (see `readseq/tags`_ for valid values for ``<tag>``)


.. |downloads_readseq| image:: https://img.shields.io/conda/dn/bioconda/readseq.svg?style=flat
   :target: https://anaconda.org/bioconda/readseq
   :alt:   (downloads)
.. |docker_readseq| image:: https://quay.io/repository/biocontainers/readseq/status
   :target: https://quay.io/repository/biocontainers/readseq
.. _`readseq/tags`: https://quay.io/repository/biocontainers/readseq?tab=tags


.. raw:: html

    <script>
        var package = "readseq";
        var versions = ["2.1.30","2.1.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readseq/README.html