:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobambam'
.. highlight: bash

biobambam
=========

.. conda:recipe:: biobambam
   :replaces_section_title:
   :noindex:

   Tools for early stage alignment file processing.

   :homepage: https://gitlab.com/german.tischler/biobambam2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`biobambam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam/meta.yaml>`_
   :links: biotools: :biotools:`biobambam`

   


.. conda:package:: biobambam

   |downloads_biobambam| |docker_biobambam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.185-1</code>,  <code>2.0.185-0</code>,  <code>2.0.183-4</code>,  <code>2.0.183-3</code>,  <code>2.0.183-2</code>,  <code>2.0.183-1</code>,  <code>2.0.183-0</code>,  <code>2.0.182-1</code>,  <code>2.0.182-0</code>,  </span></summary>
      

      ``2.0.185-1``,  ``2.0.185-0``,  ``2.0.183-4``,  ``2.0.183-3``,  ``2.0.183-2``,  ``2.0.183-1``,  ``2.0.183-0``,  ``2.0.182-1``,  ``2.0.182-0``,  ``2.0.180-1``,  ``2.0.180-0``,  ``2.0.179-1``,  ``2.0.179-0``,  ``2.0.87-2``,  ``2.0.87-1``,  ``2.0.87-0``,  ``2.0.79-0``,  ``2.0.78-0``,  ``2.0.72-0``,  ``2.0.62-0``,  ``2.0.58-0``,  ``2.0.57-0``,  ``2.0.44-0``,  ``2.0.42-0``,  ``2.0.39-0``,  ``2.0.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on libgcc: ``>=13``
   :depends on libmaus2: ``>=2.0.813``
   :depends on libmaus2: ``>=2.0.813,<3.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install biobambam

to add into an existing workspace instead, run::

    pixi add biobambam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobambam

Alternatively, to install into a new environment, run::

    conda create -n envname biobambam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobambam:<tag>

(see `biobambam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobambam| image:: https://img.shields.io/conda/dn/bioconda/biobambam.svg?style=flat
   :target: https://anaconda.org/bioconda/biobambam
   :alt:   (downloads)
.. |docker_biobambam| image:: https://quay.io/repository/biocontainers/biobambam/status
   :target: https://quay.io/repository/biocontainers/biobambam
.. _`biobambam/tags`: https://quay.io/repository/biocontainers/biobambam?tab=tags


.. raw:: html

    <script>
        var package = "biobambam";
        var versions = ["2.0.185","2.0.185","2.0.183","2.0.183","2.0.183"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobambam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobambam/README.html