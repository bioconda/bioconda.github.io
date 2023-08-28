:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sierrapy'
.. highlight: bash

sierrapy
========

.. conda:recipe:: sierrapy
   :replaces_section_title:
   :noindex:

   A Client of HIVdb Sierra GraphQL Webservice.

   :homepage: https://github.com/hivdb/sierra-client/tree/master/python
   :license: MIT / MIT License
   :recipe: /`sierrapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy/meta.yaml>`_

   


.. conda:package:: sierrapy

   |downloads_sierrapy| |docker_sierrapy|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends backoff: ``>=1.6.0``
   :depends certifi: ``>=2022.9.24``
   :depends charset-normalizer: ``>=2.1.1``
   :depends click: ``>=8.1.3``
   :depends gql: ``>=3.4.0``
   :depends graphql-core: ``>=3.2.3``
   :depends idna: ``>=3.4``
   :depends more-itertools: ``>=8.14.0``
   :depends multidict: ``>=6.0.2``
   :depends promise: ``>=2.3``
   :depends python: 
   :depends requests: ``>=2.28.1``
   :depends requests-toolbelt: ``>=0.8.0``
   :depends six: ``>=1.16.0``
   :depends tqdm: ``>=4.64.1``
   :depends urllib3: ``>=1.25.8``
   :depends voluptuous: ``>=0.13.1``
   :depends yarl: ``>=1.8.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sierrapy

   and update with::

      mamba update sierrapy

  To create a new environment, run::

      mamba create --name myenvname sierrapy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sierrapy:<tag>

   (see `sierrapy/tags`_ for valid values for ``<tag>``)


.. |downloads_sierrapy| image:: https://img.shields.io/conda/dn/bioconda/sierrapy.svg?style=flat
   :target: https://anaconda.org/bioconda/sierrapy
   :alt:   (downloads)
.. |docker_sierrapy| image:: https://quay.io/repository/biocontainers/sierrapy/status
   :target: https://quay.io/repository/biocontainers/sierrapy
.. _`sierrapy/tags`: https://quay.io/repository/biocontainers/sierrapy?tab=tags


.. raw:: html

    <script>
        var package = "sierrapy";
        var versions = ["0.4.3","0.4.2","0.4.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sierrapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sierrapy/README.html