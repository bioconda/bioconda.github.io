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

         <details><summary><span class="truncated-version-list"><code>0.14.3-0</code>,  <code>0.14.2-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  </span></summary>
      

      ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on beautifulsoup4: 
   :depends on behave: ``1.2.6``
   :depends on biopython: 
   :depends on bokeh: 
   :depends on certifi: ``2021.5.30``
   :depends on chardet: 
   :depends on coveralls: 
   :depends on ddt: ``>=1.4.2``
   :depends on deepdiff: 
   :depends on flake8: ``3.9.2``
   :depends on flask: 
   :depends on flask-sqlalchemy: 
   :depends on graphene: ``3.1.1``
   :depends on graphql-core: ``3.2.3``
   :depends on httpretty: ``1.1.3``
   :depends on iso8601: 
   :depends on jinja2: 
   :depends on jsonschema: 
   :depends on lxml: 
   :depends on mzml2isa: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: ``1.5.0``
   :depends on progressbar2: 
   :depends on python: ``>=3.6``
   :depends on pyyaml: 
   :depends on rdflib: 
   :depends on requests: 
   :depends on sure: ``2.0.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install isatools

to add into an existing workspace instead, run::

    pixi add isatools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isatools

Alternatively, to install into a new environment, run::

    conda create -n envname isatools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isatools:<tag>

(see `isatools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isatools| image:: https://img.shields.io/conda/dn/bioconda/isatools.svg?style=flat
   :target: https://anaconda.org/bioconda/isatools
   :alt:   (downloads)
.. |docker_isatools| image:: https://quay.io/repository/biocontainers/isatools/status
   :target: https://quay.io/repository/biocontainers/isatools
.. _`isatools/tags`: https://quay.io/repository/biocontainers/isatools?tab=tags


.. raw:: html

    <script>
        var package = "isatools";
        var versions = ["0.14.3","0.14.2","0.12.2","0.12.1","0.12.0"];
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