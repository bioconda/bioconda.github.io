:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribocode'
.. highlight: bash

ribocode
========

.. conda:recipe:: ribocode
   :replaces_section_title:
   :noindex:

   A package for detecting the actively translated ORFs using ribosome\-profiling data

   :homepage: https://github.com/xryanglab/RiboCode
   :license: MIT / MIT
   :recipe: /`ribocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode/meta.yaml>`_

   


.. conda:package:: ribocode

   |downloads_ribocode| |docker_ribocode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.15-1</code>,  <code>1.2.15-0</code>,  <code>1.2.14-0</code>,  <code>1.2.13-0</code>,  <code>1.2.12-0</code>,  <code>1.2.11-1</code>,  <code>1.2.11-0</code>,  <code>1.2.10-2</code>,  <code>1.2.10-1</code>,  </span></summary>
      

      ``1.2.15-1``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on future: 
   :depends on h5py: 
   :depends on htseq: 
   :depends on matplotlib-base: 
   :depends on minepy: 
   :depends on numpy: 
   :depends on pyfasta: 
   :depends on pysam: ``>0.8.4``
   :depends on python: ``>=3.8,<3.11``
   :depends on scipy: 
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

    pixi global install ribocode

to add into an existing workspace instead, run::

    pixi add ribocode

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribocode

Alternatively, to install into a new environment, run::

    conda create -n envname ribocode

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribocode:<tag>

(see `ribocode/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribocode| image:: https://img.shields.io/conda/dn/bioconda/ribocode.svg?style=flat
   :target: https://anaconda.org/bioconda/ribocode
   :alt:   (downloads)
.. |docker_ribocode| image:: https://quay.io/repository/biocontainers/ribocode/status
   :target: https://quay.io/repository/biocontainers/ribocode
.. _`ribocode/tags`: https://quay.io/repository/biocontainers/ribocode?tab=tags


.. raw:: html

    <script>
        var package = "ribocode";
        var versions = ["1.2.15","1.2.15","1.2.14","1.2.13","1.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribocode/README.html