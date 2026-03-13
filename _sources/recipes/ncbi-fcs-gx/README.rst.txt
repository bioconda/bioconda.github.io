:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-fcs-gx'
.. highlight: bash

ncbi-fcs-gx
===========

.. conda:recipe:: ncbi-fcs-gx
   :replaces_section_title:
   :noindex:

   The NCBI Foreign Contamination Screen. Genomic cross\-species aligner\, for contamination detection.

   :homepage: https://github.com/ncbi/fcs
   :license: `NCBI-PD <https://github.com/ncbi/fcs/blob/main/LICENSE.txt>`_
   :recipe: /`ncbi-fcs-gx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx/meta.yaml>`_

   


.. conda:package:: ncbi-fcs-gx

   |downloads_ncbi-fcs-gx| |docker_ncbi-fcs-gx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.0-3</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aria2: ``1.36.0.*``
   :depends on grep: ``>=3.4``
   :depends on gzip: ``>=1.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on pv: ``>=1.4.6``
   :depends on python: ``>=3.9``
   :depends on rclone: ``1.61.1.*``

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

    pixi global install ncbi-fcs-gx

to add into an existing workspace instead, run::

    pixi add ncbi-fcs-gx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-fcs-gx

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-fcs-gx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-fcs-gx:<tag>

(see `ncbi-fcs-gx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-fcs-gx| image:: https://img.shields.io/conda/dn/bioconda/ncbi-fcs-gx.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-fcs-gx
   :alt:   (downloads)
.. |docker_ncbi-fcs-gx| image:: https://quay.io/repository/biocontainers/ncbi-fcs-gx/status
   :target: https://quay.io/repository/biocontainers/ncbi-fcs-gx
.. _`ncbi-fcs-gx/tags`: https://quay.io/repository/biocontainers/ncbi-fcs-gx?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-fcs-gx";
        var versions = ["0.5.5","0.5.4","0.5.4","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html