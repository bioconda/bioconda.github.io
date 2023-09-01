:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gorpipe'
.. highlight: bash

gorpipe
=======

.. conda:recipe:: gorpipe
   :replaces_section_title:
   :noindex:

   A query tool for working with sequence data based on a Genomic Ordered Relations \(GOR\)

   :homepage: https://github.com/gorpipe/gor
   :license: AGPL >=3
   :recipe: /`gorpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gorpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gorpipe/meta.yaml>`_
   :links: biotools: :biotools:`gorpipe`

   


.. conda:package:: gorpipe

   |downloads_gorpipe| |docker_gorpipe|

   :versions:
      
      

      ``4.5.0-0``

      

   
   :depends openjdk: ``>=17``
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

      mamba install gorpipe

   and update with::

      mamba update gorpipe

  To create a new environment, run::

      mamba create --name myenvname gorpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gorpipe:<tag>

   (see `gorpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_gorpipe| image:: https://img.shields.io/conda/dn/bioconda/gorpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/gorpipe
   :alt:   (downloads)
.. |docker_gorpipe| image:: https://quay.io/repository/biocontainers/gorpipe/status
   :target: https://quay.io/repository/biocontainers/gorpipe
.. _`gorpipe/tags`: https://quay.io/repository/biocontainers/gorpipe?tab=tags


.. raw:: html

    <script>
        var package = "gorpipe";
        var versions = ["4.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gorpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gorpipe/README.html