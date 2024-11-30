:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shape_it'
.. highlight: bash

shape_it
========

.. conda:recipe:: shape_it/1.0.1
   :replaces_section_title:
   :noindex:

   Shape alignment against a database of molecules

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/shape-it/1.0.1/shape-it.html
   :license: LGPL
   :recipe: /`shape_it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it>`_/`1.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it/1.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it/1.0.1/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_shapeit`

   


.. conda:package:: shape_it

   |downloads_shape_it| |docker_shape_it|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openbabel: ``2.4.1``
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

      mamba install shape_it

   and update with::

      mamba update shape_it

  To create a new environment, run::

      mamba create --name myenvname shape_it

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shape_it:<tag>

   (see `shape_it/tags`_ for valid values for ``<tag>``)


.. |downloads_shape_it| image:: https://img.shields.io/conda/dn/bioconda/shape_it.svg?style=flat
   :target: https://anaconda.org/bioconda/shape_it
   :alt:   (downloads)
.. |docker_shape_it| image:: https://quay.io/repository/biocontainers/shape_it/status
   :target: https://quay.io/repository/biocontainers/shape_it
.. _`shape_it/tags`: https://quay.io/repository/biocontainers/shape_it?tab=tags


.. raw:: html

    <script>
        var package = "shape_it";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shape_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shape_it/README.html