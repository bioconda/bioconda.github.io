:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imseq'
.. highlight: bash

imseq
=====

.. conda:recipe:: imseq
   :replaces_section_title:
   :noindex:

   IMSEQ is a fast\, PCR and sequencing error aware tool to analyze high throughput data from recombined T\-cell receptor or immunoglobulin gene sequencing experiments


   :homepage: http://www.imtools.org/
   :license: GPLv2
   :recipe: /`imseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq/meta.yaml>`_

   


.. conda:package:: imseq

   |downloads_imseq| |docker_imseq|

   :versions:
      
      

      ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install imseq

   and update with::

      mamba update imseq

  To create a new environment, run::

      mamba create --name myenvname imseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/imseq:<tag>

   (see `imseq/tags`_ for valid values for ``<tag>``)


.. |downloads_imseq| image:: https://img.shields.io/conda/dn/bioconda/imseq.svg?style=flat
   :target: https://anaconda.org/bioconda/imseq
   :alt:   (downloads)
.. |docker_imseq| image:: https://quay.io/repository/biocontainers/imseq/status
   :target: https://quay.io/repository/biocontainers/imseq
.. _`imseq/tags`: https://quay.io/repository/biocontainers/imseq?tab=tags


.. raw:: html

    <script>
        var package = "imseq";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imseq/README.html