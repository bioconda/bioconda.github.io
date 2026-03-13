:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fuc'
.. highlight: bash

fuc
===

.. conda:recipe:: fuc
   :replaces_section_title:
   :noindex:

   Frequently used commands in bioinformatics

   :homepage: https://github.com/sbslee/fuc
   :documentation: https://sbslee-fuc.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`fuc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuc/meta.yaml>`_

   


.. conda:package:: fuc

   |downloads_fuc| |docker_fuc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.0-0</code>,  <code>0.37.0-0</code>,  <code>0.36.0-0</code>,  <code>0.35.0-0</code>,  <code>0.34.0-0</code>,  <code>0.33.1-0</code>,  <code>0.32.0-0</code>,  <code>0.31.0-0</code>,  <code>0.30.0-0</code>,  </span></summary>
      

      ``0.38.0-0``,  ``0.37.0-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.0-0``,  ``0.33.1-0``,  ``0.32.0-0``,  ``0.31.0-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on matplotlib-venn: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyranges: 
   :depends on pysam: 
   :depends on python: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 

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

    pixi global install fuc

to add into an existing workspace instead, run::

    pixi add fuc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fuc

Alternatively, to install into a new environment, run::

    conda create -n envname fuc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fuc:<tag>

(see `fuc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fuc| image:: https://img.shields.io/conda/dn/bioconda/fuc.svg?style=flat
   :target: https://anaconda.org/bioconda/fuc
   :alt:   (downloads)
.. |docker_fuc| image:: https://quay.io/repository/biocontainers/fuc/status
   :target: https://quay.io/repository/biocontainers/fuc
.. _`fuc/tags`: https://quay.io/repository/biocontainers/fuc?tab=tags


.. raw:: html

    <script>
        var package = "fuc";
        var versions = ["0.38.0","0.37.0","0.36.0","0.35.0","0.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fuc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fuc/README.html