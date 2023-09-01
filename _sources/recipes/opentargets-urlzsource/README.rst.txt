:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets-urlzsource'
.. highlight: bash

opentargets-urlzsource
======================

.. conda:recipe:: opentargets-urlzsource
   :replaces_section_title:
   :noindex:

   File and url handling

   :homepage: https://github.com/opentargets/urlzsource
   :license: APACHE / Apache Software
   :recipe: /`opentargets-urlzsource <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-urlzsource>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-urlzsource/meta.yaml>`_

   


.. conda:package:: opentargets-urlzsource

   |downloads_opentargets-urlzsource| |docker_opentargets-urlzsource|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends future: 
   :depends python: 
   :depends requests-file: 
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

      mamba install opentargets-urlzsource

   and update with::

      mamba update opentargets-urlzsource

  To create a new environment, run::

      mamba create --name myenvname opentargets-urlzsource

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opentargets-urlzsource:<tag>

   (see `opentargets-urlzsource/tags`_ for valid values for ``<tag>``)


.. |downloads_opentargets-urlzsource| image:: https://img.shields.io/conda/dn/bioconda/opentargets-urlzsource.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets-urlzsource
   :alt:   (downloads)
.. |docker_opentargets-urlzsource| image:: https://quay.io/repository/biocontainers/opentargets-urlzsource/status
   :target: https://quay.io/repository/biocontainers/opentargets-urlzsource
.. _`opentargets-urlzsource/tags`: https://quay.io/repository/biocontainers/opentargets-urlzsource?tab=tags


.. raw:: html

    <script>
        var package = "opentargets-urlzsource";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets-urlzsource/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets-urlzsource/README.html