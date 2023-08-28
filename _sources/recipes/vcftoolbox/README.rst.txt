:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcftoolbox'
.. highlight: bash

vcftoolbox
==========

.. conda:recipe:: vcftoolbox
   :replaces_section_title:
   :noindex:

   Tools for manipulating and parsing vcf files

   :homepage: http://github.com/moonso/vcftoolbox
   :license: MIT / MIT License
   :recipe: /`vcftoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftoolbox/meta.yaml>`_

   


.. conda:package:: vcftoolbox

   |downloads_vcftoolbox| |docker_vcftoolbox|

   :versions:
      
      

      ``1.5.1-0``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends python: 
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

      mamba install vcftoolbox

   and update with::

      mamba update vcftoolbox

  To create a new environment, run::

      mamba create --name myenvname vcftoolbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcftoolbox:<tag>

   (see `vcftoolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_vcftoolbox| image:: https://img.shields.io/conda/dn/bioconda/vcftoolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/vcftoolbox
   :alt:   (downloads)
.. |docker_vcftoolbox| image:: https://quay.io/repository/biocontainers/vcftoolbox/status
   :target: https://quay.io/repository/biocontainers/vcftoolbox
.. _`vcftoolbox/tags`: https://quay.io/repository/biocontainers/vcftoolbox?tab=tags


.. raw:: html

    <script>
        var package = "vcftoolbox";
        var versions = ["1.5.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftoolbox/README.html