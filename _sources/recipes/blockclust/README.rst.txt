:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blockclust'
.. highlight: bash

blockclust
==========

.. conda:recipe:: blockclust
   :replaces_section_title:
   :noindex:

   Efficient clustering and classification of non\-coding RNAs from short read RNA\-seq profiles.

   :homepage: https://github.com/pavanvidem/blockclust
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`blockclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu270`

   


.. conda:package:: blockclust

   |downloads_blockclust| |docker_blockclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  </span></summary>
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cloudpickle: ``0.5.6.*``
   :depends on eden: ``1.1.*``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mcl: ``>=14.137``
   :depends on pysam: ``>=0.15.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dendextend: ``>=1.8.0``
   :depends on scikit-learn: ``>=0.20.0``
   :depends on wget: 

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

    pixi global install blockclust

to add into an existing workspace instead, run::

    pixi add blockclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blockclust

Alternatively, to install into a new environment, run::

    conda create -n envname blockclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blockclust:<tag>

(see `blockclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blockclust| image:: https://img.shields.io/conda/dn/bioconda/blockclust.svg?style=flat
   :target: https://anaconda.org/bioconda/blockclust
   :alt:   (downloads)
.. |docker_blockclust| image:: https://quay.io/repository/biocontainers/blockclust/status
   :target: https://quay.io/repository/biocontainers/blockclust
.. _`blockclust/tags`: https://quay.io/repository/biocontainers/blockclust?tab=tags


.. raw:: html

    <script>
        var package = "blockclust";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockclust/README.html