:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sylph-tax'
.. highlight: bash

sylph-tax
=========

.. conda:recipe:: sylph-tax
   :replaces_section_title:
   :noindex:

   Integrating taxonomic information into the sylph metagenome profiler.

   :homepage: https://github.com/bluenote-1577/sylph-tax
   :documentation: https://github.com/bluenote-1577/sylph-tax/blob/v1.8.0/README.md
   
   :license: MIT / MIT
   :recipe: /`sylph-tax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph-tax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph-tax/meta.yaml>`_

   


.. conda:package:: sylph-tax

   |downloads_sylph-tax| |docker_sylph-tax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on requests: 

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

    pixi global install sylph-tax

to add into an existing workspace instead, run::

    pixi add sylph-tax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sylph-tax

Alternatively, to install into a new environment, run::

    conda create -n envname sylph-tax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sylph-tax:<tag>

(see `sylph-tax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sylph-tax| image:: https://img.shields.io/conda/dn/bioconda/sylph-tax.svg?style=flat
   :target: https://anaconda.org/bioconda/sylph-tax
   :alt:   (downloads)
.. |docker_sylph-tax| image:: https://quay.io/repository/biocontainers/sylph-tax/status
   :target: https://quay.io/repository/biocontainers/sylph-tax
.. _`sylph-tax/tags`: https://quay.io/repository/biocontainers/sylph-tax?tab=tags


.. raw:: html

    <script>
        var package = "sylph-tax";
        var versions = ["1.8.0","1.7.1","1.7.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sylph-tax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sylph-tax/README.html