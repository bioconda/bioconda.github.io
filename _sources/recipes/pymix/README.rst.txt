:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymix'
.. highlight: bash

pymix
=====

.. conda:recipe:: pymix
   :replaces_section_title:
   :noindex:

   Python mixture package

   :homepage: http://www.pymix.org/pymix
   :license: GPL2
   :recipe: /`pymix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix/meta.yaml>`_

   


.. conda:package:: pymix

   |downloads_pymix| |docker_pymix|

   :versions:
      
      

      ``0.8-1``,  ``0.8-0``

      

   
   :depends ghmm: 
   :depends glib: 
   :depends gsl: ``>=2.2.1,<2.3.0a0``
   :depends matplotlib: ``>=1.1.0,!=1.4.2,<1.5.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends xorg-libsm: 
   :depends xorg-libxau: 
   :depends xorg-libxdmcp: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
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

      mamba install pymix

   and update with::

      mamba update pymix

  To create a new environment, run::

      mamba create --name myenvname pymix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymix:<tag>

   (see `pymix/tags`_ for valid values for ``<tag>``)


.. |downloads_pymix| image:: https://img.shields.io/conda/dn/bioconda/pymix.svg?style=flat
   :target: https://anaconda.org/bioconda/pymix
   :alt:   (downloads)
.. |docker_pymix| image:: https://quay.io/repository/biocontainers/pymix/status
   :target: https://quay.io/repository/biocontainers/pymix
.. _`pymix/tags`: https://quay.io/repository/biocontainers/pymix?tab=tags


.. raw:: html

    <script>
        var package = "pymix";
        var versions = ["0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymix/README.html