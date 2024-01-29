:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'insurveyor'
.. highlight: bash

insurveyor
==========

.. conda:recipe:: insurveyor
   :replaces_section_title:
   :noindex:

   An insertion caller for Illumina paired\-end WGS data.

   :homepage: https://github.com/kensung-lab/INSurVeyor
   :license: GPL-3.0-only
   :recipe: /`insurveyor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insurveyor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insurveyor/meta.yaml>`_

   INSurVeyor is a fast and accurate SV insertion caller for Illumina paired\-end WGS data.



.. conda:package:: insurveyor

   |downloads_insurveyor| |docker_insurveyor|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.2-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends pyfaidx: ``>=0.5.9.1,<0.8``
   :depends pysam: ``>=0.16.0.1,<0.21``
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

      mamba install insurveyor

   and update with::

      mamba update insurveyor

  To create a new environment, run::

      mamba create --name myenvname insurveyor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/insurveyor:<tag>

   (see `insurveyor/tags`_ for valid values for ``<tag>``)


.. |downloads_insurveyor| image:: https://img.shields.io/conda/dn/bioconda/insurveyor.svg?style=flat
   :target: https://anaconda.org/bioconda/insurveyor
   :alt:   (downloads)
.. |docker_insurveyor| image:: https://quay.io/repository/biocontainers/insurveyor/status
   :target: https://quay.io/repository/biocontainers/insurveyor
.. _`insurveyor/tags`: https://quay.io/repository/biocontainers/insurveyor?tab=tags


.. raw:: html

    <script>
        var package = "insurveyor";
        var versions = ["1.1.2","1.1.1","1.1.1","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/insurveyor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/insurveyor/README.html