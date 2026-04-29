:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paladin'
.. highlight: bash

paladin
=======

.. conda:recipe:: paladin
   :replaces_section_title:
   :noindex:

   Protein Alignment and Detection Interface.

   :homepage: https://github.com/ToniWestbrook/paladin
   :documentation: https://genomebio.org/paladin
   
   :license: MIT / MIT
   :recipe: /`paladin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin/meta.yaml>`_
   :links: biotools: :biotools:`paladin`, doi: :doi:`10.1093/bioinformatics/btx021`

   PALADIN is a protein sequence alignment tool designed for the accurate functional characterization of metagenomes.


.. conda:package:: paladin

   |downloads_paladin| |docker_paladin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.4.6-6</code>,  <code>1.4.6-5</code>,  <code>1.4.6-4</code>,  <code>1.4.6-3</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.4-0</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.4.6-6``,  ``1.4.6-5``,  ``1.4.6-4``,  ``1.4.6-3``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.4-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libgcc: ``>=13``
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

    pixi global install paladin

to add into an existing workspace instead, run::

    pixi add paladin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paladin

Alternatively, to install into a new environment, run::

    conda create -n envname paladin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paladin:<tag>

(see `paladin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paladin| image:: https://img.shields.io/conda/dn/bioconda/paladin.svg?style=flat
   :target: https://anaconda.org/bioconda/paladin
   :alt:   (downloads)
.. |docker_paladin| image:: https://quay.io/repository/biocontainers/paladin/status
   :target: https://quay.io/repository/biocontainers/paladin
.. _`paladin/tags`: https://quay.io/repository/biocontainers/paladin?tab=tags


.. raw:: html

    <script>
        var package = "paladin";
        var versions = ["1.6.0","1.4.6","1.4.6","1.4.6","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paladin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paladin/README.html