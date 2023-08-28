:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abra2'
.. highlight: bash

abra2
=====

.. conda:recipe:: abra2
   :replaces_section_title:
   :noindex:

   ABRA2 is an updated implementation of ABRA

   :homepage: https://github.com/mozack/abra2
   :license: MIT
   :recipe: /`abra2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2/meta.yaml>`_

   


.. conda:package:: abra2

   |downloads_abra2| |docker_abra2|

   :versions:
      
      

      ``2.24-1``,  ``2.24-0``,  ``2.23-1``,  ``2.23-0``,  ``2.22-0``,  ``2.20-0``

      

   
   :depends coreutils: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends openjdk: ``>=8``
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

      mamba install abra2

   and update with::

      mamba update abra2

  To create a new environment, run::

      mamba create --name myenvname abra2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abra2:<tag>

   (see `abra2/tags`_ for valid values for ``<tag>``)


.. |downloads_abra2| image:: https://img.shields.io/conda/dn/bioconda/abra2.svg?style=flat
   :target: https://anaconda.org/bioconda/abra2
   :alt:   (downloads)
.. |docker_abra2| image:: https://quay.io/repository/biocontainers/abra2/status
   :target: https://quay.io/repository/biocontainers/abra2
.. _`abra2/tags`: https://quay.io/repository/biocontainers/abra2?tab=tags


.. raw:: html

    <script>
        var package = "abra2";
        var versions = ["2.24","2.24","2.23","2.23","2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abra2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abra2/README.html