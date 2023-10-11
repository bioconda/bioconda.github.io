:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadlib'
.. highlight: bash

tadlib
======

.. conda:recipe:: tadlib
   :replaces_section_title:
   :noindex:

   A Library to Explore Chromatin Interaction Patterns for Topologically Associating Domains

   :homepage: https://github.com/XiaoTaoWang/TADLib/
   :license: GPL3 / GPLv3
   :recipe: /`tadlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadlib/meta.yaml>`_

   


.. conda:package:: tadlib

   |downloads_tadlib| |docker_tadlib|

   :versions:
      
      

      ``0.4.5.post1-0``

      

   
   :depends cooler: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pomegranate: 
   :depends python: ``>=3.5``
   :depends python_abi: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install tadlib

   and update with::

      mamba update tadlib

  To create a new environment, run::

      mamba create --name myenvname tadlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tadlib:<tag>

   (see `tadlib/tags`_ for valid values for ``<tag>``)


.. |downloads_tadlib| image:: https://img.shields.io/conda/dn/bioconda/tadlib.svg?style=flat
   :target: https://anaconda.org/bioconda/tadlib
   :alt:   (downloads)
.. |docker_tadlib| image:: https://quay.io/repository/biocontainers/tadlib/status
   :target: https://quay.io/repository/biocontainers/tadlib
.. _`tadlib/tags`: https://quay.io/repository/biocontainers/tadlib?tab=tags


.. raw:: html

    <script>
        var package = "tadlib";
        var versions = ["0.4.5.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadlib/README.html