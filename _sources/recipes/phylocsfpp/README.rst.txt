:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylocsfpp'
.. highlight: bash

phylocsfpp
==========

.. conda:recipe:: phylocsfpp
   :replaces_section_title:
   :noindex:

   A fast and user\-friendly implementation of PhyloCSF with annotation tools.

   :homepage: https://github.com/cpockrandt/PhyloCSFpp
   :license: AGPLv3
   :recipe: /`phylocsfpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp/meta.yaml>`_

   


.. conda:package:: phylocsfpp

   |downloads_phylocsfpp| |docker_phylocsfpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0_9643238d-7</code>,  <code>1.2.0_9643238d-6</code>,  <code>1.2.0_9643238d-5</code>,  <code>1.2.0_9643238d-4</code>,  <code>1.2.0_9643238d-3</code>,  <code>1.2.0_9643238d-2</code>,  <code>1.2.0_9643238d-1</code>,  <code>1.2.0_9643238d-0</code>,  <code>1.1.1_4bb3c87a-0</code>,  </span></summary>
      

      ``1.2.0_9643238d-7``,  ``1.2.0_9643238d-6``,  ``1.2.0_9643238d-5``,  ``1.2.0_9643238d-4``,  ``1.2.0_9643238d-3``,  ``1.2.0_9643238d-2``,  ``1.2.0_9643238d-1``,  ``1.2.0_9643238d-0``,  ``1.1.1_4bb3c87a-0``,  ``1.1.0_519b603e-0``,  ``1.0.0_f5ab2559-1``,  ``1.0.0_f5ab2559-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install phylocsfpp

to add into an existing workspace instead, run::

    pixi add phylocsfpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylocsfpp

Alternatively, to install into a new environment, run::

    conda create -n envname phylocsfpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylocsfpp:<tag>

(see `phylocsfpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylocsfpp| image:: https://img.shields.io/conda/dn/bioconda/phylocsfpp.svg?style=flat
   :target: https://anaconda.org/bioconda/phylocsfpp
   :alt:   (downloads)
.. |docker_phylocsfpp| image:: https://quay.io/repository/biocontainers/phylocsfpp/status
   :target: https://quay.io/repository/biocontainers/phylocsfpp
.. _`phylocsfpp/tags`: https://quay.io/repository/biocontainers/phylocsfpp?tab=tags


.. raw:: html

    <script>
        var package = "phylocsfpp";
        var versions = ["1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylocsfpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylocsfpp/README.html