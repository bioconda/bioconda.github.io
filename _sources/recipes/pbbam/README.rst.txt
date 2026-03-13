:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbbam'
.. highlight: bash

pbbam
=====

.. conda:recipe:: pbbam
   :replaces_section_title:
   :noindex:

   PacBio BAM C\+\+ library

   :homepage: https://github.com/PacificBiosciences/pbbam
   :license: BSD-3-Clause-Clear
   :recipe: /`pbbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam/meta.yaml>`_

   


.. conda:package:: pbbam

   |downloads_pbbam| |docker_pbbam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.1.0-5</code>,  <code>2.1.0-4</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.0-5``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``0.23.0-0``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.18.0-4``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pbcopper: ``>=2.3.0,<2.4.0a0``
   :depends on pbtk: 

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

    pixi global install pbbam

to add into an existing workspace instead, run::

    pixi add pbbam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbbam

Alternatively, to install into a new environment, run::

    conda create -n envname pbbam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbbam:<tag>

(see `pbbam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbbam| image:: https://img.shields.io/conda/dn/bioconda/pbbam.svg?style=flat
   :target: https://anaconda.org/bioconda/pbbam
   :alt:   (downloads)
.. |docker_pbbam| image:: https://quay.io/repository/biocontainers/pbbam/status
   :target: https://quay.io/repository/biocontainers/pbbam
.. _`pbbam/tags`: https://quay.io/repository/biocontainers/pbbam?tab=tags


.. raw:: html

    <script>
        var package = "pbbam";
        var versions = ["2.4.0","2.4.0","2.4.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbbam/README.html