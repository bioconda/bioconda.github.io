:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collectl'
.. highlight: bash

collectl
========

.. conda:recipe:: collectl
   :replaces_section_title:
   :noindex:

   collectl monitoring tool

   :homepage: http://collectl.sourceforge.net/
   :license: Artistic License
   :recipe: /`collectl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl/meta.yaml>`_

   


.. conda:package:: collectl

   |downloads_collectl| |docker_collectl|

   :versions:
      
      

      ``4.0.4-3``,  ``4.0.4-2``,  ``4.0.4-1``,  ``4.0.4-0``

      

   
   :depends perl: ``5.22.0*``
   :depends zlib: ``1.2.11*``
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

      mamba install collectl

   and update with::

      mamba update collectl

  To create a new environment, run::

      mamba create --name myenvname collectl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/collectl:<tag>

   (see `collectl/tags`_ for valid values for ``<tag>``)


.. |downloads_collectl| image:: https://img.shields.io/conda/dn/bioconda/collectl.svg?style=flat
   :target: https://anaconda.org/bioconda/collectl
   :alt:   (downloads)
.. |docker_collectl| image:: https://quay.io/repository/biocontainers/collectl/status
   :target: https://quay.io/repository/biocontainers/collectl
.. _`collectl/tags`: https://quay.io/repository/biocontainers/collectl?tab=tags


.. raw:: html

    <script>
        var package = "collectl";
        var versions = ["4.0.4","4.0.4","4.0.4","4.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collectl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collectl/README.html