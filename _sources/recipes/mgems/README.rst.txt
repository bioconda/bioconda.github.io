:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgems'
.. highlight: bash

mgems
=====

.. conda:recipe:: mgems
   :replaces_section_title:
   :noindex:

   mGEMS \- sequencing data binning based on probabilistic classification

   :homepage: https://github.com/PROBIC/mGEMS
   :license: MIT / MIT
   :recipe: /`mgems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000691`

   


.. conda:package:: mgems

   |downloads_mgems| |docker_mgems|

   :versions:
      
      

      ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install mgems

   and update with::

      mamba update mgems

  To create a new environment, run::

      mamba create --name myenvname mgems

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgems:<tag>

   (see `mgems/tags`_ for valid values for ``<tag>``)


.. |downloads_mgems| image:: https://img.shields.io/conda/dn/bioconda/mgems.svg?style=flat
   :target: https://anaconda.org/bioconda/mgems
   :alt:   (downloads)
.. |docker_mgems| image:: https://quay.io/repository/biocontainers/mgems/status
   :target: https://quay.io/repository/biocontainers/mgems
.. _`mgems/tags`: https://quay.io/repository/biocontainers/mgems?tab=tags


.. raw:: html

    <script>
        var package = "mgems";
        var versions = ["1.3.2","1.3.2","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgems/README.html