:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repdenovo'
.. highlight: bash

repdenovo
=========

.. conda:recipe:: repdenovo
   :replaces_section_title:
   :noindex:

   REPdenovo is designed for constructing repeats directly from sequence reads.

   :homepage: https://github.com/Reedwarbler/REPdenovo
   :license: MIT
   :recipe: /`repdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repdenovo/meta.yaml>`_

   


.. conda:package:: repdenovo

   |downloads_repdenovo| |docker_repdenovo|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends bwa: 
   :depends kmer-jellyfish: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: 
   :depends velvet: 
   :depends zlib: 
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

      mamba install repdenovo

   and update with::

      mamba update repdenovo

  To create a new environment, run::

      mamba create --name myenvname repdenovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repdenovo:<tag>

   (see `repdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_repdenovo| image:: https://img.shields.io/conda/dn/bioconda/repdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/repdenovo
   :alt:   (downloads)
.. |docker_repdenovo| image:: https://quay.io/repository/biocontainers/repdenovo/status
   :target: https://quay.io/repository/biocontainers/repdenovo
.. _`repdenovo/tags`: https://quay.io/repository/biocontainers/repdenovo?tab=tags


.. raw:: html

    <script>
        var package = "repdenovo";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repdenovo/README.html