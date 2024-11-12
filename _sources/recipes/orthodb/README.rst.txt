:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthodb'
.. highlight: bash

orthodb
=======

.. conda:recipe:: orthodb
   :replaces_section_title:
   :noindex:

   Interface to OrthoDB REST API.

   :homepage: https://www.ezlab.org/orthodb_v12_userguide.html
   :documentation: https://www.ezlab.org/orthodb_v12_userguide.html#api
   
   :developer docs: https://gitlab.com/ezlab/orthodb_py
   :license: GPL3 / GPL3
   :recipe: /`orthodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthodb/meta.yaml>`_
   :links: biotools: :biotools:`orthodb`, doi: :doi:`10.1093/nar/gkac996`, PMID: :PMID:`36350662`

   Python interface to OrthoDB REST API with some additional functionality.


.. conda:package:: orthodb

   |downloads_orthodb| |docker_orthodb|

   :versions:
      
      

      ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install orthodb

   and update with::

      mamba update orthodb

  To create a new environment, run::

      mamba create --name myenvname orthodb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthodb:<tag>

   (see `orthodb/tags`_ for valid values for ``<tag>``)


.. |downloads_orthodb| image:: https://img.shields.io/conda/dn/bioconda/orthodb.svg?style=flat
   :target: https://anaconda.org/bioconda/orthodb
   :alt:   (downloads)
.. |docker_orthodb| image:: https://quay.io/repository/biocontainers/orthodb/status
   :target: https://quay.io/repository/biocontainers/orthodb
.. _`orthodb/tags`: https://quay.io/repository/biocontainers/orthodb?tab=tags


.. raw:: html

    <script>
        var package = "orthodb";
        var versions = ["0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthodb/README.html