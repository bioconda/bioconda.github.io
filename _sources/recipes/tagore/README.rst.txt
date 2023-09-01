:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagore'
.. highlight: bash

tagore
======

.. conda:recipe:: tagore
   :replaces_section_title:
   :noindex:

   A simple way to visualize features on human chromosome ideograms

   :homepage: https://github.com/jordanlab/tagore
   :license: GPL / GPLv3
   :recipe: /`tagore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagore/meta.yaml>`_

   


.. conda:package:: tagore

   |downloads_tagore| |docker_tagore|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends click: 
   :depends python: ``>=3``
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

      mamba install tagore

   and update with::

      mamba update tagore

  To create a new environment, run::

      mamba create --name myenvname tagore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tagore:<tag>

   (see `tagore/tags`_ for valid values for ``<tag>``)


.. |downloads_tagore| image:: https://img.shields.io/conda/dn/bioconda/tagore.svg?style=flat
   :target: https://anaconda.org/bioconda/tagore
   :alt:   (downloads)
.. |docker_tagore| image:: https://quay.io/repository/biocontainers/tagore/status
   :target: https://quay.io/repository/biocontainers/tagore
.. _`tagore/tags`: https://quay.io/repository/biocontainers/tagore?tab=tags


.. raw:: html

    <script>
        var package = "tagore";
        var versions = ["1.1.2","1.1.0","1.0.2","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagore/README.html