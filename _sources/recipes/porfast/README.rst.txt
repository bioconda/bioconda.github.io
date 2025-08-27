:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porfast'
.. highlight: bash

porfast
=======

.. conda:recipe:: porfast
   :replaces_section_title:
   :noindex:

   Extract ORFs from paired end Illumina reads \(FASTQ\).

   :homepage: https://github.com/telatin/porfast
   :license: MIT
   :recipe: /`porfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porfast/meta.yaml>`_

   


.. conda:package:: porfast

   |downloads_porfast| |docker_porfast|

   :versions:
      
      

      ``0.8.0-1``,  ``0.8.0-0``

      

   
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

      mamba install porfast

   and update with::

      mamba update porfast

  To create a new environment, run::

      mamba create --name myenvname porfast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/porfast:<tag>

   (see `porfast/tags`_ for valid values for ``<tag>``)


.. |downloads_porfast| image:: https://img.shields.io/conda/dn/bioconda/porfast.svg?style=flat
   :target: https://anaconda.org/bioconda/porfast
   :alt:   (downloads)
.. |docker_porfast| image:: https://quay.io/repository/biocontainers/porfast/status
   :target: https://quay.io/repository/biocontainers/porfast
.. _`porfast/tags`: https://quay.io/repository/biocontainers/porfast?tab=tags


.. raw:: html

    <script>
        var package = "porfast";
        var versions = ["0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porfast/README.html