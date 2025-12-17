:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqhax'
.. highlight: bash

seqhax
======

.. conda:recipe:: seqhax
   :replaces_section_title:
   :noindex:

   A collection of next\-gen sequence data utilities

   :homepage: https://github.com/kdmurray91/seqhax
   :license: MPL2
   :recipe: /`seqhax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax/meta.yaml>`_

   


.. conda:package:: seqhax

   |downloads_seqhax| |docker_seqhax|

   :versions:
      
      

      ``0.8.6-1``,  ``0.8.6-0``,  ``0.7.2-5``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends htslib: ``>=1.20,<1.24.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install seqhax

   and update with::

      mamba update seqhax

  To create a new environment, run::

      mamba create --name myenvname seqhax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqhax:<tag>

   (see `seqhax/tags`_ for valid values for ``<tag>``)


.. |downloads_seqhax| image:: https://img.shields.io/conda/dn/bioconda/seqhax.svg?style=flat
   :target: https://anaconda.org/bioconda/seqhax
   :alt:   (downloads)
.. |docker_seqhax| image:: https://quay.io/repository/biocontainers/seqhax/status
   :target: https://quay.io/repository/biocontainers/seqhax
.. _`seqhax/tags`: https://quay.io/repository/biocontainers/seqhax?tab=tags


.. raw:: html

    <script>
        var package = "seqhax";
        var versions = ["0.8.6","0.8.6","0.7.2","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqhax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqhax/README.html