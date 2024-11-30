:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tdrmapper'
.. highlight: bash

tdrmapper
=========

.. conda:recipe:: tdrmapper
   :replaces_section_title:
   :noindex:

   tRNA detection and quantification

   :homepage: https://github.com/sararselitsky/tDRmapper
   :license: academic
   :recipe: /`tdrmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tdrmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tdrmapper/meta.yaml>`_

   


.. conda:package:: tdrmapper

   |downloads_tdrmapper| |docker_tdrmapper|

   :versions:
      
      

      ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.0-1``

      

   
   :depends perl: 
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

      mamba install tdrmapper

   and update with::

      mamba update tdrmapper

  To create a new environment, run::

      mamba create --name myenvname tdrmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tdrmapper:<tag>

   (see `tdrmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_tdrmapper| image:: https://img.shields.io/conda/dn/bioconda/tdrmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/tdrmapper
   :alt:   (downloads)
.. |docker_tdrmapper| image:: https://quay.io/repository/biocontainers/tdrmapper/status
   :target: https://quay.io/repository/biocontainers/tdrmapper
.. _`tdrmapper/tags`: https://quay.io/repository/biocontainers/tdrmapper?tab=tags


.. raw:: html

    <script>
        var package = "tdrmapper";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tdrmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tdrmapper/README.html