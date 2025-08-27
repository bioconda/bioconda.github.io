:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiny-count'
.. highlight: bash

tiny-count
==========

.. conda:recipe:: tiny-count
   :replaces_section_title:
   :noindex:

   \\ A precision counting tool for hierarchical classification and quantification of small RNA\-seq reads. tiny\-count is part of the tinyRNA analysis pipeline.

   :homepage: https://github.com/MontgomeryLab/tinyRNA
   :license: GPLv3
   :recipe: /`tiny-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiny-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiny-count/meta.yaml>`_

   


.. conda:package:: tiny-count

   |downloads_tiny-count| |docker_tiny-count|

   :versions:
      
      

      ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0_patch1-0``

      

   
   :depends htseq: ``2.0.2.*``
   :depends libcxx: ``>=18``
   :depends numpy: ``1.23.1.*``
   :depends pandas: ``1.4.3.*``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends ruamel.yaml: ``0.17.16.*``
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

      mamba install tiny-count

   and update with::

      mamba update tiny-count

  To create a new environment, run::

      mamba create --name myenvname tiny-count

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tiny-count:<tag>

   (see `tiny-count/tags`_ for valid values for ``<tag>``)


.. |downloads_tiny-count| image:: https://img.shields.io/conda/dn/bioconda/tiny-count.svg?style=flat
   :target: https://anaconda.org/bioconda/tiny-count
   :alt:   (downloads)
.. |docker_tiny-count| image:: https://quay.io/repository/biocontainers/tiny-count/status
   :target: https://quay.io/repository/biocontainers/tiny-count
.. _`tiny-count/tags`: https://quay.io/repository/biocontainers/tiny-count?tab=tags


.. raw:: html

    <script>
        var package = "tiny-count";
        var versions = ["1.5.0","1.5.0","1.5.0","1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiny-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiny-count/README.html