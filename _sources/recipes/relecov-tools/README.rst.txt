:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relecov-tools'
.. highlight: bash

relecov-tools
=============

.. conda:recipe:: relecov-tools
   :replaces_section_title:
   :noindex:

   Tools for managing and processing of relecov data.

   :homepage: https://github.com/BU-ISCIII/relecov-tools
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`relecov-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relecov-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relecov-tools/meta.yaml>`_

   Tools for managing and processing of relecov network data\, including download\, metadata parsing\, validation\, and update to public databases.



.. conda:package:: relecov-tools

   |downloads_relecov-tools| |docker_relecov-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bio: ``>=1.4.0``
   :depends on bs4: ``>=0.0.2``
   :depends on click: 
   :depends on ena-upload-cli: 
   :depends on jinja2: ``>=3.0.0``
   :depends on jsonschema: 
   :depends on openpyxl: ``>=3.1.2``
   :depends on packaging: 
   :depends on pandas: 
   :depends on paramiko: ``>=2.10.1``
   :depends on prompt_toolkit: ``>=3.0.3``
   :depends on python: ``>=3.7``
   :depends on pyyaml: ``6.0.1``
   :depends on pyzipper: ``0.3.6``
   :depends on questionary: 
   :depends on requests: ``2.27.1``
   :depends on rich: ``>=10.0.0``
   :depends on semantic_version: 
   :depends on tabulate: 
   :depends on xlsxwriter: ``3.2.0``

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

    pixi global install relecov-tools

to add into an existing workspace instead, run::

    pixi add relecov-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install relecov-tools

Alternatively, to install into a new environment, run::

    conda create -n envname relecov-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/relecov-tools:<tag>

(see `relecov-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_relecov-tools| image:: https://img.shields.io/conda/dn/bioconda/relecov-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/relecov-tools
   :alt:   (downloads)
.. |docker_relecov-tools| image:: https://quay.io/repository/biocontainers/relecov-tools/status
   :target: https://quay.io/repository/biocontainers/relecov-tools
.. _`relecov-tools/tags`: https://quay.io/repository/biocontainers/relecov-tools?tab=tags


.. raw:: html

    <script>
        var package = "relecov-tools";
        var versions = ["1.8.0","1.7.4","1.7.3","1.7.2","1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relecov-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relecov-tools/README.html