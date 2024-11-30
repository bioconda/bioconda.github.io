:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cigar'
.. highlight: bash

cigar
=====

.. conda:recipe:: cigar
   :replaces_section_title:
   :noindex:

   manipulate SAM cigar strings

   :homepage: https://github.com/brentp/cigar
   :license: MIT / MIT
   :recipe: /`cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cigar/meta.yaml>`_

   


.. conda:package:: cigar

   |downloads_cigar| |docker_cigar|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
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

      mamba install cigar

   and update with::

      mamba update cigar

  To create a new environment, run::

      mamba create --name myenvname cigar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cigar:<tag>

   (see `cigar/tags`_ for valid values for ``<tag>``)


.. |downloads_cigar| image:: https://img.shields.io/conda/dn/bioconda/cigar.svg?style=flat
   :target: https://anaconda.org/bioconda/cigar
   :alt:   (downloads)
.. |docker_cigar| image:: https://quay.io/repository/biocontainers/cigar/status
   :target: https://quay.io/repository/biocontainers/cigar
.. _`cigar/tags`: https://quay.io/repository/biocontainers/cigar?tab=tags


.. raw:: html

    <script>
        var package = "cigar";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cigar/README.html