:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libis'
.. highlight: bash

libis
=====

.. conda:recipe:: libis
   :replaces_section_title:
   :noindex:

   Low input Bisulfite sequencing alignment

   :homepage: https://github.com/Dangertrip/LiBis
   :license: MIT / MIT
   :recipe: /`libis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis/meta.yaml>`_

   


.. conda:package:: libis

   |downloads_libis| |docker_libis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.6-0</code>,  <code>0.1.5.8-0</code>,  <code>0.1.5.7-0</code>,  <code>0.1.5.6-0</code>,  <code>0.1.5.5-0</code>,  <code>0.1.5.4-0</code>,  <code>0.1.5.3-0</code>,  <code>0.1.5.2-0</code>,  <code>0.1.5.1-0</code>,  </span></summary>
      

      ``0.1.6-0``,  ``0.1.5.8-0``,  ``0.1.5.7-0``,  ``0.1.5.6-0``,  ``0.1.5.5-0``,  ``0.1.5.4-0``,  ``0.1.5.3-0``,  ``0.1.5.2-0``,  ``0.1.5.1-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.15-2``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on cutadapt: 
   :depends on fastqc: 
   :depends on matplotlib-base: 
   :depends on moabs: ``>=1.3.8.5``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on trim-galore: 

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

    pixi global install libis

to add into an existing workspace instead, run::

    pixi add libis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libis

Alternatively, to install into a new environment, run::

    conda create -n envname libis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libis:<tag>

(see `libis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libis| image:: https://img.shields.io/conda/dn/bioconda/libis.svg?style=flat
   :target: https://anaconda.org/bioconda/libis
   :alt:   (downloads)
.. |docker_libis| image:: https://quay.io/repository/biocontainers/libis/status
   :target: https://quay.io/repository/biocontainers/libis
.. _`libis/tags`: https://quay.io/repository/biocontainers/libis?tab=tags


.. raw:: html

    <script>
        var package = "libis";
        var versions = ["0.1.6","0.1.5.8","0.1.5.7","0.1.5.6","0.1.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libis/README.html