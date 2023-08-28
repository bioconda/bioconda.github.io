:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'any2fasta'
.. highlight: bash

any2fasta
=========

.. conda:recipe:: any2fasta
   :replaces_section_title:
   :noindex:

   Convert various sequence formats to FASTA

   :homepage: https://github.com/tseemann/any2fasta
   :license: GPL-3.0
   :recipe: /`any2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta/meta.yaml>`_

   


.. conda:package:: any2fasta

   |downloads_any2fasta| |docker_any2fasta|

   :versions:
      
      

      ``0.4.2-3``,  ``0.4.2-2``,  ``0.4.2-1``

      

   
   :depends perl: 
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

      mamba install any2fasta

   and update with::

      mamba update any2fasta

  To create a new environment, run::

      mamba create --name myenvname any2fasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/any2fasta:<tag>

   (see `any2fasta/tags`_ for valid values for ``<tag>``)


.. |downloads_any2fasta| image:: https://img.shields.io/conda/dn/bioconda/any2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/any2fasta
   :alt:   (downloads)
.. |docker_any2fasta| image:: https://quay.io/repository/biocontainers/any2fasta/status
   :target: https://quay.io/repository/biocontainers/any2fasta
.. _`any2fasta/tags`: https://quay.io/repository/biocontainers/any2fasta?tab=tags


.. raw:: html

    <script>
        var package = "any2fasta";
        var versions = ["0.4.2","0.4.2","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/any2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/any2fasta/README.html