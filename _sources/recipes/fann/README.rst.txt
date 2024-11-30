:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fann'
.. highlight: bash

fann
====

.. conda:recipe:: fann
   :replaces_section_title:
   :noindex:

   Fast Artificial Neural Network Library

   :homepage: http://leenissen.dk/fann/wp/
   :license: LGPL-2.1
   :recipe: /`fann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann/meta.yaml>`_

   


.. conda:package:: fann

   |downloads_fann| |docker_fann|

   :versions:
      
      

      ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fann

   and update with::

      mamba update fann

  To create a new environment, run::

      mamba create --name myenvname fann

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fann:<tag>

   (see `fann/tags`_ for valid values for ``<tag>``)


.. |downloads_fann| image:: https://img.shields.io/conda/dn/bioconda/fann.svg?style=flat
   :target: https://anaconda.org/bioconda/fann
   :alt:   (downloads)
.. |docker_fann| image:: https://quay.io/repository/biocontainers/fann/status
   :target: https://quay.io/repository/biocontainers/fann
.. _`fann/tags`: https://quay.io/repository/biocontainers/fann?tab=tags


.. raw:: html

    <script>
        var package = "fann";
        var versions = ["2.2.0","2.2.0","2.2.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fann/README.html