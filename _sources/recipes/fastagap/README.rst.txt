:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastagap'
.. highlight: bash

fastagap
========

.. conda:recipe:: fastagap
   :replaces_section_title:
   :noindex:

   Count and remove missing data in fasta\-formatted sequence data

   :homepage: https://github.com/nylander/fastagap
   :license: MIT / MIT
   :recipe: /`fastagap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastagap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastagap/meta.yaml>`_

   


.. conda:package:: fastagap

   |downloads_fastagap| |docker_fastagap|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-0``

      

   
   :depends perl: 
   :depends perl-list-moreutils: 
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

      mamba install fastagap

   and update with::

      mamba update fastagap

  To create a new environment, run::

      mamba create --name myenvname fastagap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastagap:<tag>

   (see `fastagap/tags`_ for valid values for ``<tag>``)


.. |downloads_fastagap| image:: https://img.shields.io/conda/dn/bioconda/fastagap.svg?style=flat
   :target: https://anaconda.org/bioconda/fastagap
   :alt:   (downloads)
.. |docker_fastagap| image:: https://quay.io/repository/biocontainers/fastagap/status
   :target: https://quay.io/repository/biocontainers/fastagap
.. _`fastagap/tags`: https://quay.io/repository/biocontainers/fastagap?tab=tags


.. raw:: html

    <script>
        var package = "fastagap";
        var versions = ["1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastagap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastagap/README.html