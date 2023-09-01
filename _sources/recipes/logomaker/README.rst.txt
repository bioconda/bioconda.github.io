:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'logomaker'
.. highlight: bash

logomaker
=========

.. conda:recipe:: logomaker
   :replaces_section_title:
   :noindex:

   Package for making Sequence Logos

   :homepage: http://logomaker.readthedocs.io
   :license: MIT / MIT
   :recipe: /`logomaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker/meta.yaml>`_

   


.. conda:package:: logomaker

   |downloads_logomaker| |docker_logomaker|

   :versions:
      
      

      ``0.8-1``,  ``0.8-0``

      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
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

      mamba install logomaker

   and update with::

      mamba update logomaker

  To create a new environment, run::

      mamba create --name myenvname logomaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/logomaker:<tag>

   (see `logomaker/tags`_ for valid values for ``<tag>``)


.. |downloads_logomaker| image:: https://img.shields.io/conda/dn/bioconda/logomaker.svg?style=flat
   :target: https://anaconda.org/bioconda/logomaker
   :alt:   (downloads)
.. |docker_logomaker| image:: https://quay.io/repository/biocontainers/logomaker/status
   :target: https://quay.io/repository/biocontainers/logomaker
.. _`logomaker/tags`: https://quay.io/repository/biocontainers/logomaker?tab=tags


.. raw:: html

    <script>
        var package = "logomaker";
        var versions = ["0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logomaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logomaker/README.html