:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bin2cell'
.. highlight: bash

bin2cell
========

.. conda:recipe:: bin2cell
   :replaces_section_title:
   :noindex:

   Join subcellular Visium HD bins into cells

   :homepage: https://github.com/Teichlab/bin2cell
   :license: MIT
   :recipe: /`bin2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bin2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bin2cell/meta.yaml>`_

   


.. conda:package:: bin2cell

   |downloads_bin2cell| |docker_bin2cell|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends fastparquet: 
   :depends numpy: ``<2``
   :depends opencv: 
   :depends python: ``>=3.7``
   :depends scanpy: 
   :depends stardist: 
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

      mamba install bin2cell

   and update with::

      mamba update bin2cell

  To create a new environment, run::

      mamba create --name myenvname bin2cell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bin2cell:<tag>

   (see `bin2cell/tags`_ for valid values for ``<tag>``)


.. |downloads_bin2cell| image:: https://img.shields.io/conda/dn/bioconda/bin2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/bin2cell
   :alt:   (downloads)
.. |docker_bin2cell| image:: https://quay.io/repository/biocontainers/bin2cell/status
   :target: https://quay.io/repository/biocontainers/bin2cell
.. _`bin2cell/tags`: https://quay.io/repository/biocontainers/bin2cell?tab=tags


.. raw:: html

    <script>
        var package = "bin2cell";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bin2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bin2cell/README.html