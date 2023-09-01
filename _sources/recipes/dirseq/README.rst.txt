:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dirseq'
.. highlight: bash

dirseq
======

.. conda:recipe:: dirseq
   :replaces_section_title:
   :noindex:

   Work out whether RNAseq reads in general agree with the direction of the gene predicted.

   :homepage: https://github.com/wwood/dirseq
   :license: MIT / MIT
   :recipe: /`dirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dirseq/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41586-018-0338-1`

   


.. conda:package:: dirseq

   |downloads_dirseq| |docker_dirseq|

   :versions:
      
      

      ``0.4.3-0``

      

   
   :depends bedtools: 
   :depends ruby: ``2.4.*``
   :depends samtools: 
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

      mamba install dirseq

   and update with::

      mamba update dirseq

  To create a new environment, run::

      mamba create --name myenvname dirseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dirseq:<tag>

   (see `dirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_dirseq| image:: https://img.shields.io/conda/dn/bioconda/dirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/dirseq
   :alt:   (downloads)
.. |docker_dirseq| image:: https://quay.io/repository/biocontainers/dirseq/status
   :target: https://quay.io/repository/biocontainers/dirseq
.. _`dirseq/tags`: https://quay.io/repository/biocontainers/dirseq?tab=tags


.. raw:: html

    <script>
        var package = "dirseq";
        var versions = ["0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dirseq/README.html