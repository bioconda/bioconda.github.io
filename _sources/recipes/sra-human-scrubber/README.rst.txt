:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sra-human-scrubber'
.. highlight: bash

sra-human-scrubber
==================

.. conda:recipe:: sra-human-scrubber
   :replaces_section_title:
   :noindex:

   An SRA tool identifies and removes any significant human read\, and outputs the edited \(cleaned\) fastq file for SRA submission.

   :homepage: https://github.com/ncbi/sra-human-scrubber
   :license: Public Domain / Public Domain
   :recipe: /`sra-human-scrubber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-human-scrubber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-human-scrubber/meta.yaml>`_

   


.. conda:package:: sra-human-scrubber

   |downloads_sra-human-scrubber| |docker_sra-human-scrubber|

   :versions:
      
      

      ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.2021_05_05-0``

      

   
   :depends curl: 
   :depends python: ``>=3.7``
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

      mamba install sra-human-scrubber

   and update with::

      mamba update sra-human-scrubber

  To create a new environment, run::

      mamba create --name myenvname sra-human-scrubber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sra-human-scrubber:<tag>

   (see `sra-human-scrubber/tags`_ for valid values for ``<tag>``)


.. |downloads_sra-human-scrubber| image:: https://img.shields.io/conda/dn/bioconda/sra-human-scrubber.svg?style=flat
   :target: https://anaconda.org/bioconda/sra-human-scrubber
   :alt:   (downloads)
.. |docker_sra-human-scrubber| image:: https://quay.io/repository/biocontainers/sra-human-scrubber/status
   :target: https://quay.io/repository/biocontainers/sra-human-scrubber
.. _`sra-human-scrubber/tags`: https://quay.io/repository/biocontainers/sra-human-scrubber?tab=tags


.. raw:: html

    <script>
        var package = "sra-human-scrubber";
        var versions = ["2.2.1","2.1.0","2.0.0","1.0.2021_05_05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sra-human-scrubber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sra-human-scrubber/README.html