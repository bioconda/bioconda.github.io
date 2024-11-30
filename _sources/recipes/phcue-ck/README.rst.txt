:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phcue-ck'
.. highlight: bash

phcue-ck
========

.. conda:recipe:: phcue-ck
   :replaces_section_title:
   :noindex:

   phcue\-ck \(pronounced \"F\-Q\-Seek\"\) is a simple tool to get FTP urls for FASTQ files on ENA.


   :homepage: https://lgi-onehealth.github.io/phcue-ck/
   :license: MIT
   :recipe: /`phcue-ck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phcue-ck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phcue-ck/meta.yaml>`_

   


.. conda:package:: phcue-ck

   |downloads_phcue-ck| |docker_phcue-ck|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends ca-certificates: 
   :depends libgcc-ng: ``>=12``
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

      mamba install phcue-ck

   and update with::

      mamba update phcue-ck

  To create a new environment, run::

      mamba create --name myenvname phcue-ck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phcue-ck:<tag>

   (see `phcue-ck/tags`_ for valid values for ``<tag>``)


.. |downloads_phcue-ck| image:: https://img.shields.io/conda/dn/bioconda/phcue-ck.svg?style=flat
   :target: https://anaconda.org/bioconda/phcue-ck
   :alt:   (downloads)
.. |docker_phcue-ck| image:: https://quay.io/repository/biocontainers/phcue-ck/status
   :target: https://quay.io/repository/biocontainers/phcue-ck
.. _`phcue-ck/tags`: https://quay.io/repository/biocontainers/phcue-ck?tab=tags


.. raw:: html

    <script>
        var package = "phcue-ck";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phcue-ck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phcue-ck/README.html