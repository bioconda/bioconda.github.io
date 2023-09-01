:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpkmforgenes'
.. highlight: bash

rpkmforgenes
============

.. conda:recipe:: rpkmforgenes
   :replaces_section_title:
   :noindex:

   Calculates gene expression from a read mapping file

   :homepage: https://github.com/danielramskold/S3_species-specific_sequencing
   :license: Creative Commons Attribution License
   :recipe: /`rpkmforgenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes/meta.yaml>`_

   


.. conda:package:: rpkmforgenes

   |downloads_rpkmforgenes| |docker_rpkmforgenes|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
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

      mamba install rpkmforgenes

   and update with::

      mamba update rpkmforgenes

  To create a new environment, run::

      mamba create --name myenvname rpkmforgenes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rpkmforgenes:<tag>

   (see `rpkmforgenes/tags`_ for valid values for ``<tag>``)


.. |downloads_rpkmforgenes| image:: https://img.shields.io/conda/dn/bioconda/rpkmforgenes.svg?style=flat
   :target: https://anaconda.org/bioconda/rpkmforgenes
   :alt:   (downloads)
.. |docker_rpkmforgenes| image:: https://quay.io/repository/biocontainers/rpkmforgenes/status
   :target: https://quay.io/repository/biocontainers/rpkmforgenes
.. _`rpkmforgenes/tags`: https://quay.io/repository/biocontainers/rpkmforgenes?tab=tags


.. raw:: html

    <script>
        var package = "rpkmforgenes";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpkmforgenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpkmforgenes/README.html