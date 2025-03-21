:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycov3'
.. highlight: bash

pycov3
======

.. conda:recipe:: pycov3
   :replaces_section_title:
   :noindex:

   Generate cov3 files used in DEMIC

   :homepage: https://github.com/Ulthran/pycov3
   :license: MIT / MIT
   :recipe: /`pycov3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycov3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycov3/meta.yaml>`_

   


.. conda:package:: pycov3

   |downloads_pycov3| |docker_pycov3|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.4b0-0``

      

   
   :depends python: 
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

      mamba install pycov3

   and update with::

      mamba update pycov3

  To create a new environment, run::

      mamba create --name myenvname pycov3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycov3:<tag>

   (see `pycov3/tags`_ for valid values for ``<tag>``)


.. |downloads_pycov3| image:: https://img.shields.io/conda/dn/bioconda/pycov3.svg?style=flat
   :target: https://anaconda.org/bioconda/pycov3
   :alt:   (downloads)
.. |docker_pycov3| image:: https://quay.io/repository/biocontainers/pycov3/status
   :target: https://quay.io/repository/biocontainers/pycov3
.. _`pycov3/tags`: https://quay.io/repository/biocontainers/pycov3?tab=tags


.. raw:: html

    <script>
        var package = "pycov3";
        var versions = ["2.1.0","2.0.4b0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycov3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycov3/README.html