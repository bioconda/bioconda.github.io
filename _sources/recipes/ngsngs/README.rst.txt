:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsngs'
.. highlight: bash

ngsngs
======

.. conda:recipe:: ngsngs
   :replaces_section_title:
   :noindex:

   NGSNGS\: Next Generation Simulator for Next Generation Sequencing data

   :homepage: https://github.com/rahenriksen/ngsngs
   :license: GPLv3, MIT
   :recipe: /`ngsngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsngs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad041`

   


.. conda:package:: ngsngs

   |downloads_ngsngs| |docker_ngsngs|

   :versions:
      
      

      ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.24.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xz: 
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

      mamba install ngsngs

   and update with::

      mamba update ngsngs

  To create a new environment, run::

      mamba create --name myenvname ngsngs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsngs:<tag>

   (see `ngsngs/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsngs| image:: https://img.shields.io/conda/dn/bioconda/ngsngs.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsngs
   :alt:   (downloads)
.. |docker_ngsngs| image:: https://quay.io/repository/biocontainers/ngsngs/status
   :target: https://quay.io/repository/biocontainers/ngsngs
.. _`ngsngs/tags`: https://quay.io/repository/biocontainers/ngsngs?tab=tags


.. raw:: html

    <script>
        var package = "ngsngs";
        var versions = ["0.9.2","0.9.2","0.9.2","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsngs/README.html