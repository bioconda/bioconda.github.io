:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semidbm'
.. highlight: bash

semidbm
=======

.. conda:recipe:: semidbm
   :replaces_section_title:
   :noindex:

   Cross platform \(fast\) DBM interface in python

   :homepage: https://github.com/jamesls/semidbm
   :license: BSD License
   :recipe: /`semidbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semidbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semidbm/meta.yaml>`_

   


.. conda:package:: semidbm

   |downloads_semidbm| |docker_semidbm|

   :versions:
      
      

      ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends python: 
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

      mamba install semidbm

   and update with::

      mamba update semidbm

  To create a new environment, run::

      mamba create --name myenvname semidbm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/semidbm:<tag>

   (see `semidbm/tags`_ for valid values for ``<tag>``)


.. |downloads_semidbm| image:: https://img.shields.io/conda/dn/bioconda/semidbm.svg?style=flat
   :target: https://anaconda.org/bioconda/semidbm
   :alt:   (downloads)
.. |docker_semidbm| image:: https://quay.io/repository/biocontainers/semidbm/status
   :target: https://quay.io/repository/biocontainers/semidbm
.. _`semidbm/tags`: https://quay.io/repository/biocontainers/semidbm?tab=tags


.. raw:: html

    <script>
        var package = "semidbm";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semidbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semidbm/README.html