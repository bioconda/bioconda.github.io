:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edentity'
.. highlight: bash

edentity
========

.. conda:recipe:: edentity
   :replaces_section_title:
   :noindex:

   eDentity metabarcoding pipeline

   :homepage: https://pypi.org/project/edentity/
   :license: APACHE / Apache-2.0
   :recipe: /`edentity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edentity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edentity/meta.yaml>`_

   


.. conda:package:: edentity

   |downloads_edentity| |docker_edentity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.9-0</code>,  <code>1.4.8-0</code>,  </span></summary>
      

      ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``1.84.*``
   :depends on cutadapt: ``4.9.*``
   :depends on fastp: ``0.24.0.*``
   :depends on multiqc: ``1.27.1.*``
   :depends on pip: 
   :depends on python: 
   :depends on snakemake: 
   :depends on vsearch: ``2.28.1.*``

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

    pixi global install edentity

to add into an existing workspace instead, run::

    pixi add edentity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install edentity

Alternatively, to install into a new environment, run::

    conda create -n envname edentity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/edentity:<tag>

(see `edentity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_edentity| image:: https://img.shields.io/conda/dn/bioconda/edentity.svg?style=flat
   :target: https://anaconda.org/bioconda/edentity
   :alt:   (downloads)
.. |docker_edentity| image:: https://quay.io/repository/biocontainers/edentity/status
   :target: https://quay.io/repository/biocontainers/edentity
.. _`edentity/tags`: https://quay.io/repository/biocontainers/edentity?tab=tags


.. raw:: html

    <script>
        var package = "edentity";
        var versions = ["1.5.6","1.5.5","1.5.4","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edentity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edentity/README.html