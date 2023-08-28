:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ole-storage_lite'
.. highlight: bash

perl-ole-storage_lite
=====================

.. conda:recipe:: perl-ole-storage_lite
   :replaces_section_title:
   :noindex:

   Read and write OLE storage files.

   :homepage: http://metacpan.org/pod/OLE-Storage_Lite
   :license: unknown
   :recipe: /`perl-ole-storage_lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ole-storage_lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ole-storage_lite/meta.yaml>`_

   


.. conda:package:: perl-ole-storage_lite

   |downloads_perl-ole-storage_lite| |docker_perl-ole-storage_lite|

   :versions:
      
      

      ``0.20-0``,  ``0.19-3``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-ole-storage_lite

   and update with::

      mamba update perl-ole-storage_lite

  To create a new environment, run::

      mamba create --name myenvname perl-ole-storage_lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ole-storage_lite:<tag>

   (see `perl-ole-storage_lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ole-storage_lite| image:: https://img.shields.io/conda/dn/bioconda/perl-ole-storage_lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ole-storage_lite
   :alt:   (downloads)
.. |docker_perl-ole-storage_lite| image:: https://quay.io/repository/biocontainers/perl-ole-storage_lite/status
   :target: https://quay.io/repository/biocontainers/perl-ole-storage_lite
.. _`perl-ole-storage_lite/tags`: https://quay.io/repository/biocontainers/perl-ole-storage_lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-ole-storage_lite";
        var versions = ["0.20","0.19","0.19","0.19","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ole-storage_lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ole-storage_lite/README.html