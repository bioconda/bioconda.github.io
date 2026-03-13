:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rubic'
.. highlight: bash

r-rubic
=======

.. conda:recipe:: r-rubic
   :replaces_section_title:
   :noindex:

   Pinpoint driver genes in focal recurrent aberrations \(across tumor samples\) in DNA somatic copy number data.

   :homepage: http://ccb.nki.nl/software/
   :license: Apache-2.0
   :recipe: /`r-rubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic/meta.yaml>`_
   :links: doi: :doi:`10.1038/ncomms12159`

   


.. conda:package:: r-rubic

   |downloads_r-rubic| |docker_r-rubic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgfortran: ``3.0.0.*``
   :depends on r-base: ``>=3.4,<3.5.0a0``
   :depends on r-data.table: ``>1.9.6,<=1.11.4``
   :depends on r-digest: 
   :depends on r-ggplot2: 
   :depends on r-gtable: 
   :depends on r-pracma: 

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

    pixi global install r-rubic

to add into an existing workspace instead, run::

    pixi add r-rubic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-rubic

Alternatively, to install into a new environment, run::

    conda create -n envname r-rubic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-rubic:<tag>

(see `r-rubic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-rubic| image:: https://img.shields.io/conda/dn/bioconda/r-rubic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rubic
   :alt:   (downloads)
.. |docker_r-rubic| image:: https://quay.io/repository/biocontainers/r-rubic/status
   :target: https://quay.io/repository/biocontainers/r-rubic
.. _`r-rubic/tags`: https://quay.io/repository/biocontainers/r-rubic?tab=tags


.. raw:: html

    <script>
        var package = "r-rubic";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rubic/README.html