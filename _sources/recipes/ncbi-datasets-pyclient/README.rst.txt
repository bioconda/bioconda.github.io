:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pyclient'
.. highlight: bash

ncbi-datasets-pyclient
======================

.. conda:recipe:: ncbi-datasets-pyclient
   :replaces_section_title:
   :noindex:

   NCBI Datasets API

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :documentation: https://github.com/misialq/ncbi-datasets-pyclient
   
   :developer docs: https://github.com/ncbi/datasets
   :license: BSD-3-Clause
   :recipe: /`ncbi-datasets-pyclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pyclient

   |downloads_ncbi-datasets-pyclient| |docker_ncbi-datasets-pyclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>18.20.0-0</code>,  <code>18.19.0-0</code>,  <code>18.18.0-0</code>,  <code>18.17.1-0</code>,  <code>18.16.0-0</code>,  <code>18.15.0-0</code>,  <code>18.14.0-0</code>,  <code>18.13.0-0</code>,  <code>18.4.0-0</code>,  </span></summary>
      

      ``18.20.0-0``,  ``18.19.0-0``,  ``18.18.0-0``,  ``18.17.1-0``,  ``18.16.0-0``,  ``18.15.0-0``,  ``18.14.0-0``,  ``18.13.0-0``,  ``18.4.0-0``,  ``18.3.1-0``,  ``18.3.0-0``,  ``18.2.3-0``,  ``18.2.2-0``,  ``18.2.0-0``,  ``18.1.0-0``,  ``18.0.5-0``,  ``18.0.2-0``,  ``18.0.1-0``,  ``17.3.0-0``,  ``17.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pydantic: ``>=2``
   :depends on python: ``>=3.8.0,<4.0.0``
   :depends on python-dateutil: ``>=2.8.2``
   :depends on typing_extensions: ``>=4.7.1``
   :depends on urllib3: ``>=1.25.3,<3.0.0``

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

    pixi global install ncbi-datasets-pyclient

to add into an existing workspace instead, run::

    pixi add ncbi-datasets-pyclient

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-datasets-pyclient

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-datasets-pyclient

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-datasets-pyclient:<tag>

(see `ncbi-datasets-pyclient/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-datasets-pyclient| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pyclient.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pyclient
   :alt:   (downloads)
.. |docker_ncbi-datasets-pyclient| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient
.. _`ncbi-datasets-pyclient/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-datasets-pyclient";
        var versions = ["18.20.0","18.19.0","18.18.0","18.17.1","18.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html