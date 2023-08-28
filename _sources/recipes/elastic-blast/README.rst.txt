:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elastic-blast'
.. highlight: bash

elastic-blast
=============

.. conda:recipe:: elastic-blast
   :replaces_section_title:
   :noindex:

   ElasticBLAST is a cloud\-based tool to perform your BLAST searches faster and make you more effective.

   :homepage: https://pypi.org/project/elastic-blast/
   :developer docs: https://github.com/ncbi/elastic-blast/
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`elastic-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1186/s12859-023-05245-9`

   


.. conda:package:: elastic-blast

   |downloads_elastic-blast| |docker_elastic-blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.2.7-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends awscli: 
   :depends awslimitchecker: 
   :depends boto3: 
   :depends dataclasses-json: 
   :depends google-cloud-sdk: 
   :depends importlib-metadata: 
   :depends kubernetes-client: ``1.18.8``
   :depends python: ``>=3.7``
   :depends tenacity: 
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

      mamba install elastic-blast

   and update with::

      mamba update elastic-blast

  To create a new environment, run::

      mamba create --name myenvname elastic-blast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/elastic-blast:<tag>

   (see `elastic-blast/tags`_ for valid values for ``<tag>``)


.. |downloads_elastic-blast| image:: https://img.shields.io/conda/dn/bioconda/elastic-blast.svg?style=flat
   :target: https://anaconda.org/bioconda/elastic-blast
   :alt:   (downloads)
.. |docker_elastic-blast| image:: https://quay.io/repository/biocontainers/elastic-blast/status
   :target: https://quay.io/repository/biocontainers/elastic-blast
.. _`elastic-blast/tags`: https://quay.io/repository/biocontainers/elastic-blast?tab=tags


.. raw:: html

    <script>
        var package = "elastic-blast";
        var versions = ["1.1.0","1.1.0","1.0.0","0.2.7","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elastic-blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elastic-blast/README.html