:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonkit'
.. highlight: bash

taxonkit
========

.. conda:recipe:: taxonkit
   :replaces_section_title:
   :noindex:

   A Cross\-platform and Efficient NCBI Taxonomy Toolkit

   :homepage: https://github.com/shenwei356/taxonkit
   :license: MIT / MIT
   :recipe: /`taxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit/meta.yaml>`_

   


.. conda:package:: taxonkit

   |downloads_taxonkit| |docker_taxonkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.20.0-1</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-1</code>,  <code>0.17.0-0</code>,  <code>0.16.0-1</code>,  <code>0.16.0-0</code>,  <code>0.15.1-0</code>,  </span></summary>
      

      ``0.20.0-1``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.3.0-1``,  ``0.2.5-1``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install taxonkit

to add into an existing workspace instead, run::

    pixi add taxonkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxonkit

Alternatively, to install into a new environment, run::

    conda create -n envname taxonkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxonkit:<tag>

(see `taxonkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxonkit| image:: https://img.shields.io/conda/dn/bioconda/taxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonkit
   :alt:   (downloads)
.. |docker_taxonkit| image:: https://quay.io/repository/biocontainers/taxonkit/status
   :target: https://quay.io/repository/biocontainers/taxonkit
.. _`taxonkit/tags`: https://quay.io/repository/biocontainers/taxonkit?tab=tags


.. raw:: html

    <script>
        var package = "taxonkit";
        var versions = ["0.20.0","0.20.0","0.19.0","0.18.0","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonkit/README.html