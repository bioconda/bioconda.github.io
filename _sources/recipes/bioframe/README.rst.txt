:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioframe'
.. highlight: bash

bioframe
========

.. conda:recipe:: bioframe
   :replaces_section_title:
   :noindex:

   Pandas utilities for tab\-delimited and other genomic files

   :homepage: https://github.com/mirnylab/bioframe
   :documentation: https://bioframe.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`bioframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe/meta.yaml>`_

   


.. conda:package:: bioframe

   |downloads_bioframe| |docker_bioframe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cytoolz: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.10``
   :depends on pairix: 
   :depends on pandas: ``>=1.3``
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on six: 

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

    pixi global install bioframe

to add into an existing workspace instead, run::

    pixi add bioframe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioframe

Alternatively, to install into a new environment, run::

    conda create -n envname bioframe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioframe:<tag>

(see `bioframe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioframe| image:: https://img.shields.io/conda/dn/bioconda/bioframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioframe
   :alt:   (downloads)
.. |docker_bioframe| image:: https://quay.io/repository/biocontainers/bioframe/status
   :target: https://quay.io/repository/biocontainers/bioframe
.. _`bioframe/tags`: https://quay.io/repository/biocontainers/bioframe?tab=tags


.. raw:: html

    <script>
        var package = "bioframe";
        var versions = ["0.8.0","0.7.2","0.7.1","0.7.0","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioframe/README.html