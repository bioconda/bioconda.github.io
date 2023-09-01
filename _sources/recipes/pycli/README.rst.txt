:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycli'
.. highlight: bash

pycli
=====

.. conda:recipe:: pycli
   :replaces_section_title:
   :noindex:

   Simple\, object\-oriented approach to Python CLI apps

   :homepage: http://packages.python.org/pyCLI/
   :license: MIT
   :recipe: /`pycli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycli/meta.yaml>`_

   


.. conda:package:: pycli

   |downloads_pycli| |docker_pycli|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``

      

   
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

      mamba install pycli

   and update with::

      mamba update pycli

  To create a new environment, run::

      mamba create --name myenvname pycli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycli:<tag>

   (see `pycli/tags`_ for valid values for ``<tag>``)


.. |downloads_pycli| image:: https://img.shields.io/conda/dn/bioconda/pycli.svg?style=flat
   :target: https://anaconda.org/bioconda/pycli
   :alt:   (downloads)
.. |docker_pycli| image:: https://quay.io/repository/biocontainers/pycli/status
   :target: https://quay.io/repository/biocontainers/pycli
.. _`pycli/tags`: https://quay.io/repository/biocontainers/pycli?tab=tags


.. raw:: html

    <script>
        var package = "pycli";
        var versions = ["2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycli/README.html