:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsutils'
.. highlight: bash

ngsutils
========

.. conda:recipe:: ngsutils
   :replaces_section_title:
   :noindex:

   Tools for next\-generation sequencing analysis http\:\/\/ngsutils.org

   :homepage: http://ngsutils.org
   :license: BSD
   :recipe: /`ngsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils/meta.yaml>`_
   :links: biotools: :biotools:`ngsutils`

   


.. conda:package:: ngsutils

   |downloads_ngsutils| |docker_ngsutils|

   :versions:
      
      

      ``0.5.9-5``,  ``0.5.9-4``,  ``0.5.9-3``,  ``0.5.9-2``,  ``0.5.9-1``,  ``0.5.9-0``

      

   
   :depends coverage: 
   :depends eta: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends swalign: 
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

      mamba install ngsutils

   and update with::

      mamba update ngsutils

  To create a new environment, run::

      mamba create --name myenvname ngsutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsutils:<tag>

   (see `ngsutils/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsutils| image:: https://img.shields.io/conda/dn/bioconda/ngsutils.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsutils
   :alt:   (downloads)
.. |docker_ngsutils| image:: https://quay.io/repository/biocontainers/ngsutils/status
   :target: https://quay.io/repository/biocontainers/ngsutils
.. _`ngsutils/tags`: https://quay.io/repository/biocontainers/ngsutils?tab=tags


.. raw:: html

    <script>
        var package = "ngsutils";
        var versions = ["0.5.9","0.5.9","0.5.9","0.5.9","0.5.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsutils/README.html