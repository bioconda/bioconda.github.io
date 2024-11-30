:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsc'
.. highlight: bash

lsc
===

.. conda:recipe:: lsc
   :replaces_section_title:
   :noindex:

   LSC is a long read error correction tool that offers fast correction with high sensitivity and good accuracy.

   :homepage: https://www.healthcare.uiowa.edu/labs/au/LSC/
   :license: Apache 2.0
   :recipe: /`lsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsc/meta.yaml>`_

   


.. conda:package:: lsc

   |downloads_lsc| |docker_lsc|

   :versions:
      
      

      ``2.0-2``,  ``2.0-0``

      

   
   :depends bowtie2: 
   :depends perl: 
   :depends python: ``<3``
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

      mamba install lsc

   and update with::

      mamba update lsc

  To create a new environment, run::

      mamba create --name myenvname lsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lsc:<tag>

   (see `lsc/tags`_ for valid values for ``<tag>``)


.. |downloads_lsc| image:: https://img.shields.io/conda/dn/bioconda/lsc.svg?style=flat
   :target: https://anaconda.org/bioconda/lsc
   :alt:   (downloads)
.. |docker_lsc| image:: https://quay.io/repository/biocontainers/lsc/status
   :target: https://quay.io/repository/biocontainers/lsc
.. _`lsc/tags`: https://quay.io/repository/biocontainers/lsc?tab=tags


.. raw:: html

    <script>
        var package = "lsc";
        var versions = ["2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsc/README.html