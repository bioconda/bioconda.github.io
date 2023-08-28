:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansam'
.. highlight: bash

cansam
======

.. conda:recipe:: cansam
   :replaces_section_title:
   :noindex:

   C\+\+ binding for SAM\/BAM files

   :homepage: https://github.com/jmarshall/cansam/
   :license: BSD / BSD-3-Clause
   :recipe: /`cansam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam/meta.yaml>`_

   


.. conda:package:: cansam

   |downloads_cansam| |docker_cansam|

   :versions:
      
      

      ``21d64bb-7``,  ``21d64bb-6``,  ``21d64bb-5``,  ``21d64bb-4``,  ``21d64bb-3``,  ``21d64bb-2``,  ``21d64bb-1``,  ``21d64bb-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cansam

   and update with::

      mamba update cansam

  To create a new environment, run::

      mamba create --name myenvname cansam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cansam:<tag>

   (see `cansam/tags`_ for valid values for ``<tag>``)


.. |downloads_cansam| image:: https://img.shields.io/conda/dn/bioconda/cansam.svg?style=flat
   :target: https://anaconda.org/bioconda/cansam
   :alt:   (downloads)
.. |docker_cansam| image:: https://quay.io/repository/biocontainers/cansam/status
   :target: https://quay.io/repository/biocontainers/cansam
.. _`cansam/tags`: https://quay.io/repository/biocontainers/cansam?tab=tags


.. raw:: html

    <script>
        var package = "cansam";
        var versions = ["21d64bb","21d64bb","21d64bb","21d64bb","21d64bb"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansam/README.html