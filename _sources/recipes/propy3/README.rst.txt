:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'propy3'
.. highlight: bash

propy3
======

.. conda:recipe:: propy3
   :replaces_section_title:
   :noindex:

   Python library for calculating various protein descriptors from protein sequences

   :homepage: https://github.com/MartinThoma/propy3
   :license: GPL / GPLv2
   :recipe: /`propy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/propy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/propy3/meta.yaml>`_

   


.. conda:package:: propy3

   |downloads_propy3| |docker_propy3|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends python: ``>=3.6``
   :depends urllib3: 
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

      mamba install propy3

   and update with::

      mamba update propy3

  To create a new environment, run::

      mamba create --name myenvname propy3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/propy3:<tag>

   (see `propy3/tags`_ for valid values for ``<tag>``)


.. |downloads_propy3| image:: https://img.shields.io/conda/dn/bioconda/propy3.svg?style=flat
   :target: https://anaconda.org/bioconda/propy3
   :alt:   (downloads)
.. |docker_propy3| image:: https://quay.io/repository/biocontainers/propy3/status
   :target: https://quay.io/repository/biocontainers/propy3
.. _`propy3/tags`: https://quay.io/repository/biocontainers/propy3?tab=tags


.. raw:: html

    <script>
        var package = "propy3";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/propy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/propy3/README.html