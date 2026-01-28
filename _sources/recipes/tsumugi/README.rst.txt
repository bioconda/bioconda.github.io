:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tsumugi'
.. highlight: bash

tsumugi
=======

.. conda:recipe:: tsumugi
   :replaces_section_title:
   :noindex:

   TSUMUGI\: Phenotype\-driven gene network identifier

   :homepage: https://github.com/akikuno/TSUMUGI-dev
   :documentation: https://github.com/akikuno/TSUMUGI-dev/blob/1.0.1/README.md
   
   :license: MIT
   :recipe: /`tsumugi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsumugi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsumugi/meta.yaml>`_

   


.. conda:package:: tsumugi

   |downloads_tsumugi| |docker_tsumugi|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.5.0-0``

      

   
   :depends networkx: ``>=3.3``
   :depends numpy: ``>=1.21.0``
   :depends python: ``>=3.10``
   :depends tqdm: ``>=4.64.0``
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

      mamba install tsumugi

   and update with::

      mamba update tsumugi

  To create a new environment, run::

      mamba create --name myenvname tsumugi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tsumugi:<tag>

   (see `tsumugi/tags`_ for valid values for ``<tag>``)


.. |downloads_tsumugi| image:: https://img.shields.io/conda/dn/bioconda/tsumugi.svg?style=flat
   :target: https://anaconda.org/bioconda/tsumugi
   :alt:   (downloads)
.. |docker_tsumugi| image:: https://quay.io/repository/biocontainers/tsumugi/status
   :target: https://quay.io/repository/biocontainers/tsumugi
.. _`tsumugi/tags`: https://quay.io/repository/biocontainers/tsumugi?tab=tags


.. raw:: html

    <script>
        var package = "tsumugi";
        var versions = ["1.0.1","1.0.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tsumugi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tsumugi/README.html