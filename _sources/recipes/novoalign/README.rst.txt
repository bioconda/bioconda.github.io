:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novoalign'
.. highlight: bash

novoalign
=========

.. conda:recipe:: novoalign
   :replaces_section_title:
   :noindex:

   Powerful tool designed for mapping of short reads onto a reference genome from Illumina\, Ion Torrent\, and 454 NGS platforms

   :homepage: http://www.novocraft.com/products/novoalign/
   :license: Commercial (requires license for use)
   :recipe: /`novoalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoalign/meta.yaml>`_
   :links: biotools: :biotools:`Novoalign`

   


.. conda:package:: novoalign

   |downloads_novoalign| |docker_novoalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.03.04-4</code>,  <code>4.03.04-3</code>,  <code>4.03.04-2</code>,  <code>4.03.04-1</code>,  <code>4.03.04-0</code>,  <code>4.02.02-4</code>,  <code>4.02.02-2</code>,  <code>4.02.02-1</code>,  <code>4.02.02-0</code>,  </span></summary>
      

      ``4.03.04-4``,  ``4.03.04-3``,  ``4.03.04-2``,  ``4.03.04-1``,  ``4.03.04-0``,  ``4.02.02-4``,  ``4.02.02-2``,  ``4.02.02-1``,  ``4.02.02-0``,  ``4.02.00-0``,  ``3.09.04-7``,  ``3.09.04-6``,  ``3.09.04-5``,  ``3.09.04-4``,  ``3.09.04-3``,  ``3.09.04-2``,  ``3.09.04-1``,  ``3.09.04-0``,  ``3.09.00-2``,  ``3.09.00-1``,  ``3.09.00-0``,  ``3.07.00-1``,  ``3.07.00-0``,  ``3.06.05-0``,  ``3.04.04-3``,  ``3.04.04-2``,  ``3.04.04-0``,  ``3.03.02-0``

      
      .. raw:: html

         </details>
      

   
   :depends on curl: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on util-linux: 

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

    pixi global install novoalign

to add into an existing workspace instead, run::

    pixi add novoalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install novoalign

Alternatively, to install into a new environment, run::

    conda create -n envname novoalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/novoalign:<tag>

(see `novoalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_novoalign| image:: https://img.shields.io/conda/dn/bioconda/novoalign.svg?style=flat
   :target: https://anaconda.org/bioconda/novoalign
   :alt:   (downloads)
.. |docker_novoalign| image:: https://quay.io/repository/biocontainers/novoalign/status
   :target: https://quay.io/repository/biocontainers/novoalign
.. _`novoalign/tags`: https://quay.io/repository/biocontainers/novoalign?tab=tags


.. raw:: html

    <script>
        var package = "novoalign";
        var versions = ["4.03.04","4.03.04","4.03.04","4.03.04","4.03.04"];
    </script>





Notes
-----
Novoalign V4 will not run unless a \"novoalign.lic\" license file is provided in the same directory as its binaries. The license file can be copied in to the conda environment via the \"novoalign\-license\-register\" command.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoalign/README.html