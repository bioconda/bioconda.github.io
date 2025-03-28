:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ceas'
.. highlight: bash

ceas
====

.. conda:recipe:: ceas
   :replaces_section_title:
   :noindex:

   CEAS\: Cis\-regulatory Element Annotation System

   :homepage: http://liulab.dfci.harvard.edu/CEAS
   :license: Artistic
   :recipe: /`ceas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas/meta.yaml>`_
   :links: biotools: :biotools:`ceas`

   


.. conda:package:: ceas

   |downloads_ceas| |docker_ceas|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends mysql-python: 
   :depends python: ``<3``
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

      mamba install ceas

   and update with::

      mamba update ceas

  To create a new environment, run::

      mamba create --name myenvname ceas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ceas:<tag>

   (see `ceas/tags`_ for valid values for ``<tag>``)


.. |downloads_ceas| image:: https://img.shields.io/conda/dn/bioconda/ceas.svg?style=flat
   :target: https://anaconda.org/bioconda/ceas
   :alt:   (downloads)
.. |docker_ceas| image:: https://quay.io/repository/biocontainers/ceas/status
   :target: https://quay.io/repository/biocontainers/ceas
.. _`ceas/tags`: https://quay.io/repository/biocontainers/ceas?tab=tags


.. raw:: html

    <script>
        var package = "ceas";
        var versions = ["1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ceas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ceas/README.html