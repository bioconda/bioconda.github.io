:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piler'
.. highlight: bash

piler
=====

.. conda:recipe:: piler
   :replaces_section_title:
   :noindex:

   PILER is public domain software for analyzing repetitive DNA found in genome sequences.

   :homepage: http://www.drive5.com/piler
   :license: public domain
   :recipe: /`piler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler/meta.yaml>`_

   


.. conda:package:: piler

   |downloads_piler| |docker_piler|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
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

      mamba install piler

   and update with::

      mamba update piler

  To create a new environment, run::

      mamba create --name myenvname piler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piler:<tag>

   (see `piler/tags`_ for valid values for ``<tag>``)


.. |downloads_piler| image:: https://img.shields.io/conda/dn/bioconda/piler.svg?style=flat
   :target: https://anaconda.org/bioconda/piler
   :alt:   (downloads)
.. |docker_piler| image:: https://quay.io/repository/biocontainers/piler/status
   :target: https://quay.io/repository/biocontainers/piler
.. _`piler/tags`: https://quay.io/repository/biocontainers/piler?tab=tags


.. raw:: html

    <script>
        var package = "piler";
        var versions = ["0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piler/README.html