:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltabs'
.. highlight: bash

deltabs
=======

.. conda:recipe:: deltabs
   :replaces_section_title:
   :noindex:

   Quantifying the significance of genetic variation using probabilistic profile\-based methods.

   :homepage: https://github.com/UCanCompBio/deltaBS/wiki
   :license: GPL3
   :recipe: /`deltabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs/meta.yaml>`_

   


.. conda:package:: deltabs

   |downloads_deltabs| |docker_deltabs|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends hmmer: 
   :depends perl: 
   :depends perl-bioperl: 
   :depends perl-statistics-distributions: 
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

      mamba install deltabs

   and update with::

      mamba update deltabs

  To create a new environment, run::

      mamba create --name myenvname deltabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deltabs:<tag>

   (see `deltabs/tags`_ for valid values for ``<tag>``)


.. |downloads_deltabs| image:: https://img.shields.io/conda/dn/bioconda/deltabs.svg?style=flat
   :target: https://anaconda.org/bioconda/deltabs
   :alt:   (downloads)
.. |docker_deltabs| image:: https://quay.io/repository/biocontainers/deltabs/status
   :target: https://quay.io/repository/biocontainers/deltabs
.. _`deltabs/tags`: https://quay.io/repository/biocontainers/deltabs?tab=tags


.. raw:: html

    <script>
        var package = "deltabs";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltabs/README.html