:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam-readcount'
.. highlight: bash

bam-readcount
=============

.. conda:recipe:: bam-readcount
   :replaces_section_title:
   :noindex:

   bam\-readcount generates metrics at single nucleotide positions.

   :homepage: https://github.com/genome/bam-readcount
   :documentation: https://github.com/genome/bam-readcount/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`bam-readcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.03722`, biotools: :biotools:`bam-readcount`

   


.. conda:package:: bam-readcount

   |downloads_bam-readcount| |docker_bam-readcount|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``0.8-4``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends pthread-stubs: 
   :depends python: 
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

      mamba install bam-readcount

   and update with::

      mamba update bam-readcount

  To create a new environment, run::

      mamba create --name myenvname bam-readcount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bam-readcount:<tag>

   (see `bam-readcount/tags`_ for valid values for ``<tag>``)


.. |downloads_bam-readcount| image:: https://img.shields.io/conda/dn/bioconda/bam-readcount.svg?style=flat
   :target: https://anaconda.org/bioconda/bam-readcount
   :alt:   (downloads)
.. |docker_bam-readcount| image:: https://quay.io/repository/biocontainers/bam-readcount/status
   :target: https://quay.io/repository/biocontainers/bam-readcount
.. _`bam-readcount/tags`: https://quay.io/repository/biocontainers/bam-readcount?tab=tags


.. raw:: html

    <script>
        var package = "bam-readcount";
        var versions = ["1.0.1","1.0.1","0.8","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam-readcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam-readcount/README.html