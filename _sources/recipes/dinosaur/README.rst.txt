:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinosaur'
.. highlight: bash

dinosaur
========

.. conda:recipe:: dinosaur
   :replaces_section_title:
   :noindex:

   Feature finding algorithm for detection of isotope patterns in HPLC mass spectrometry data.

   :homepage: https://github.com/fickludd/dinosaur
   :license: Apache / Apache-2.0
   :recipe: /`dinosaur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinosaur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinosaur/meta.yaml>`_

   


.. conda:package:: dinosaur

   |downloads_dinosaur| |docker_dinosaur|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-0``

      

   
   :depends openjdk: 
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

      mamba install dinosaur

   and update with::

      mamba update dinosaur

  To create a new environment, run::

      mamba create --name myenvname dinosaur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dinosaur:<tag>

   (see `dinosaur/tags`_ for valid values for ``<tag>``)


.. |downloads_dinosaur| image:: https://img.shields.io/conda/dn/bioconda/dinosaur.svg?style=flat
   :target: https://anaconda.org/bioconda/dinosaur
   :alt:   (downloads)
.. |docker_dinosaur| image:: https://quay.io/repository/biocontainers/dinosaur/status
   :target: https://quay.io/repository/biocontainers/dinosaur
.. _`dinosaur/tags`: https://quay.io/repository/biocontainers/dinosaur?tab=tags


.. raw:: html

    <script>
        var package = "dinosaur";
        var versions = ["1.2.0","1.2.0","1.1.3"];
    </script>





Notes
-----
This recipe supplies a wrapper shell script around the Dinosaur Java program.
By default\, Java is called without specifying heap size. If you want to overwrite 
it you can specify these values after calling the wrapper. If you have 
\_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"dinosaur \-Xmx4g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinosaur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinosaur/README.html