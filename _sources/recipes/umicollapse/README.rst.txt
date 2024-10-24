:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umicollapse'
.. highlight: bash

umicollapse
===========

.. conda:recipe:: umicollapse
   :replaces_section_title:
   :noindex:

   Accelerating the deduplication and collapsing process for reads with Unique Molecular Identifiers \(UMI\).

   :homepage: https://github.com/Daniel-Liu-c0deb0t/UMICollapse
   :license: MIT / MIT
   :recipe: /`umicollapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umicollapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umicollapse/meta.yaml>`_

   UMIs are a popular way to identify duplicate DNA\/RNA reads caused by PCR amplification. This requires software for collapsing duplicate reads with the same UMI\, while accounting for sequencing\/PCR errors. This tool implements many efficient algorithms for orders\-of\-magnitude faster UMI deduplication than previous tools \(UMI\-tools\, etc.\)\, while maintaining similar functionality. This is achieved by using faster data structures with n\-grams and BK\-trees\, along other techniques that are carefully implemented to scale well to larger datasets and longer UMIs. Users of UMICollapse have reported speedups from taking hours or days to run with a previous tool to taking only a few minutes with this tool with real datasets\! doi 10.7717\/peerj.8275.


.. conda:package:: umicollapse

   |downloads_umicollapse| |docker_umicollapse|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends openjdk: ``>=17``
   :depends python: 
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

      mamba install umicollapse

   and update with::

      mamba update umicollapse

  To create a new environment, run::

      mamba create --name myenvname umicollapse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umicollapse:<tag>

   (see `umicollapse/tags`_ for valid values for ``<tag>``)


.. |downloads_umicollapse| image:: https://img.shields.io/conda/dn/bioconda/umicollapse.svg?style=flat
   :target: https://anaconda.org/bioconda/umicollapse
   :alt:   (downloads)
.. |docker_umicollapse| image:: https://quay.io/repository/biocontainers/umicollapse/status
   :target: https://quay.io/repository/biocontainers/umicollapse
.. _`umicollapse/tags`: https://quay.io/repository/biocontainers/umicollapse?tab=tags


.. raw:: html

    <script>
        var package = "umicollapse";
        var versions = ["1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umicollapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umicollapse/README.html