:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apollo'
.. highlight: bash

apollo
======

.. conda:recipe:: apollo
   :replaces_section_title:
   :noindex:

   WebApollo API library

   :homepage: https://github.com/galaxy-genome-annotation/python-apollo
   :license: MIT / MIT
   :recipe: /`apollo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apollo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apollo/meta.yaml>`_

   


.. conda:package:: apollo

   |downloads_apollo| |docker_apollo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.13-0</code>,  <code>4.2.12-0</code>,  <code>4.2.11-0</code>,  <code>4.2.10-0</code>,  <code>4.2.9-0</code>,  <code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-1</code>,  </span></summary>
      

      ``4.2.13-0``,  ``4.2.12-0``,  ``4.2.11-0``,  ``4.2.10-0``,  ``4.2.9-0``,  ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.5-0``,  ``4.2.4-1``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2-0``,  ``4.1-0``,  ``4.0.1-0``,  ``3.1-0``,  ``3.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on cachetools: 
   :depends on click: ``>=6.7``
   :depends on decorator: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on wrapt: 

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

    pixi global install apollo

to add into an existing workspace instead, run::

    pixi add apollo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install apollo

Alternatively, to install into a new environment, run::

    conda create -n envname apollo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/apollo:<tag>

(see `apollo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_apollo| image:: https://img.shields.io/conda/dn/bioconda/apollo.svg?style=flat
   :target: https://anaconda.org/bioconda/apollo
   :alt:   (downloads)
.. |docker_apollo| image:: https://quay.io/repository/biocontainers/apollo/status
   :target: https://quay.io/repository/biocontainers/apollo
.. _`apollo/tags`: https://quay.io/repository/biocontainers/apollo?tab=tags


.. raw:: html

    <script>
        var package = "apollo";
        var versions = ["4.2.13","4.2.12","4.2.11","4.2.10","4.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apollo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apollo/README.html