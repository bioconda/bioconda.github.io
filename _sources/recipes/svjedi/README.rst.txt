:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svjedi'
.. highlight: bash

svjedi
======

.. conda:recipe:: svjedi
   :replaces_section_title:
   :noindex:

   SVJedi is a structural variation \(SV\) genotyper for long read data.

   :homepage: https://github.com/llecompte/SVJedi
   :license: AGPL-3.0-or-later
   :recipe: /`svjedi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi/meta.yaml>`_

   


.. conda:package:: svjedi

   |downloads_svjedi| |docker_svjedi|

   :versions:
      
      

      ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.0-0``

      

   
   :depends biopython: 
   :depends minimap2: ``2.17.*``
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install svjedi

   and update with::

      mamba update svjedi

  To create a new environment, run::

      mamba create --name myenvname svjedi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svjedi:<tag>

   (see `svjedi/tags`_ for valid values for ``<tag>``)


.. |downloads_svjedi| image:: https://img.shields.io/conda/dn/bioconda/svjedi.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi
   :alt:   (downloads)
.. |docker_svjedi| image:: https://quay.io/repository/biocontainers/svjedi/status
   :target: https://quay.io/repository/biocontainers/svjedi
.. _`svjedi/tags`: https://quay.io/repository/biocontainers/svjedi?tab=tags


.. raw:: html

    <script>
        var package = "svjedi";
        var versions = ["1.1.6","1.1.6","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svjedi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svjedi/README.html