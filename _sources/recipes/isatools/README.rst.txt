:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isatools'
.. highlight: bash

isatools
========

.. conda:recipe:: isatools
   :replaces_section_title:
   :noindex:

   Metadata tracking tools help to manage an increasingly diverse set of life science\, environmental and biomedical experiments

   :homepage: https://isa-tools.org/
   :developer docs: https://github.com/ISA-tools/isa-api
   :license: MPL-2.0
   :recipe: /`isatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isatools/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giab060`

   


.. conda:package:: isatools

   |downloads_isatools| |docker_isatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-1</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: 
   :depends behave: ``1.2.6``
   :depends biopython: 
   :depends bokeh: 
   :depends certifi: ``2021.5.30``
   :depends chardet: 
   :depends coveralls: 
   :depends ddt: ``>=1.4.2``
   :depends deepdiff: 
   :depends flake8: ``3.9.2``
   :depends flask: 
   :depends flask-sqlalchemy: 
   :depends graphene: ``3.1.1``
   :depends graphql-core: ``3.2.3``
   :depends httpretty: ``1.1.3``
   :depends iso8601: 
   :depends jinja2: 
   :depends jsonschema: 
   :depends lxml: 
   :depends mzml2isa: 
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: ``1.5.0``
   :depends progressbar2: 
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends rdflib: 
   :depends requests: 
   :depends sure: ``2.0.0``
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

      mamba install isatools

   and update with::

      mamba update isatools

  To create a new environment, run::

      mamba create --name myenvname isatools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isatools:<tag>

   (see `isatools/tags`_ for valid values for ``<tag>``)


.. |downloads_isatools| image:: https://img.shields.io/conda/dn/bioconda/isatools.svg?style=flat
   :target: https://anaconda.org/bioconda/isatools
   :alt:   (downloads)
.. |docker_isatools| image:: https://quay.io/repository/biocontainers/isatools/status
   :target: https://quay.io/repository/biocontainers/isatools
.. _`isatools/tags`: https://quay.io/repository/biocontainers/isatools?tab=tags


.. raw:: html

    <script>
        var package = "isatools";
        var versions = ["0.14.2","0.12.2","0.12.1","0.12.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isatools/README.html