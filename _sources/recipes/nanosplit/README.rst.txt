:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosplit'
.. highlight: bash

nanosplit
=========

.. conda:recipe:: nanosplit
   :replaces_section_title:
   :noindex:

   Perform splitting of Oxford Nanopore sequencing data in a fail and pass dataset.

   :homepage: https://github.com/wdecoster/nanosplit
   :license: MIT / MIT License
   :recipe: /`nanosplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosplit/meta.yaml>`_

   


.. conda:package:: nanosplit

   |downloads_nanosplit| |docker_nanosplit|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends biopython: 
   :depends nanoget: 
   :depends nanomath: 
   :depends pypandoc: 
   :depends python: ``3.5*``
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

      mamba install nanosplit

   and update with::

      mamba update nanosplit

  To create a new environment, run::

      mamba create --name myenvname nanosplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanosplit:<tag>

   (see `nanosplit/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosplit| image:: https://img.shields.io/conda/dn/bioconda/nanosplit.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosplit
   :alt:   (downloads)
.. |docker_nanosplit| image:: https://quay.io/repository/biocontainers/nanosplit/status
   :target: https://quay.io/repository/biocontainers/nanosplit
.. _`nanosplit/tags`: https://quay.io/repository/biocontainers/nanosplit?tab=tags


.. raw:: html

    <script>
        var package = "nanosplit";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosplit/README.html