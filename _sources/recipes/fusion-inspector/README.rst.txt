:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-inspector'
.. highlight: bash

fusion-inspector
================

.. conda:recipe:: fusion-inspector
   :replaces_section_title:
   :noindex:

   FusionInspector is a component of the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). FusionInspector assists in fusion transcript discovery by performing a supervised analysis of fusion predictions\, attempting to recover and re\-score evidence for such predictions. \- https\:\/\/github.com\/FusionInspector\/FusionInspector\/wiki

   :homepage: https://github.com/FusionInspector/FusionInspector
   :license: BSD-3-Clause
   :recipe: /`fusion-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector/meta.yaml>`_

   


.. conda:package:: fusion-inspector

   |downloads_fusion-inspector| |docker_fusion-inspector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.2.1-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.2.1-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: 
   :depends on gmap: ``>=2017.11.15``
   :depends on htslib: 
   :depends on perl: 
   :depends on perl-db_file: 
   :depends on perl-set-intervaltree: 
   :depends on perl-uri: 
   :depends on python: ``>=3``
   :depends on requests: ``>=2.19.1``
   :depends on samtools: ``>=1.3``
   :depends on star: ``>=2.6.1b``
   :depends on trinity: ``>=2.15.1``

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

    pixi global install fusion-inspector

to add into an existing workspace instead, run::

    pixi add fusion-inspector

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fusion-inspector

Alternatively, to install into a new environment, run::

    conda create -n envname fusion-inspector

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fusion-inspector:<tag>

(see `fusion-inspector/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fusion-inspector| image:: https://img.shields.io/conda/dn/bioconda/fusion-inspector.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-inspector
   :alt:   (downloads)
.. |docker_fusion-inspector| image:: https://quay.io/repository/biocontainers/fusion-inspector/status
   :target: https://quay.io/repository/biocontainers/fusion-inspector
.. _`fusion-inspector/tags`: https://quay.io/repository/biocontainers/fusion-inspector?tab=tags


.. raw:: html

    <script>
        var package = "fusion-inspector";
        var versions = ["2.10.0","2.10.0","2.8.0","2.2.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-inspector/README.html