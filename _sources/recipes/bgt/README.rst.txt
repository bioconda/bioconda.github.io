:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgt'
.. highlight: bash

bgt
===

.. conda:recipe:: bgt
   :replaces_section_title:
   :noindex:

   Flexible genotype query among 30\,000\+ samples whole\-genome.

   :homepage: https://github.com/lh3/bgt
   :license: MIT
   :recipe: /`bgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt/meta.yaml>`_

   


.. conda:package:: bgt

   |downloads_bgt| |docker_bgt|

   :versions:
      
      

      ``r283-6``,  ``r283-5``,  ``r283-4``,  ``r283-3``,  ``r283-2``,  ``r283-1``,  ``r283-0``,  ``r277-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install bgt

   and update with::

      mamba update bgt

  To create a new environment, run::

      mamba create --name myenvname bgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bgt:<tag>

   (see `bgt/tags`_ for valid values for ``<tag>``)


.. |downloads_bgt| image:: https://img.shields.io/conda/dn/bioconda/bgt.svg?style=flat
   :target: https://anaconda.org/bioconda/bgt
   :alt:   (downloads)
.. |docker_bgt| image:: https://quay.io/repository/biocontainers/bgt/status
   :target: https://quay.io/repository/biocontainers/bgt
.. _`bgt/tags`: https://quay.io/repository/biocontainers/bgt?tab=tags


.. raw:: html

    <script>
        var package = "bgt";
        var versions = ["r283","r283","r283","r283","r283"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgt/README.html