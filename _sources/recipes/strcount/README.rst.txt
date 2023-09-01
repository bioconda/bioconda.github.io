:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strcount'
.. highlight: bash

strcount
========

.. conda:recipe:: strcount
   :replaces_section_title:
   :noindex:

   A package to count the number of repeats in a Short Tandem Repeat Expansion from long reads.

   :homepage: https://github.com/sabiqali/strcount
   :license: MIT / MIT
   :recipe: /`strcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount/meta.yaml>`_

   


.. conda:package:: strcount

   |downloads_strcount| |docker_strcount|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends pysam: 
   :depends python: 
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

      mamba install strcount

   and update with::

      mamba update strcount

  To create a new environment, run::

      mamba create --name myenvname strcount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strcount:<tag>

   (see `strcount/tags`_ for valid values for ``<tag>``)


.. |downloads_strcount| image:: https://img.shields.io/conda/dn/bioconda/strcount.svg?style=flat
   :target: https://anaconda.org/bioconda/strcount
   :alt:   (downloads)
.. |docker_strcount| image:: https://quay.io/repository/biocontainers/strcount/status
   :target: https://quay.io/repository/biocontainers/strcount
.. _`strcount/tags`: https://quay.io/repository/biocontainers/strcount?tab=tags


.. raw:: html

    <script>
        var package = "strcount";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strcount/README.html