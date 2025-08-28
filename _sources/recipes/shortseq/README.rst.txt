:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortseq'
.. highlight: bash

shortseq
========

.. conda:recipe:: shortseq
   :replaces_section_title:
   :noindex:

   \\ ShortSeqs are compact and efficient Python objects that hold short sequences while using up to 73\% less memory compared to built\-in types. They have a pre\-computed hash value\, can be compared for equality\, and are easily converted back to the original sequence string.

   :homepage: https://github.com/AlexTate/ShortSeq
   :license: MIT
   :recipe: /`shortseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortseq/meta.yaml>`_

   


.. conda:package:: shortseq

   |downloads_shortseq| |docker_shortseq|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install shortseq

   and update with::

      mamba update shortseq

  To create a new environment, run::

      mamba create --name myenvname shortseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shortseq:<tag>

   (see `shortseq/tags`_ for valid values for ``<tag>``)


.. |downloads_shortseq| image:: https://img.shields.io/conda/dn/bioconda/shortseq.svg?style=flat
   :target: https://anaconda.org/bioconda/shortseq
   :alt:   (downloads)
.. |docker_shortseq| image:: https://quay.io/repository/biocontainers/shortseq/status
   :target: https://quay.io/repository/biocontainers/shortseq
.. _`shortseq/tags`: https://quay.io/repository/biocontainers/shortseq?tab=tags


.. raw:: html

    <script>
        var package = "shortseq";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortseq/README.html