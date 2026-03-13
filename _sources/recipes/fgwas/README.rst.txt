:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgwas'
.. highlight: bash

fgwas
=====

.. conda:recipe:: fgwas
   :replaces_section_title:
   :noindex:

   fgwas is a command line tool for integrating functional genomic information into a genome\-wide association study \(GWAS\).

   :homepage: https://github.com/joepickrell/fgwas
   :license: GPL2
   :recipe: /`fgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas/meta.yaml>`_

   


.. conda:package:: fgwas

   |downloads_fgwas| |docker_fgwas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-9</code>,  <code>0.3.6-8</code>,  <code>0.3.6-7</code>,  <code>0.3.6-6</code>,  <code>0.3.6-5</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  </span></summary>
      

      ``0.3.6-9``,  ``0.3.6-8``,  ``0.3.6-7``,  ``0.3.6-6``,  ``0.3.6-5``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
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

    pixi global install fgwas

to add into an existing workspace instead, run::

    pixi add fgwas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fgwas

Alternatively, to install into a new environment, run::

    conda create -n envname fgwas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fgwas:<tag>

(see `fgwas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fgwas| image:: https://img.shields.io/conda/dn/bioconda/fgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/fgwas
   :alt:   (downloads)
.. |docker_fgwas| image:: https://quay.io/repository/biocontainers/fgwas/status
   :target: https://quay.io/repository/biocontainers/fgwas
.. _`fgwas/tags`: https://quay.io/repository/biocontainers/fgwas?tab=tags


.. raw:: html

    <script>
        var package = "fgwas";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgwas/README.html