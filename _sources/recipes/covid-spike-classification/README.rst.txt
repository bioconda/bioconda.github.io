:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covid-spike-classification'
.. highlight: bash

covid-spike-classification
==========================

.. conda:recipe:: covid-spike-classification
   :replaces_section_title:
   :noindex:

   Detect interesting SARS\-CoV\-2 spike protein variants from Sanger sequencing data.

   :homepage: https://github.com/kblin/covid-spike-classification/
   :license: APACHE / Apache Software
   :recipe: /`covid-spike-classification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covid-spike-classification/meta.yaml>`_

   


.. conda:package:: covid-spike-classification

   |downloads_covid-spike-classification| |docker_covid-spike-classification|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on bowtie2: ``>=2.4.2``
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.10``
   :depends on tracy: ``>=0.5.3``

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

    pixi global install covid-spike-classification

to add into an existing workspace instead, run::

    pixi add covid-spike-classification

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install covid-spike-classification

Alternatively, to install into a new environment, run::

    conda create -n envname covid-spike-classification

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/covid-spike-classification:<tag>

(see `covid-spike-classification/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_covid-spike-classification| image:: https://img.shields.io/conda/dn/bioconda/covid-spike-classification.svg?style=flat
   :target: https://anaconda.org/bioconda/covid-spike-classification
   :alt:   (downloads)
.. |docker_covid-spike-classification| image:: https://quay.io/repository/biocontainers/covid-spike-classification/status
   :target: https://quay.io/repository/biocontainers/covid-spike-classification
.. _`covid-spike-classification/tags`: https://quay.io/repository/biocontainers/covid-spike-classification?tab=tags


.. raw:: html

    <script>
        var package = "covid-spike-classification";
        var versions = ["0.6.4","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covid-spike-classification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covid-spike-classification/README.html