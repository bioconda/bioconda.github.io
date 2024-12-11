:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gpatch'
.. highlight: bash

gpatch
======

.. conda:recipe:: gpatch
   :replaces_section_title:
   :noindex:

   Starting with alignments of contigs to a reference genome\, produce a chromosome\-scale pseudoassembly by patching gaps between mapped contigs with sequences from the reference.\"

   :homepage: https://github.com/adadiehl/GPatch.git
   :license: MIT / MIT
   :recipe: /`gpatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpatch/meta.yaml>`_

   


.. conda:package:: gpatch

   |downloads_gpatch| |docker_gpatch|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends biopython: ``>=1.84``
   :depends pysam: ``>=0.22.1``
   :depends python: ``>=3.7,<3.13``
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

      mamba install gpatch

   and update with::

      mamba update gpatch

  To create a new environment, run::

      mamba create --name myenvname gpatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gpatch:<tag>

   (see `gpatch/tags`_ for valid values for ``<tag>``)


.. |downloads_gpatch| image:: https://img.shields.io/conda/dn/bioconda/gpatch.svg?style=flat
   :target: https://anaconda.org/bioconda/gpatch
   :alt:   (downloads)
.. |docker_gpatch| image:: https://quay.io/repository/biocontainers/gpatch/status
   :target: https://quay.io/repository/biocontainers/gpatch
.. _`gpatch/tags`: https://quay.io/repository/biocontainers/gpatch?tab=tags


.. raw:: html

    <script>
        var package = "gpatch";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gpatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gpatch/README.html