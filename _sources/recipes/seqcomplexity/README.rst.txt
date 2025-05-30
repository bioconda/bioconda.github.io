:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqcomplexity'
.. highlight: bash

seqcomplexity
=============

.. conda:recipe:: seqcomplexity
   :replaces_section_title:
   :noindex:

   Calculates Per\-Read and Total Sequence Complexity from FastQ file.


   :homepage: https://github.com/stevenweaver/seqcomplexity
   :license: MIT
   :recipe: /`seqcomplexity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcomplexity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcomplexity/meta.yaml>`_

   


.. conda:package:: seqcomplexity

   |downloads_seqcomplexity| |docker_seqcomplexity|

   :versions:
      
      

      ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends freetype: ``>=2.12.1,<3.0a0``
   :depends libexpat: ``>=2.6.4,<3.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
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

      mamba install seqcomplexity

   and update with::

      mamba update seqcomplexity

  To create a new environment, run::

      mamba create --name myenvname seqcomplexity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqcomplexity:<tag>

   (see `seqcomplexity/tags`_ for valid values for ``<tag>``)


.. |downloads_seqcomplexity| image:: https://img.shields.io/conda/dn/bioconda/seqcomplexity.svg?style=flat
   :target: https://anaconda.org/bioconda/seqcomplexity
   :alt:   (downloads)
.. |docker_seqcomplexity| image:: https://quay.io/repository/biocontainers/seqcomplexity/status
   :target: https://quay.io/repository/biocontainers/seqcomplexity
.. _`seqcomplexity/tags`: https://quay.io/repository/biocontainers/seqcomplexity?tab=tags


.. raw:: html

    <script>
        var package = "seqcomplexity";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcomplexity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcomplexity/README.html