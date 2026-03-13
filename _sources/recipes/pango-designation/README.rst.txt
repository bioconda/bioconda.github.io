:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango-designation'
.. highlight: bash

pango-designation
=================

.. conda:recipe:: pango-designation
   :replaces_section_title:
   :noindex:

   Repository for suggesting new lineages that should be added to the current scheme.

   :homepage: https://github.com/cov-lineages/pango-designation
   :license: CC-BY-NC-4.0
   :recipe: /`pango-designation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-designation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-designation/meta.yaml>`_

   


.. conda:package:: pango-designation

   |downloads_pango-designation| |docker_pango-designation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  <code>1.34-0</code>,  <code>1.33.1-0</code>,  <code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.30-0</code>,  </span></summary>
      

      ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33.1-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.30-0``,  ``1.29-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18.1-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.141-0``,  ``1.2.140-0``,  ``1.2.139-0``,  ``1.2.138-0``,  ``1.2.137-0``,  ``1.2.136-0``,  ``1.2.135-0``,  ``1.2.134-0``,  ``1.2.133-0``,  ``1.2.132-0``,  ``1.2.131-0``,  ``1.2.130-0``,  ``1.2.129-0``,  ``1.2.128-0``,  ``1.2.127-0``,  ``1.2.126-0``,  ``1.2.125-0``,  ``1.2.124-0``,  ``1.2.123-0``,  ``1.2.122-0``,  ``1.2.121-0``,  ``1.2.120-0``,  ``1.2.119-0``,  ``1.2.118-0``,  ``1.2.116-0``,  ``1.2.114-0``,  ``1.2.113-0``,  ``1.2.112-0``,  ``1.2.111-0``,  ``1.2.110-0``,  ``1.2.109-0``,  ``1.2.108-0``,  ``1.2.107-0``,  ``1.2.106-0``,  ``1.2.105-0``,  ``1.2.103-0``,  ``1.2.102-0``,  ``1.2.101-0``,  ``1.2.100-0``,  ``1.2.98-0``,  ``1.2.97-0``,  ``1.2.96-0``,  ``1.2.95-0``,  ``1.2.94-0``,  ``1.2.93-0``,  ``1.2.92-0``,  ``1.2.91-0``,  ``1.2.90-0``,  ``1.2.89-0``,  ``1.2.88-0``,  ``1.2.87-0``,  ``1.2.86-0``,  ``1.2.84-0``,  ``1.2.83-0``,  ``1.2.82-0``,  ``1.2.81-0``,  ``1.2.78-0``,  ``1.2.77-0``,  ``1.2.76-0``,  ``1.2.75-0``,  ``1.2.73-0``,  ``1.2.71-0``,  ``1.2.70-0``,  ``1.2.68-0``,  ``1.2.66-0``,  ``1.2.65-0``,  ``1.2.64-0``,  ``1.2.63-0``,  ``1.2.62-0``,  ``1.2.61-0``,  ``1.2.59-0``,  ``1.2.58-0``,  ``1.2.56-0``,  ``1.2.55-0``,  ``1.2.54-0``,  ``1.2.53-0``,  ``1.2.52-0``,  ``1.2.51-0``,  ``1.2.50-0``,  ``1.2.47-0``,  ``1.2.46-0``,  ``1.2.44-0``,  ``1.2.43-0``,  ``1.2.42-0``,  ``1.2.41-0``,  ``1.2.39-0``,  ``1.2.38-0``,  ``1.2.37-0``,  ``1.2.36-0``,  ``1.2.34-0``,  ``1.2.33-0``,  ``1.2.32-0``,  ``1.2.29-0``,  ``1.2.27-0``,  ``1.2.26-0``,  ``1.2.25-0``,  ``1.2.23-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.18-0``,  ``1.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.7``

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

    pixi global install pango-designation

to add into an existing workspace instead, run::

    pixi add pango-designation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pango-designation

Alternatively, to install into a new environment, run::

    conda create -n envname pango-designation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pango-designation:<tag>

(see `pango-designation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pango-designation| image:: https://img.shields.io/conda/dn/bioconda/pango-designation.svg?style=flat
   :target: https://anaconda.org/bioconda/pango-designation
   :alt:   (downloads)
.. |docker_pango-designation| image:: https://quay.io/repository/biocontainers/pango-designation/status
   :target: https://quay.io/repository/biocontainers/pango-designation
.. _`pango-designation/tags`: https://quay.io/repository/biocontainers/pango-designation?tab=tags


.. raw:: html

    <script>
        var package = "pango-designation";
        var versions = ["1.37","1.36","1.35","1.34","1.33.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango-designation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango-designation/README.html