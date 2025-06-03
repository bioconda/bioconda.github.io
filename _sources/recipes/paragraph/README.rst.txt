:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paragraph'
.. highlight: bash

paragraph
=========

.. conda:recipe:: paragraph
   :replaces_section_title:
   :noindex:

   Graph realignment tools for structural variants

   :homepage: https://github.com/Illumina/paragraph
   :license: Apache License 2.0
   :recipe: /`paragraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph/meta.yaml>`_

   


.. conda:package:: paragraph

   |downloads_paragraph| |docker_paragraph|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2b-0``,  ``2.2a-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.10.2,<1.23.0a0``
   :depends intervaltree: 
   :depends jsonschema: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pysam: 
   :depends python: ``>=3``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install paragraph

   and update with::

      mamba update paragraph

  To create a new environment, run::

      mamba create --name myenvname paragraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paragraph:<tag>

   (see `paragraph/tags`_ for valid values for ``<tag>``)


.. |downloads_paragraph| image:: https://img.shields.io/conda/dn/bioconda/paragraph.svg?style=flat
   :target: https://anaconda.org/bioconda/paragraph
   :alt:   (downloads)
.. |docker_paragraph| image:: https://quay.io/repository/biocontainers/paragraph/status
   :target: https://quay.io/repository/biocontainers/paragraph
.. _`paragraph/tags`: https://quay.io/repository/biocontainers/paragraph?tab=tags


.. raw:: html

    <script>
        var package = "paragraph";
        var versions = ["2.3","2.3","2.2b","2.2a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paragraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paragraph/README.html