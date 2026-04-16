:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmlr'
.. highlight: bash

ngmlr
=====

.. conda:recipe:: ngmlr
   :replaces_section_title:
   :noindex:

   ngmlr is a long\-read mapper designed to align PacBio or Oxford Nanopore reads to a reference genome and optimized for structural variation detection.

   :homepage: https://github.com/philres/ngmlr
   :documentation: https://github.com/philres/ngmlr/blob/v0.2.7/README.md
   
   :license: MIT / MIT
   :recipe: /`ngmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr/meta.yaml>`_
   :links: biotools: :biotools:`ngmlr`, doi: :doi:`10.1038/s41592-018-0001-7`

   


.. conda:package:: ngmlr

   |downloads_ngmlr| |docker_ngmlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.7-10</code>,  <code>0.2.7-9</code>,  <code>0.2.7-8</code>,  <code>0.2.7-7</code>,  <code>0.2.7-6</code>,  <code>0.2.7-5</code>,  <code>0.2.7-4</code>,  <code>0.2.7-3</code>,  <code>0.2.7-2</code>,  </span></summary>
      

      ``0.2.7-10``,  ``0.2.7-9``,  ``0.2.7-8``,  ``0.2.7-7``,  ``0.2.7-6``,  ``0.2.7-5``,  ``0.2.7-4``,  ``0.2.7-3``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install ngmlr

to add into an existing workspace instead, run::

    pixi add ngmlr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngmlr

Alternatively, to install into a new environment, run::

    conda create -n envname ngmlr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngmlr:<tag>

(see `ngmlr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngmlr| image:: https://img.shields.io/conda/dn/bioconda/ngmlr.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmlr
   :alt:   (downloads)
.. |docker_ngmlr| image:: https://quay.io/repository/biocontainers/ngmlr/status
   :target: https://quay.io/repository/biocontainers/ngmlr
.. _`ngmlr/tags`: https://quay.io/repository/biocontainers/ngmlr?tab=tags


.. raw:: html

    <script>
        var package = "ngmlr";
        var versions = ["0.2.7","0.2.7","0.2.7","0.2.7","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmlr/README.html