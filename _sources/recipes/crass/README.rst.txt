:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crass'
.. highlight: bash

crass
=====

.. conda:recipe:: crass
   :replaces_section_title:
   :noindex:

   Crass \(The CRISPR Assembler\) is a program that searches through raw metagenomic reads for Clustered Regularly Interspersed Short Palindromic Repeats

   :homepage: https://mummer4.github.io/
   :license: GNU General Public License v3.0
   :recipe: /`crass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crass/meta.yaml>`_

   


.. conda:package:: crass

   |downloads_crass| |docker_crass|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libtool: ``>=2.2``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xerces-c: ``3.1.*``
   :depends zlib: 
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

      mamba install crass

   and update with::

      mamba update crass

  To create a new environment, run::

      mamba create --name myenvname crass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crass:<tag>

   (see `crass/tags`_ for valid values for ``<tag>``)


.. |downloads_crass| image:: https://img.shields.io/conda/dn/bioconda/crass.svg?style=flat
   :target: https://anaconda.org/bioconda/crass
   :alt:   (downloads)
.. |docker_crass| image:: https://quay.io/repository/biocontainers/crass/status
   :target: https://quay.io/repository/biocontainers/crass
.. _`crass/tags`: https://quay.io/repository/biocontainers/crass?tab=tags


.. raw:: html

    <script>
        var package = "crass";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crass/README.html