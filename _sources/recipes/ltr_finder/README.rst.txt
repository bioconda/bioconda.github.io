:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_finder'
.. highlight: bash

ltr_finder
==========

.. conda:recipe:: ltr_finder
   :replaces_section_title:
   :noindex:

   LTR\_Finder is an efficient program for finding full\-length LTR retrotranspsons in genome sequences.

   :homepage: https://github.com/NBISweden/LTR_Finder/
   :license: MIT
   :recipe: /`ltr_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder/meta.yaml>`_

   


.. conda:package:: ltr_finder

   |downloads_ltr_finder| |docker_ltr_finder|

   :versions:
      
      

      ``1.07-4``,  ``1.07-3``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends perl-gd: 
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

      mamba install ltr_finder

   and update with::

      mamba update ltr_finder

  To create a new environment, run::

      mamba create --name myenvname ltr_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ltr_finder:<tag>

   (see `ltr_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_ltr_finder| image:: https://img.shields.io/conda/dn/bioconda/ltr_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_finder
   :alt:   (downloads)
.. |docker_ltr_finder| image:: https://quay.io/repository/biocontainers/ltr_finder/status
   :target: https://quay.io/repository/biocontainers/ltr_finder
.. _`ltr_finder/tags`: https://quay.io/repository/biocontainers/ltr_finder?tab=tags


.. raw:: html

    <script>
        var package = "ltr_finder";
        var versions = ["1.07","1.07","1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_finder/README.html