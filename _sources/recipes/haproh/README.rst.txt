:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haproh'
.. highlight: bash

haproh
======

.. conda:recipe:: haproh
   :replaces_section_title:
   :noindex:

   Identify runs of homozygosity \(hapROH\) and contamination \(hapCon\) in low coverage ancient human DNA data \(1240K SNPs\) using modern reference panel.

   :homepage: https://github.com/hringbauer/hapROH
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`haproh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haproh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haproh/meta.yaml>`_

   


.. conda:package:: haproh

   |downloads_haproh| |docker_haproh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.64-4</code>,  <code>0.64-3</code>,  <code>0.64-2</code>,  <code>0.64-1</code>,  <code>0.64-0</code>,  <code>0.63-0</code>,  <code>0.62-0</code>,  <code>0.61-0</code>,  <code>0.60-0</code>,  </span></summary>
      

      ``0.64-4``,  ``0.64-3``,  ``0.64-2``,  ``0.64-1``,  ``0.64-0``,  ``0.63-0``,  ``0.62-0``,  ``0.61-0``,  ``0.60-0``,  ``0.53-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cython: 
   :depends on h5py: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on numdifftools: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install haproh

to add into an existing workspace instead, run::

    pixi add haproh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haproh

Alternatively, to install into a new environment, run::

    conda create -n envname haproh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haproh:<tag>

(see `haproh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haproh| image:: https://img.shields.io/conda/dn/bioconda/haproh.svg?style=flat
   :target: https://anaconda.org/bioconda/haproh
   :alt:   (downloads)
.. |docker_haproh| image:: https://quay.io/repository/biocontainers/haproh/status
   :target: https://quay.io/repository/biocontainers/haproh
.. _`haproh/tags`: https://quay.io/repository/biocontainers/haproh?tab=tags


.. raw:: html

    <script>
        var package = "haproh";
        var versions = ["0.64","0.64","0.64","0.64","0.64"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haproh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haproh/README.html