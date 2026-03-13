:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elastic-blast'
.. highlight: bash

elastic-blast
=============

.. conda:recipe:: elastic-blast
   :replaces_section_title:
   :noindex:

   ElasticBLAST is a cloud\-based tool to perform your BLAST searches faster and make you more effective.

   :homepage: https://github.com/ncbi/elastic-blast
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`elastic-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1186/s12859-023-05245-9`

   


.. conda:package:: elastic-blast

   |downloads_elastic-blast| |docker_elastic-blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on awscli: 
   :depends on awslimitchecker: 
   :depends on boto3: 
   :depends on dataclasses-json: 
   :depends on google-cloud-sdk: 
   :depends on importlib-metadata: 
   :depends on importlib-resources: ``6.1.1``
   :depends on kubernetes-client: 
   :depends on pex: 
   :depends on python: ``>=3.11,<3.14``
   :depends on tenacity: 

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

    pixi global install elastic-blast

to add into an existing workspace instead, run::

    pixi add elastic-blast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install elastic-blast

Alternatively, to install into a new environment, run::

    conda create -n envname elastic-blast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/elastic-blast:<tag>

(see `elastic-blast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_elastic-blast| image:: https://img.shields.io/conda/dn/bioconda/elastic-blast.svg?style=flat
   :target: https://anaconda.org/bioconda/elastic-blast
   :alt:   (downloads)
.. |docker_elastic-blast| image:: https://quay.io/repository/biocontainers/elastic-blast/status
   :target: https://quay.io/repository/biocontainers/elastic-blast
.. _`elastic-blast/tags`: https://quay.io/repository/biocontainers/elastic-blast?tab=tags


.. raw:: html

    <script>
        var package = "elastic-blast";
        var versions = ["1.5.0","1.4.0","1.3.1","1.3.0","1.3.0"];
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