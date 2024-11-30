:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'basic'
.. highlight: bash

basic
=====

.. conda:recipe:: basic
   :replaces_section_title:
   :noindex:

   BASIC is a semi\-de novo assembly method for assembling BCR and TCR genes  from single cell RNA\-seq data.

   :homepage: http://ttic.uchicago.edu/~aakhan/BASIC/
   :license: MIT
   :recipe: /`basic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basic/meta.yaml>`_

   


.. conda:package:: basic

   |downloads_basic| |docker_basic|

   :versions:
      
      

      ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.0.1-0``

      

   
   :depends bowtie2: 
   :depends python: 
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

      mamba install basic

   and update with::

      mamba update basic

  To create a new environment, run::

      mamba create --name myenvname basic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/basic:<tag>

   (see `basic/tags`_ for valid values for ``<tag>``)


.. |downloads_basic| image:: https://img.shields.io/conda/dn/bioconda/basic.svg?style=flat
   :target: https://anaconda.org/bioconda/basic
   :alt:   (downloads)
.. |docker_basic| image:: https://quay.io/repository/biocontainers/basic/status
   :target: https://quay.io/repository/biocontainers/basic
.. _`basic/tags`: https://quay.io/repository/biocontainers/basic?tab=tags


.. raw:: html

    <script>
        var package = "basic";
        var versions = ["1.5.1","1.5.1","1.5.0","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/basic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/basic/README.html