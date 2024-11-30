:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-morpholibj'
.. highlight: bash

fiji-morpholibj
===============

.. conda:recipe:: fiji-morpholibj
   :replaces_section_title:
   :noindex:

   MorphoLibJ is a collection of mathematical morphology methods and plugins for ImageJ\, created at INRA\-IJPB Modeling and Digital Imaging lab.

   :homepage: http://imagej.net/MorphoLibJ
   :license: LGPL3
   :recipe: /`fiji-morpholibj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-morpholibj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-morpholibj/meta.yaml>`_

   


.. conda:package:: fiji-morpholibj

   |downloads_fiji-morpholibj| |docker_fiji-morpholibj|

   :versions:
      
      

      ``1.6.1-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.3.1-0``

      

   
   :depends fiji: ``>=20170530``
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

      mamba install fiji-morpholibj

   and update with::

      mamba update fiji-morpholibj

  To create a new environment, run::

      mamba create --name myenvname fiji-morpholibj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fiji-morpholibj:<tag>

   (see `fiji-morpholibj/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-morpholibj| image:: https://img.shields.io/conda/dn/bioconda/fiji-morpholibj.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-morpholibj
   :alt:   (downloads)
.. |docker_fiji-morpholibj| image:: https://quay.io/repository/biocontainers/fiji-morpholibj/status
   :target: https://quay.io/repository/biocontainers/fiji-morpholibj
.. _`fiji-morpholibj/tags`: https://quay.io/repository/biocontainers/fiji-morpholibj?tab=tags


.. raw:: html

    <script>
        var package = "fiji-morpholibj";
        var versions = ["1.6.1","1.5.1","1.5.0","1.4.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-morpholibj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-morpholibj/README.html