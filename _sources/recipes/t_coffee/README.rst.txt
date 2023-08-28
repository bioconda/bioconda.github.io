:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't_coffee'
.. highlight: bash

t_coffee
========

.. conda:recipe:: t_coffee
   :replaces_section_title:
   :noindex:

   A collection of tools for Computing\, Evaluating and Manipulating Multiple Alignments of DNA\, RNA\, Protein Sequences and Structures.

   :homepage: http://www.tcoffee.org/Projects/tcoffee/
   :license: GNU
   :recipe: /`t_coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee/meta.yaml>`_

   


.. conda:package:: t_coffee

   |downloads_t_coffee| |docker_t_coffee|

   :versions:
      
      

      ``11.0.8-8``,  ``11.0.8-7``,  ``11.0.8-5``,  ``11.0.8-4``,  ``11.0.8-3``,  ``11.0.8-2``,  ``11.0.8-1``

      

   
   :depends curl: ``>=7.64.1,<8.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends openssl: ``>=1.1.1a,<1.1.2a``
   :depends perl: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install t_coffee

   and update with::

      mamba update t_coffee

  To create a new environment, run::

      mamba create --name myenvname t_coffee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/t_coffee:<tag>

   (see `t_coffee/tags`_ for valid values for ``<tag>``)


.. |downloads_t_coffee| image:: https://img.shields.io/conda/dn/bioconda/t_coffee.svg?style=flat
   :target: https://anaconda.org/bioconda/t_coffee
   :alt:   (downloads)
.. |docker_t_coffee| image:: https://quay.io/repository/biocontainers/t_coffee/status
   :target: https://quay.io/repository/biocontainers/t_coffee
.. _`t_coffee/tags`: https://quay.io/repository/biocontainers/t_coffee?tab=tags


.. raw:: html

    <script>
        var package = "t_coffee";
        var versions = ["11.0.8","11.0.8","11.0.8","11.0.8","11.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t_coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t_coffee/README.html