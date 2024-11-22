:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ega-cryptor'
.. highlight: bash

ega-cryptor
===========

.. conda:recipe:: ega-cryptor
   :replaces_section_title:
   :noindex:

   EGA Cryptor v2.0.0 is a tool designed to encrypt files compliant with the European Genome\-phenome Archive \(EGA\)

   :homepage: https://ega-archive.org/submission/data/file-preparation/egacryptor/
   :license: Apache-2.0
   :recipe: /`ega-cryptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega-cryptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega-cryptor/meta.yaml>`_

   The EGACryptor v.2.0.0 is a JAVA\-based application which enables submitters to produce EGA compliant encrypted files along with files for the encrypted and unencrypted md5sum for each file to be submitted. The application will generate an output folder that will by default mirror the directory structure containing the original files. This output folder can subsequently be uploaded to the EGA FTP staging area via an FTP or Aspera client.


.. conda:package:: ega-cryptor

   |downloads_ega-cryptor| |docker_ega-cryptor|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends openjdk: ``>=8,<12``
   :depends python: ``>=3.6,<4.0``
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

      mamba install ega-cryptor

   and update with::

      mamba update ega-cryptor

  To create a new environment, run::

      mamba create --name myenvname ega-cryptor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ega-cryptor:<tag>

   (see `ega-cryptor/tags`_ for valid values for ``<tag>``)


.. |downloads_ega-cryptor| image:: https://img.shields.io/conda/dn/bioconda/ega-cryptor.svg?style=flat
   :target: https://anaconda.org/bioconda/ega-cryptor
   :alt:   (downloads)
.. |docker_ega-cryptor| image:: https://quay.io/repository/biocontainers/ega-cryptor/status
   :target: https://quay.io/repository/biocontainers/ega-cryptor
.. _`ega-cryptor/tags`: https://quay.io/repository/biocontainers/ega-cryptor?tab=tags


.. raw:: html

    <script>
        var package = "ega-cryptor";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ega-cryptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ega-cryptor/README.html