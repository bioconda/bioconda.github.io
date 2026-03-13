:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdc-client'
.. highlight: bash

gdc-client
==========

.. conda:recipe:: gdc-client
   :replaces_section_title:
   :noindex:

   GDC Data Transfer Tool

   :homepage: https://gdc.cancer.gov/access-data/gdc-data-transfer-tool
   :documentation: https://docs.gdc.cancer.gov/Data_Transfer_Tool/Users_Guide/Getting_Started
   
   :developer docs: https://github.com/NCI-GDC/gdc-client
   :license: APACHE / Apache-2.0
   :recipe: /`gdc-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client/meta.yaml>`_

   


.. conda:package:: gdc-client

   |downloads_gdc-client| |docker_gdc-client|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-3``,  ``1.3.0-1``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cryptography: ``>=2.8``
   :depends on importlib-metadata: 
   :depends on intervaltree: ``>=3.0.2``
   :depends on jsonschema: ``>=2.6``
   :depends on lxml: ``>=4.4.2``
   :depends on ndg-httpsclient: ``>=0.5.0,<1``
   :depends on progressbar2: ``>=3.43.1``
   :depends on pyasn1: ``>=0.4.3,<1``
   :depends on pyopenssl: ``>=18``
   :depends on python: ``>=3.5``
   :depends on pyyaml: ``>=5.1``
   :depends on requests: ``>=2.22.0``
   :depends on termcolor: ``>=1.1.0``

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

    pixi global install gdc-client

to add into an existing workspace instead, run::

    pixi add gdc-client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gdc-client

Alternatively, to install into a new environment, run::

    conda create -n envname gdc-client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gdc-client:<tag>

(see `gdc-client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gdc-client| image:: https://img.shields.io/conda/dn/bioconda/gdc-client.svg?style=flat
   :target: https://anaconda.org/bioconda/gdc-client
   :alt:   (downloads)
.. |docker_gdc-client| image:: https://quay.io/repository/biocontainers/gdc-client/status
   :target: https://quay.io/repository/biocontainers/gdc-client
.. _`gdc-client/tags`: https://quay.io/repository/biocontainers/gdc-client?tab=tags


.. raw:: html

    <script>
        var package = "gdc-client";
        var versions = ["2.3","2.3","2.2","2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdc-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdc-client/README.html