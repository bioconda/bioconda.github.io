:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromatiblock'
.. highlight: bash

chromatiblock
=============

.. conda:recipe:: chromatiblock
   :replaces_section_title:
   :noindex:

   Scalable\, whole\-genome visualisation of structural changes in prokaryotes.

   :homepage: http://github.com/mjsull/chromatiblock/
   :license: GPL-3.0-only
   :recipe: /`chromatiblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock/meta.yaml>`_

   


.. conda:package:: chromatiblock

   |downloads_chromatiblock| |docker_chromatiblock|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends blast: ``>=2.2``
   :depends cairosvg: 
   :depends python: ``>=3.6``
   :depends sibelia: 
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

      mamba install chromatiblock

   and update with::

      mamba update chromatiblock

  To create a new environment, run::

      mamba create --name myenvname chromatiblock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromatiblock:<tag>

   (see `chromatiblock/tags`_ for valid values for ``<tag>``)


.. |downloads_chromatiblock| image:: https://img.shields.io/conda/dn/bioconda/chromatiblock.svg?style=flat
   :target: https://anaconda.org/bioconda/chromatiblock
   :alt:   (downloads)
.. |docker_chromatiblock| image:: https://quay.io/repository/biocontainers/chromatiblock/status
   :target: https://quay.io/repository/biocontainers/chromatiblock
.. _`chromatiblock/tags`: https://quay.io/repository/biocontainers/chromatiblock?tab=tags


.. raw:: html

    <script>
        var package = "chromatiblock";
        var versions = ["1.0.0","0.5.1","0.4.2","0.4.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromatiblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromatiblock/README.html