:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gqlib'
.. highlight: bash

gqlib
=====

.. conda:recipe:: gqlib
   :replaces_section_title:
   :noindex:

   A gene quantification library.

   :homepage: https://github.com/cschu/gqlib
   :license: MIT / MIT
   :recipe: /`gqlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqlib/meta.yaml>`_

   


.. conda:package:: gqlib

   |downloads_gqlib| |docker_gqlib|

   :versions:
      
      

      ``2.14.4-0``

      

   
   :depends bwa: 
   :depends intervaltree: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends sqlalchemy: 
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

      mamba install gqlib

   and update with::

      mamba update gqlib

  To create a new environment, run::

      mamba create --name myenvname gqlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gqlib:<tag>

   (see `gqlib/tags`_ for valid values for ``<tag>``)


.. |downloads_gqlib| image:: https://img.shields.io/conda/dn/bioconda/gqlib.svg?style=flat
   :target: https://anaconda.org/bioconda/gqlib
   :alt:   (downloads)
.. |docker_gqlib| image:: https://quay.io/repository/biocontainers/gqlib/status
   :target: https://quay.io/repository/biocontainers/gqlib
.. _`gqlib/tags`: https://quay.io/repository/biocontainers/gqlib?tab=tags


.. raw:: html

    <script>
        var package = "gqlib";
        var versions = ["2.14.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gqlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gqlib/README.html