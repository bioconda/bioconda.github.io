:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snapgene-reader'
.. highlight: bash

snapgene-reader
===============

.. conda:recipe:: snapgene-reader
   :replaces_section_title:
   :noindex:

   Convert Snapgene \*.dna files dict\/json\/biopython.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/SnapGeneReader
   :documentation: https://github.com/Edinburgh-Genome-Foundry/SnapGeneReader/blob/v0.1.23/README.rst
   
   :license: MIT / MIT
   :recipe: /`snapgene-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader/meta.yaml>`_

   


.. conda:package:: snapgene-reader

   |downloads_snapgene-reader| |docker_snapgene-reader|

   :versions:
      
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``

      

   
   :depends biopython: 
   :depends html2text: 
   :depends python: ``>=3``
   :depends xmltodict: 
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

      mamba install snapgene-reader

   and update with::

      mamba update snapgene-reader

  To create a new environment, run::

      mamba create --name myenvname snapgene-reader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snapgene-reader:<tag>

   (see `snapgene-reader/tags`_ for valid values for ``<tag>``)


.. |downloads_snapgene-reader| image:: https://img.shields.io/conda/dn/bioconda/snapgene-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/snapgene-reader
   :alt:   (downloads)
.. |docker_snapgene-reader| image:: https://quay.io/repository/biocontainers/snapgene-reader/status
   :target: https://quay.io/repository/biocontainers/snapgene-reader
.. _`snapgene-reader/tags`: https://quay.io/repository/biocontainers/snapgene-reader?tab=tags


.. raw:: html

    <script>
        var package = "snapgene-reader";
        var versions = ["0.1.23","0.1.22","0.1.21","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snapgene-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snapgene-reader/README.html