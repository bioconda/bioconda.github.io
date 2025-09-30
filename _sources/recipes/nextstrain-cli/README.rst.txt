:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain-cli'
.. highlight: bash

nextstrain-cli
==============

.. conda:recipe:: nextstrain-cli
   :replaces_section_title:
   :noindex:

   The Nextstrain command\-line interface \(CLI\).

   :homepage: https://docs.nextstrain.org/projects/cli
   :developer docs: https://github.com/nextstrain/cli
   :license: MIT / MIT
   :recipe: /`nextstrain-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty407`

   The Nextstrain command\-line interface \(CLI\)—a program called
   nextstrain—aims to provide a consistent way to run and visualize pathogen
   builds and access Nextstrain components like Augur and Auspice across
   computing environments such as Docker\, Conda\, and AWS Batch.



.. conda:package:: nextstrain-cli

   |downloads_nextstrain-cli| |docker_nextstrain-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.3.0-0</code>,  <code>10.2.1.post1-0</code>,  <code>10.2.0-0</code>,  <code>9.0.0-1</code>,  <code>9.0.0-0</code>,  <code>8.5.4-1</code>,  <code>8.5.4-0</code>,  <code>8.5.3-0</code>,  <code>8.5.2-0</code>,  </span></summary>
      

      ``10.3.0-0``,  ``10.2.1.post1-0``,  ``10.2.0-0``,  ``9.0.0-1``,  ``9.0.0-0``,  ``8.5.4-1``,  ``8.5.4-0``,  ``8.5.3-0``,  ``8.5.2-0``,  ``8.5.1-0``,  ``8.5.0-0``,  ``8.2.0-0``,  ``8.0.1-0``,  ``8.0.0-0``,  ``7.4.0-1``,  ``7.4.0-0``,  ``7.3.0.post1-0``,  ``7.2.0-0``,  ``7.1.0-0``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.2.1-0``,  ``6.2.0-1``,  ``6.2.0-0``,  ``6.1.0.post1-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.0-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends boto3: 
   :depends cryptography: 
   :depends docutils: 
   :depends fasteners: 
   :depends fsspec: ``!=2023.9.1``
   :depends packaging: 
   :depends pyjwt: ``>=2.0.0``
   :depends pyparsing: ``>=3.0.0``
   :depends python: ``>=3.8``
   :depends pyyaml: ``>=5.3.1``
   :depends requests: 
   :depends s3fs: ``>=2021.04.0,!=2023.9.1``
   :depends typing_extensions: ``>=3.7.4``
   :depends urllib3: ``>=2.0.0``
   :depends wcmatch: ``>=6.0``
   :depends wrapt: 
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

      mamba install nextstrain-cli

   and update with::

      mamba update nextstrain-cli

  To create a new environment, run::

      mamba create --name myenvname nextstrain-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextstrain-cli:<tag>

   (see `nextstrain-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_nextstrain-cli| image:: https://img.shields.io/conda/dn/bioconda/nextstrain-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain-cli
   :alt:   (downloads)
.. |docker_nextstrain-cli| image:: https://quay.io/repository/biocontainers/nextstrain-cli/status
   :target: https://quay.io/repository/biocontainers/nextstrain-cli
.. _`nextstrain-cli/tags`: https://quay.io/repository/biocontainers/nextstrain-cli?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain-cli";
        var versions = ["10.3.0","10.2.1.post1","10.2.0","9.0.0","9.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain-cli/README.html