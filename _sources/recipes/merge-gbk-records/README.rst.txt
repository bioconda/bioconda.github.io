:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merge-gbk-records'
.. highlight: bash

merge-gbk-records
=================

.. conda:recipe:: merge-gbk-records
   :replaces_section_title:
   :noindex:

   Turn multiple GenBank records \(either in multiple files or a single multi\-record file\) into a single record

   :homepage: http://github.com/kblin/merge-gbk-records
   :license: Apache / Apache-2.0
   :recipe: /`merge-gbk-records <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merge-gbk-records>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merge-gbk-records/meta.yaml>`_

   A small script to turn multiple GenBank records \(either in multiple files or a single multi\-record file\) into a 
   single record.
   Sequences are merged by concatenating them in order\, and putting a spacer sequence between them.
   Spacer sequence length can be given in kbp. It is possible to pick an all\-N spacer\, or using a spacer
   consisting of all\-frame stop codons.


.. conda:package:: merge-gbk-records

   |downloads_merge-gbk-records| |docker_merge-gbk-records|

   :versions:
      
      

      

      

   
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

      mamba install merge-gbk-records

   and update with::

      mamba update merge-gbk-records

  To create a new environment, run::

      mamba create --name myenvname merge-gbk-records

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/merge-gbk-records:<tag>

   (see `merge-gbk-records/tags`_ for valid values for ``<tag>``)


.. |downloads_merge-gbk-records| image:: https://img.shields.io/conda/dn/bioconda/merge-gbk-records.svg?style=flat
   :target: https://anaconda.org/bioconda/merge-gbk-records
   :alt:   (downloads)
.. |docker_merge-gbk-records| image:: https://quay.io/repository/biocontainers/merge-gbk-records/status
   :target: https://quay.io/repository/biocontainers/merge-gbk-records
.. _`merge-gbk-records/tags`: https://quay.io/repository/biocontainers/merge-gbk-records?tab=tags


.. raw:: html

    <script>
        var package = "merge-gbk-records";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merge-gbk-records/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merge-gbk-records/README.html