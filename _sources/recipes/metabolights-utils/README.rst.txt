:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolights-utils'
.. highlight: bash

metabolights-utils
==================

.. conda:recipe:: metabolights-utils
   :replaces_section_title:
   :noindex:

   MetaboLights open metabolomics data repository command line interface \(CLI\)\, common MetaboLights data models\, utility methods and classes.

   :homepage: https://github.com/EBI-Metabolights/metabolights-utils
   :documentation: https://github.com/EBI-Metabolights/metabolights-utils/blob/v1.4.20/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`metabolights-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolights-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolights-utils/meta.yaml>`_

   


.. conda:package:: metabolights-utils

   |downloads_metabolights-utils| |docker_metabolights-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.20-0</code>,  <code>1.4.19-0</code>,  <code>1.4.18-0</code>,  <code>1.4.15-0</code>,  <code>1.4.13-0</code>,  <code>1.4.12-0</code>,  <code>1.4.11-0</code>,  <code>1.4.9-0</code>,  <code>1.4.8-0</code>,  </span></summary>
      

      ``1.4.20-0``,  ``1.4.19-0``,  ``1.4.18-0``,  ``1.4.15-0``,  ``1.4.13-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.12-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.12-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on beautifulsoup4: ``>=4.12.3``
   :depends on click: ``>=8.1.7``
   :depends on httpx: ``>=0.27.0``
   :depends on jsonpath-ng: ``>=1.7.0``
   :depends on jsonschema: ``>=4.24.0``
   :depends on pydantic: ``>=2.11.7``
   :depends on pydantic-settings: ``>=2.0.3``
   :depends on python: ``>=3.12``
   :depends on python-dateutil: 
   :depends on requests: 
   :depends on unidecode: ``>=1.3.8``

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

    pixi global install metabolights-utils

to add into an existing workspace instead, run::

    pixi add metabolights-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metabolights-utils

Alternatively, to install into a new environment, run::

    conda create -n envname metabolights-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metabolights-utils:<tag>

(see `metabolights-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metabolights-utils| image:: https://img.shields.io/conda/dn/bioconda/metabolights-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolights-utils
   :alt:   (downloads)
.. |docker_metabolights-utils| image:: https://quay.io/repository/biocontainers/metabolights-utils/status
   :target: https://quay.io/repository/biocontainers/metabolights-utils
.. _`metabolights-utils/tags`: https://quay.io/repository/biocontainers/metabolights-utils?tab=tags


.. raw:: html

    <script>
        var package = "metabolights-utils";
        var versions = ["1.4.20","1.4.19","1.4.18","1.4.15","1.4.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolights-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolights-utils/README.html