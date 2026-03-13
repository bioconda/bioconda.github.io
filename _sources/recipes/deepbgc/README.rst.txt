:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepbgc'
.. highlight: bash

deepbgc
=======

.. conda:recipe:: deepbgc
   :replaces_section_title:
   :noindex:

   DeepBGC \- Biosynthetic Gene Cluster detection and classification

   :homepage: https://github.com/Merck/DeepBGC
   :license: MIT / MIT
   :recipe: /`deepbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc/meta.yaml>`_

   


.. conda:package:: deepbgc

   |downloads_deepbgc| |docker_deepbgc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.31-0</code>,  <code>0.1.30-2</code>,  <code>0.1.30-1</code>,  <code>0.1.30-0</code>,  <code>0.1.29-0</code>,  <code>0.1.28-1</code>,  <code>0.1.28-0</code>,  <code>0.1.27-0</code>,  <code>0.1.26-0</code>,  </span></summary>
      

      ``0.1.31-0``,  ``0.1.30-2``,  ``0.1.30-1``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.28-1``,  ``0.1.28-0``,  ``0.1.27-0``,  ``0.1.26-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: ``>=1.4.3``
   :depends on biopython: ``>=1.78``
   :depends on hmmer: ``>=3.1b2``
   :depends on keras: ``2.2.4``
   :depends on matplotlib-base: ``2.2.3``
   :depends on numpy: ``1.16.1``
   :depends on pandas: ``0.24.1``
   :depends on prodigal: 
   :depends on protobuf: ``<=3.19.0``
   :depends on python: ``>=3.5``
   :depends on scikit-learn: ``0.21.3``
   :depends on scipy: ``1.2.0``
   :depends on tensorflow: ``>=1.12.0,<2.0.0``

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

    pixi global install deepbgc

to add into an existing workspace instead, run::

    pixi add deepbgc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepbgc

Alternatively, to install into a new environment, run::

    conda create -n envname deepbgc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepbgc:<tag>

(see `deepbgc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepbgc| image:: https://img.shields.io/conda/dn/bioconda/deepbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/deepbgc
   :alt:   (downloads)
.. |docker_deepbgc| image:: https://quay.io/repository/biocontainers/deepbgc/status
   :target: https://quay.io/repository/biocontainers/deepbgc
.. _`deepbgc/tags`: https://quay.io/repository/biocontainers/deepbgc?tab=tags


.. raw:: html

    <script>
        var package = "deepbgc";
        var versions = ["0.1.31","0.1.30","0.1.30","0.1.30","0.1.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbgc/README.html