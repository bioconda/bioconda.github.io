:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-orange'
.. highlight: bash

hmftools-orange
===============

.. conda:recipe:: hmftools-orange
   :replaces_section_title:
   :noindex:

   ORANGE summarizes the key outputs from all algorithms in the Hartwig suite.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/orange/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-orange <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-orange>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-orange/meta.yaml>`_

   


.. conda:package:: hmftools-orange

   |downloads_hmftools-orange| |docker_hmftools-orange|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.1-0</code>,  </span></summary>
      

      ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.7.1_beta-3``,  ``3.7.1_beta-2``,  ``3.7.1_beta-1``,  ``3.7.1_beta-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.0.0-0``,  ``2.7.1-0``,  ``1.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8,<=21``
   :depends on zlib: 

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

    pixi global install hmftools-orange

to add into an existing workspace instead, run::

    pixi add hmftools-orange

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-orange

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-orange

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-orange:<tag>

(see `hmftools-orange/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-orange| image:: https://img.shields.io/conda/dn/bioconda/hmftools-orange.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-orange
   :alt:   (downloads)
.. |docker_hmftools-orange| image:: https://quay.io/repository/biocontainers/hmftools-orange/status
   :target: https://quay.io/repository/biocontainers/hmftools-orange
.. _`hmftools-orange/tags`: https://quay.io/repository/biocontainers/hmftools-orange?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-orange";
        var versions = ["4.1.3","4.1.2","4.1.1","4.1","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-orange/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-orange/README.html