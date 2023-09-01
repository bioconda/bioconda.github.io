:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolishcomp'
.. highlight: bash

nanopolishcomp
==============

.. conda:recipe:: nanopolishcomp
   :replaces_section_title:
   :noindex:

   NanopolishComp is a Python3 package for downstream analyses of Nanopolish output files

   :homepage: https://github.com/a-slide/NanopolishComp
   :license: MIT
   :recipe: /`nanopolishcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp/meta.yaml>`_

   


.. conda:package:: nanopolishcomp

   |downloads_nanopolishcomp| |docker_nanopolishcomp|

   :versions:
      
      

      ``0.6.12-0``,  ``0.6.11-0``

      

   
   :depends numpy: ``>=1.14.0``
   :depends python: ``>=3.6``
   :depends tqdm: ``>=4.23.4``
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

      mamba install nanopolishcomp

   and update with::

      mamba update nanopolishcomp

  To create a new environment, run::

      mamba create --name myenvname nanopolishcomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanopolishcomp:<tag>

   (see `nanopolishcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolishcomp| image:: https://img.shields.io/conda/dn/bioconda/nanopolishcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolishcomp
   :alt:   (downloads)
.. |docker_nanopolishcomp| image:: https://quay.io/repository/biocontainers/nanopolishcomp/status
   :target: https://quay.io/repository/biocontainers/nanopolishcomp
.. _`nanopolishcomp/tags`: https://quay.io/repository/biocontainers/nanopolishcomp?tab=tags


.. raw:: html

    <script>
        var package = "nanopolishcomp";
        var versions = ["0.6.12","0.6.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolishcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolishcomp/README.html