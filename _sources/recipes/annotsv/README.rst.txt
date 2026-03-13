:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annotsv'
.. highlight: bash

annotsv
=======

.. conda:recipe:: annotsv
   :replaces_section_title:
   :noindex:

   Annotation and Ranking of Structural Variation.

   :homepage: https://github.com/lgmgeo/AnnotSV
   :documentation: https://github.com/lgmgeo/AnnotSV/blob/master/README.AnnotSV_3.5.3.pdf
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`annotsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv/meta.yaml>`_

   


.. conda:package:: annotsv

   |downloads_annotsv| |docker_annotsv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.3-0</code>,  <code>3.5.2-0</code>,  <code>3.5.1-0</code>,  <code>3.5-0</code>,  <code>3.4.6-0</code>,  <code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-1</code>,  </span></summary>
      

      ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5-0``,  ``3.4.6-0``,  ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on bash: 
   :depends on bcftools: ``>=1.10``
   :depends on bedtools: ``>=2.25``
   :depends on coreutils: 
   :depends on curl: 
   :depends on git: 
   :depends on make: 
   :depends on natsort: ``>=7.1.1``
   :depends on openjdk: ``>=8``
   :depends on pandas: ``>=1.5.2``
   :depends on polars: ``>=0.16.5``
   :depends on pyfaidx: ``>=0.7.1``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on tk: ``>=8.5``
   :depends on tqdm: ``>=4.64.1``
   :depends on unzip: 

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

    pixi global install annotsv

to add into an existing workspace instead, run::

    pixi add annotsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annotsv

Alternatively, to install into a new environment, run::

    conda create -n envname annotsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annotsv:<tag>

(see `annotsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annotsv| image:: https://img.shields.io/conda/dn/bioconda/annotsv.svg?style=flat
   :target: https://anaconda.org/bioconda/annotsv
   :alt:   (downloads)
.. |docker_annotsv| image:: https://quay.io/repository/biocontainers/annotsv/status
   :target: https://quay.io/repository/biocontainers/annotsv
.. _`annotsv/tags`: https://quay.io/repository/biocontainers/annotsv?tab=tags


.. raw:: html

    <script>
        var package = "annotsv";
        var versions = ["3.5.3","3.5.2","3.5.1","3.5","3.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annotsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annotsv/README.html