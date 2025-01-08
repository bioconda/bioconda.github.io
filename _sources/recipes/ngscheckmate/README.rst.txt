:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngscheckmate'
.. highlight: bash

ngscheckmate
============

.. conda:recipe:: ngscheckmate
   :replaces_section_title:
   :noindex:

   Software package for identifying next generation sequencing \(NGS\) data files from the same individual.

   :homepage: https://github.com/parklab/NGSCheckMate
   :license: MIT
   :recipe: /`ngscheckmate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngscheckmate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngscheckmate/meta.yaml>`_

   This version is built from a pull request which fixes a handful of known bugs.


.. conda:package:: ngscheckmate

   |downloads_ngscheckmate| |docker_ngscheckmate|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bcftools: 
   :depends bowtie: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends python: ``2.7.*``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends samtools: 
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

      mamba install ngscheckmate

   and update with::

      mamba update ngscheckmate

  To create a new environment, run::

      mamba create --name myenvname ngscheckmate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngscheckmate:<tag>

   (see `ngscheckmate/tags`_ for valid values for ``<tag>``)


.. |downloads_ngscheckmate| image:: https://img.shields.io/conda/dn/bioconda/ngscheckmate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngscheckmate
   :alt:   (downloads)
.. |docker_ngscheckmate| image:: https://quay.io/repository/biocontainers/ngscheckmate/status
   :target: https://quay.io/repository/biocontainers/ngscheckmate
.. _`ngscheckmate/tags`: https://quay.io/repository/biocontainers/ngscheckmate?tab=tags


.. raw:: html

    <script>
        var package = "ngscheckmate";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngscheckmate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngscheckmate/README.html