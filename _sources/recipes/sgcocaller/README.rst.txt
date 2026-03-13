:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sgcocaller'
.. highlight: bash

sgcocaller
==========

.. conda:recipe:: sgcocaller
   :replaces_section_title:
   :noindex:

   Personalized haplotype construction and crossover calling in single\-cell DNA sequenced gamete cells.

   :homepage: https://gitlab.svi.edu.au/biocellgen-public/sgcocaller
   :license: MIT
   :recipe: /`sgcocaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgcocaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgcocaller/meta.yaml>`_
   :links: biotools: :biotools:`sgcocaller`

   


.. conda:package:: sgcocaller

   |downloads_sgcocaller| |docker_sgcocaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.9-2</code>,  <code>0.3.9-1</code>,  <code>0.3.9-0</code>,  <code>0.3.7-2</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  </span></summary>
      

      ``0.3.9-2``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.4.0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``
   :depends on zlib: ``>=1.2.13,<1.3.0a0``

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

    pixi global install sgcocaller

to add into an existing workspace instead, run::

    pixi add sgcocaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sgcocaller

Alternatively, to install into a new environment, run::

    conda create -n envname sgcocaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sgcocaller:<tag>

(see `sgcocaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sgcocaller| image:: https://img.shields.io/conda/dn/bioconda/sgcocaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sgcocaller
   :alt:   (downloads)
.. |docker_sgcocaller| image:: https://quay.io/repository/biocontainers/sgcocaller/status
   :target: https://quay.io/repository/biocontainers/sgcocaller
.. _`sgcocaller/tags`: https://quay.io/repository/biocontainers/sgcocaller?tab=tags


.. raw:: html

    <script>
        var package = "sgcocaller";
        var versions = ["0.3.9","0.3.9","0.3.9","0.3.7","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sgcocaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sgcocaller/README.html