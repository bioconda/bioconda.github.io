:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-core'
.. highlight: bash

nf-core
=======

.. conda:recipe:: nf-core
   :replaces_section_title:
   :noindex:

   Python package with helper tools for the nf\-core community.

   :homepage: https://nf-co.re
   :developer docs: https://github.com/nf-core/tools
   :license: MIT / MIT
   :recipe: /`nf-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-020-0439-x`

   


.. conda:package:: nf-core

   |downloads_nf-core| |docker_nf-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.14.1-1</code>,  <code>2.14.1-0</code>,  <code>2.13.1-0</code>,  <code>2.13-0</code>,  <code>2.12.1-0</code>,  </span></summary>
      

      ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.14.1-1``,  ``2.14.1-0``,  ``2.13.1-0``,  ``2.13-0``,  ``2.12.1-0``,  ``2.12-0``,  ``2.11.1-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7.2-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.6-1``,  ``2.6-0``,  ``2.5.1-0``,  ``2.5-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2.0.1-0``,  ``1.14-0``,  ``1.13.3-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13-0``,  ``1.12.1-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.2-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends filetype: 
   :depends git: 
   :depends gitpython: 
   :depends jinja2: 
   :depends jsonschema: ``>=4.0``
   :depends linkify-it-py: ``>=1,<3``
   :depends markdown: ``>=3.3``
   :depends nextflow: ``>=24.04.4``
   :depends nf-test: 
   :depends packaging: 
   :depends pillow: 
   :depends pre-commit: 
   :depends prompt_toolkit: ``>=3.0.36``
   :depends pydantic: ``>=2.2.1``
   :depends pygithub: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends questionary: ``>=2.0.1``
   :depends refgenie: 
   :depends requests: 
   :depends requests-cache: 
   :depends rich: ``>=13.3.1``
   :depends rich-click: ``1.8.*``
   :depends ruamel.yaml: 
   :depends tabulate: 
   :depends textual: ``0.71.0``
   :depends trogon: 
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

      mamba install nf-core

   and update with::

      mamba update nf-core

  To create a new environment, run::

      mamba create --name myenvname nf-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nf-core:<tag>

   (see `nf-core/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-core| image:: https://img.shields.io/conda/dn/bioconda/nf-core.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-core
   :alt:   (downloads)
.. |docker_nf-core| image:: https://quay.io/repository/biocontainers/nf-core/status
   :target: https://quay.io/repository/biocontainers/nf-core
.. _`nf-core/tags`: https://quay.io/repository/biocontainers/nf-core?tab=tags


.. raw:: html

    <script>
        var package = "nf-core";
        var versions = ["3.0.2","3.0.2","3.0.1","3.0.0","2.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-core/README.html