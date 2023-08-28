:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dupre'
.. highlight: bash

dupre
=====

.. conda:recipe:: dupre
   :replaces_section_title:
   :noindex:

   Duplicate rate estimation using linear programming and the hypergeometric distribution

   :homepage: https://bitbucket.org/genomeinformatics/dupre/
   :license: MIT
   :recipe: /`dupre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupre/meta.yaml>`_

   


.. conda:package:: dupre

   |downloads_dupre| |docker_dupre|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends h5py: 
   :depends numpy: 
   :depends pulp: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dupre

   and update with::

      mamba update dupre

  To create a new environment, run::

      mamba create --name myenvname dupre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dupre:<tag>

   (see `dupre/tags`_ for valid values for ``<tag>``)


.. |downloads_dupre| image:: https://img.shields.io/conda/dn/bioconda/dupre.svg?style=flat
   :target: https://anaconda.org/bioconda/dupre
   :alt:   (downloads)
.. |docker_dupre| image:: https://quay.io/repository/biocontainers/dupre/status
   :target: https://quay.io/repository/biocontainers/dupre
.. _`dupre/tags`: https://quay.io/repository/biocontainers/dupre?tab=tags


.. raw:: html

    <script>
        var package = "dupre";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dupre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dupre/README.html