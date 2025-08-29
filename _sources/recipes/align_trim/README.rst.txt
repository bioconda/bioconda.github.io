:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'align_trim'
.. highlight: bash

align_trim
==========

.. conda:recipe:: align_trim
   :replaces_section_title:
   :noindex:

   ARTIC align\_trim\: A tool for trimming amplicon sequencing primers from aligned reads.

   :homepage: https://github.com/artic-network/align_trim
   :documentation: https://github.com/artic-network/align_trim/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`align_trim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_trim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_trim/meta.yaml>`_

   


.. conda:package:: align_trim

   |downloads_align_trim| |docker_align_trim|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends primalbedtools: ``>=0.10.1``
   :depends pysam: 
   :depends python: ``>=3.9``
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

      mamba install align_trim

   and update with::

      mamba update align_trim

  To create a new environment, run::

      mamba create --name myenvname align_trim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/align_trim:<tag>

   (see `align_trim/tags`_ for valid values for ``<tag>``)


.. |downloads_align_trim| image:: https://img.shields.io/conda/dn/bioconda/align_trim.svg?style=flat
   :target: https://anaconda.org/bioconda/align_trim
   :alt:   (downloads)
.. |docker_align_trim| image:: https://quay.io/repository/biocontainers/align_trim/status
   :target: https://quay.io/repository/biocontainers/align_trim
.. _`align_trim/tags`: https://quay.io/repository/biocontainers/align_trim?tab=tags


.. raw:: html

    <script>
        var package = "align_trim";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/align_trim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/align_trim/README.html