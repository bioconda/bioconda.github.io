:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk-framework'
.. highlight: bash

gatk-framework
==============

.. conda:recipe:: gatk-framework
   :replaces_section_title:
   :noindex:

   The core MIT\-licensed Genome Analysis Toolkit \(GATK\) framework\, free for all uses

   :homepage: https://github.com/chapmanb/gatk
   :license: MIT
   :recipe: /`gatk-framework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework/meta.yaml>`_

   


.. conda:package:: gatk-framework

   |downloads_gatk-framework| |docker_gatk-framework|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.24-6</code>,  <code>3.6.24-5</code>,  <code>3.6.24-4</code>,  <code>3.6.24-3</code>,  <code>3.6.24-2</code>,  <code>3.6.24-1</code>,  <code>3.6.24-0</code>,  <code>3.5.21-0</code>,  <code>3.4.46-3</code>,  </span></summary>
      

      ``3.6.24-6``,  ``3.6.24-5``,  ``3.6.24-4``,  ``3.6.24-3``,  ``3.6.24-2``,  ``3.6.24-1``,  ``3.6.24-0``,  ``3.5.21-0``,  ``3.4.46-3``,  ``3.4.46-2``,  ``3.4.46-1``,  ``3.4.46-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8,<9``

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

    pixi global install gatk-framework

to add into an existing workspace instead, run::

    pixi add gatk-framework

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gatk-framework

Alternatively, to install into a new environment, run::

    conda create -n envname gatk-framework

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gatk-framework:<tag>

(see `gatk-framework/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gatk-framework| image:: https://img.shields.io/conda/dn/bioconda/gatk-framework.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk-framework
   :alt:   (downloads)
.. |docker_gatk-framework| image:: https://quay.io/repository/biocontainers/gatk-framework/status
   :target: https://quay.io/repository/biocontainers/gatk-framework
.. _`gatk-framework/tags`: https://quay.io/repository/biocontainers/gatk-framework?tab=tags


.. raw:: html

    <script>
        var package = "gatk-framework";
        var versions = ["3.6.24","3.6.24","3.6.24","3.6.24","3.6.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk-framework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk-framework/README.html