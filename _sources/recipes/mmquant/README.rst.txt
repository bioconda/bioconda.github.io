:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmquant'
.. highlight: bash

mmquant
=======

.. conda:recipe:: mmquant
   :replaces_section_title:
   :noindex:

   RNA\-Seq quantification tool\, with special handling on multi\-mapping reads.

   :homepage: https://bitbucket.org/mzytnicki/multi-mapping-counter/
   :license: GPL3/LGPL3
   :recipe: /`mmquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmquant/meta.yaml>`_

   


.. conda:package:: mmquant

   |downloads_mmquant| |docker_mmquant|

   :versions:
      
      

      ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends make: 
   :depends zlib: 
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

      mamba install mmquant

   and update with::

      mamba update mmquant

  To create a new environment, run::

      mamba create --name myenvname mmquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmquant:<tag>

   (see `mmquant/tags`_ for valid values for ``<tag>``)


.. |downloads_mmquant| image:: https://img.shields.io/conda/dn/bioconda/mmquant.svg?style=flat
   :target: https://anaconda.org/bioconda/mmquant
   :alt:   (downloads)
.. |docker_mmquant| image:: https://quay.io/repository/biocontainers/mmquant/status
   :target: https://quay.io/repository/biocontainers/mmquant
.. _`mmquant/tags`: https://quay.io/repository/biocontainers/mmquant?tab=tags


.. raw:: html

    <script>
        var package = "mmquant";
        var versions = ["1.0.9","1.0.9","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmquant/README.html