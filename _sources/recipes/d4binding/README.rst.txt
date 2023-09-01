:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'd4binding'
.. highlight: bash

d4binding
=========

.. conda:recipe:: d4binding
   :replaces_section_title:
   :noindex:

   The C\/C\+\+ binding for the D4 file format


   :homepage: https://github.com/38/d4-format
   :license: MIT
   :recipe: /`d4binding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4binding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4binding/meta.yaml>`_

   


.. conda:package:: d4binding

   |downloads_d4binding| |docker_d4binding|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends starcode: 
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

      mamba install d4binding

   and update with::

      mamba update d4binding

  To create a new environment, run::

      mamba create --name myenvname d4binding

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/d4binding:<tag>

   (see `d4binding/tags`_ for valid values for ``<tag>``)


.. |downloads_d4binding| image:: https://img.shields.io/conda/dn/bioconda/d4binding.svg?style=flat
   :target: https://anaconda.org/bioconda/d4binding
   :alt:   (downloads)
.. |docker_d4binding| image:: https://quay.io/repository/biocontainers/d4binding/status
   :target: https://quay.io/repository/biocontainers/d4binding
.. _`d4binding/tags`: https://quay.io/repository/biocontainers/d4binding?tab=tags


.. raw:: html

    <script>
        var package = "d4binding";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/d4binding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/d4binding/README.html