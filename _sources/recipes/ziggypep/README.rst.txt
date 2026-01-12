:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ziggypep'
.. highlight: bash

ziggypep
========

.. conda:recipe:: ziggypep
   :replaces_section_title:
   :noindex:

   Identify signal peptides in proteins

   :homepage: https://github.com/tseemann/ziggypep
   :license: GPL / GPL-3.0
   :recipe: /`ziggypep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ziggypep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ziggypep/meta.yaml>`_
   :links: biotools: :biotools:`ziggypep`

   


.. conda:package:: ziggypep

   |downloads_ziggypep| |docker_ziggypep|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends bzip2: 
   :depends perl: ``>=5.32.0``
   :depends zlib: 
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

      mamba install ziggypep

   and update with::

      mamba update ziggypep

  To create a new environment, run::

      mamba create --name myenvname ziggypep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ziggypep:<tag>

   (see `ziggypep/tags`_ for valid values for ``<tag>``)


.. |downloads_ziggypep| image:: https://img.shields.io/conda/dn/bioconda/ziggypep.svg?style=flat
   :target: https://anaconda.org/bioconda/ziggypep
   :alt:   (downloads)
.. |docker_ziggypep| image:: https://quay.io/repository/biocontainers/ziggypep/status
   :target: https://quay.io/repository/biocontainers/ziggypep
.. _`ziggypep/tags`: https://quay.io/repository/biocontainers/ziggypep?tab=tags


.. raw:: html

    <script>
        var package = "ziggypep";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ziggypep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ziggypep/README.html