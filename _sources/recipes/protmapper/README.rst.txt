:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protmapper'
.. highlight: bash

protmapper
==========

.. conda:recipe:: protmapper
   :replaces_section_title:
   :noindex:

   Map protein sites to human reference sequence.

   :homepage: https://github.com/indralab/protmapper
   :documentation: https://protmapper.readthedocs.io
   
   :license: BSD / BSD-2-Clause
   :recipe: /`protmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper/meta.yaml>`_

   


.. conda:package:: protmapper

   |downloads_protmapper| |docker_protmapper|

   :versions:
      
      

      ``0.0.28-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.14-0``,  ``0.0.13-0``

      

   
   :depends boto3: 
   :depends pystow: ``>=0.1.0``
   :depends python: ``>=3``
   :depends rdflib: 
   :depends requests: 
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

      mamba install protmapper

   and update with::

      mamba update protmapper

  To create a new environment, run::

      mamba create --name myenvname protmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/protmapper:<tag>

   (see `protmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_protmapper| image:: https://img.shields.io/conda/dn/bioconda/protmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/protmapper
   :alt:   (downloads)
.. |docker_protmapper| image:: https://quay.io/repository/biocontainers/protmapper/status
   :target: https://quay.io/repository/biocontainers/protmapper
.. _`protmapper/tags`: https://quay.io/repository/biocontainers/protmapper?tab=tags


.. raw:: html

    <script>
        var package = "protmapper";
        var versions = ["0.0.28","0.0.21","0.0.20","0.0.19","0.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protmapper/README.html