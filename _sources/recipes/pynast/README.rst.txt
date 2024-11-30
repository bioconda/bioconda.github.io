:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynast'
.. highlight: bash

pynast
======

.. conda:recipe:: pynast/1.2.2
   :replaces_section_title:
   :noindex:

   The Python Nearest Alignment Space Termination tool

   :homepage: http://qiime.org/pynast
   :license: BSD License
   :recipe: /`pynast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast>`_/`1.2.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast/1.2.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast/1.2.2/meta.yaml>`_

   


.. conda:package:: pynast

   |downloads_pynast| |docker_pynast|

   :versions:
      
      

      ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``

      

   
   :depends cogent: ``>=1.5.3``
   :depends numpy: ``>=1.5.1``
   :depends python: ``<3``
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

      mamba install pynast

   and update with::

      mamba update pynast

  To create a new environment, run::

      mamba create --name myenvname pynast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pynast:<tag>

   (see `pynast/tags`_ for valid values for ``<tag>``)


.. |downloads_pynast| image:: https://img.shields.io/conda/dn/bioconda/pynast.svg?style=flat
   :target: https://anaconda.org/bioconda/pynast
   :alt:   (downloads)
.. |docker_pynast| image:: https://quay.io/repository/biocontainers/pynast/status
   :target: https://quay.io/repository/biocontainers/pynast
.. _`pynast/tags`: https://quay.io/repository/biocontainers/pynast?tab=tags


.. raw:: html

    <script>
        var package = "pynast";
        var versions = ["1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynast/README.html