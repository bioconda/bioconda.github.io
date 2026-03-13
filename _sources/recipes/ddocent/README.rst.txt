:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddocent'
.. highlight: bash

ddocent
=======

.. conda:recipe:: ddocent
   :replaces_section_title:
   :noindex:

   dDocent is an interactive bash wrapper to QC\, assemble\, map\, and call SNPs from all types of RAD data

   :homepage: https://ddocent.com
   :documentation: https://www.ddocent.com/UserGuide/
   
   :developer docs: https://github.com/jpuritz/dDocent
   :license: MIT / MIT
   :recipe: /`ddocent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent/meta.yaml>`_

   


.. conda:package:: ddocent

   |downloads_ddocent| |docker_ddocent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.8-0</code>,  <code>2.9.7-2</code>,  <code>2.9.7-1</code>,  <code>2.9.7-0</code>,  <code>2.9.4-1</code>,  <code>2.9.4-0</code>,  <code>2.8.13-3</code>,  <code>2.8.13-2</code>,  <code>2.8.13-1</code>,  </span></summary>
      

      ``2.9.8-0``,  ``2.9.7-2``,  ``2.9.7-1``,  ``2.9.7-0``,  ``2.9.4-1``,  ``2.9.4-0``,  ``2.8.13-3``,  ``2.8.13-2``,  ``2.8.13-1``,  ``2.8.13-0``,  ``2.8.12-0``,  ``2.7.8-4``,  ``2.7.8-3``,  ``2.7.8-2``,  ``2.7.8-1``,  ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.6-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.3.8-0``,  ``2.2.25-2``,  ``2.2.25-1``,  ``2.2.25-0``,  ``2.2.20-0``,  ``2.2.19-0``,  ``2.2.16-0``,  ``2.2.15-0``,  ``2.2.13-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.4-0``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedops: 
   :depends on bedtools: ``>=2.26.0``
   :depends on bwa: ``>=0.7.13``
   :depends on cd-hit: 
   :depends on coreutils: ``>=8.22``
   :depends on curl: 
   :depends on fastp: ``>=0.20.0``
   :depends on freebayes: ``>=1``
   :depends on gnuplot: 
   :depends on grep: 
   :depends on mawk: 
   :depends on parallel: 
   :depends on pear: 
   :depends on rainbow: 
   :depends on samtools: ``>=1.6``
   :depends on sed: 
   :depends on seqtk: ``>=1.3``
   :depends on unzip: 
   :depends on vcflib: ``>=0.1.11,<1.0.4``
   :depends on vcftools: ``>=0.1.15``

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

    pixi global install ddocent

to add into an existing workspace instead, run::

    pixi add ddocent

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ddocent

Alternatively, to install into a new environment, run::

    conda create -n envname ddocent

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ddocent:<tag>

(see `ddocent/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ddocent| image:: https://img.shields.io/conda/dn/bioconda/ddocent.svg?style=flat
   :target: https://anaconda.org/bioconda/ddocent
   :alt:   (downloads)
.. |docker_ddocent| image:: https://quay.io/repository/biocontainers/ddocent/status
   :target: https://quay.io/repository/biocontainers/ddocent
.. _`ddocent/tags`: https://quay.io/repository/biocontainers/ddocent?tab=tags


.. raw:: html

    <script>
        var package = "ddocent";
        var versions = ["2.9.8","2.9.7","2.9.7","2.9.7","2.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddocent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddocent/README.html