:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samhaplotag'
.. highlight: bash

samhaplotag
===========

.. conda:recipe:: samhaplotag
   :replaces_section_title:
   :noindex:

   Processes haplotag barcodes in SAM format.

   :homepage: https://github.com/wtsi-hpag/SamHaplotag
   :license: MIT / MIT
   :recipe: /`samhaplotag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag/meta.yaml>`_

   Converts BC\/QT barcode SAM tags into haplotag RX\, QX and BX tags. Also contains a tool for converting barcodes from haplotag to 10x in fastq format. 


.. conda:package:: samhaplotag

   |downloads_samhaplotag| |docker_samhaplotag|

   :versions:
      
      

      ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install samhaplotag

   and update with::

      mamba update samhaplotag

  To create a new environment, run::

      mamba create --name myenvname samhaplotag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samhaplotag:<tag>

   (see `samhaplotag/tags`_ for valid values for ``<tag>``)


.. |downloads_samhaplotag| image:: https://img.shields.io/conda/dn/bioconda/samhaplotag.svg?style=flat
   :target: https://anaconda.org/bioconda/samhaplotag
   :alt:   (downloads)
.. |docker_samhaplotag| image:: https://quay.io/repository/biocontainers/samhaplotag/status
   :target: https://quay.io/repository/biocontainers/samhaplotag
.. _`samhaplotag/tags`: https://quay.io/repository/biocontainers/samhaplotag?tab=tags


.. raw:: html

    <script>
        var package = "samhaplotag";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samhaplotag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samhaplotag/README.html