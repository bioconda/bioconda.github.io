:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demuxem'
.. highlight: bash

demuxem
=======

.. conda:recipe:: demuxem
   :replaces_section_title:
   :noindex:

   DemuxEM is the demultiplexing module of Pegasus\, which works on cell\-hashing and nucleus\-hashing genomics data.

   :homepage: https://github.com/lilab-bcb/demuxEM
   :documentation: https://demuxEM.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`demuxem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxem/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-019-10756-2`

   


.. conda:package:: demuxem

   |downloads_demuxem| |docker_demuxem|

   :versions:
      
      

      ``0.1.7.post1-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5.post1-0``

      

   
   :depends docopt: 
   :depends numpy: 
   :depends pandas: 
   :depends pegasusio: ``>=0.2.12``
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install demuxem

   and update with::

      mamba update demuxem

  To create a new environment, run::

      mamba create --name myenvname demuxem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/demuxem:<tag>

   (see `demuxem/tags`_ for valid values for ``<tag>``)


.. |downloads_demuxem| image:: https://img.shields.io/conda/dn/bioconda/demuxem.svg?style=flat
   :target: https://anaconda.org/bioconda/demuxem
   :alt:   (downloads)
.. |docker_demuxem| image:: https://quay.io/repository/biocontainers/demuxem/status
   :target: https://quay.io/repository/biocontainers/demuxem
.. _`demuxem/tags`: https://quay.io/repository/biocontainers/demuxem?tab=tags


.. raw:: html

    <script>
        var package = "demuxem";
        var versions = ["0.1.7.post1","0.1.7","0.1.7","0.1.6","0.1.5.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demuxem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demuxem/README.html