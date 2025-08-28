:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'embassy-phylip'
.. highlight: bash

embassy-phylip
==============

.. conda:recipe:: embassy-phylip
   :replaces_section_title:
   :noindex:

   embassy\/emboss wrappers for phylip functions

   :homepage: http://emboss.open-bio.org/
   :license: GPL
   :recipe: /`embassy-phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embassy-phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embassy-phylip/meta.yaml>`_

   


.. conda:package:: embassy-phylip

   |downloads_embassy-phylip| |docker_embassy-phylip|

   :versions:
      
      

      ``3.69.650-2``,  ``3.69.650-1``,  ``3.69.650-0``

      

   
   :depends emboss: 
   :depends libgcc-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install embassy-phylip

   and update with::

      mamba update embassy-phylip

  To create a new environment, run::

      mamba create --name myenvname embassy-phylip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/embassy-phylip:<tag>

   (see `embassy-phylip/tags`_ for valid values for ``<tag>``)


.. |downloads_embassy-phylip| image:: https://img.shields.io/conda/dn/bioconda/embassy-phylip.svg?style=flat
   :target: https://anaconda.org/bioconda/embassy-phylip
   :alt:   (downloads)
.. |docker_embassy-phylip| image:: https://quay.io/repository/biocontainers/embassy-phylip/status
   :target: https://quay.io/repository/biocontainers/embassy-phylip
.. _`embassy-phylip/tags`: https://quay.io/repository/biocontainers/embassy-phylip?tab=tags


.. raw:: html

    <script>
        var package = "embassy-phylip";
        var versions = ["3.69.650","3.69.650","3.69.650"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/embassy-phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/embassy-phylip/README.html