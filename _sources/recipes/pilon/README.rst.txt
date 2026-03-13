:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pilon'
.. highlight: bash

pilon
=====

.. conda:recipe:: pilon
   :replaces_section_title:
   :noindex:

   Pilon is an automated genome assembly improvement and variant detection tool.

   :homepage: https://github.com/broadinstitute/pilon/
   :license: GPLv2
   :recipe: /`pilon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon/meta.yaml>`_

   


.. conda:package:: pilon

   |downloads_pilon| |docker_pilon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24-0</code>,  <code>1.23-3</code>,  <code>1.23-2</code>,  <code>1.23-1</code>,  <code>1.23-0</code>,  <code>1.22-1</code>,  <code>1.22-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  </span></summary>
      

      ``1.24-0``,  ``1.23-3``,  ``1.23-2``,  ``1.23-1``,  ``1.23-0``,  ``1.22-1``,  ``1.22-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 
   :depends on python: 

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

    pixi global install pilon

to add into an existing workspace instead, run::

    pixi add pilon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pilon

Alternatively, to install into a new environment, run::

    conda create -n envname pilon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pilon:<tag>

(see `pilon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pilon| image:: https://img.shields.io/conda/dn/bioconda/pilon.svg?style=flat
   :target: https://anaconda.org/bioconda/pilon
   :alt:   (downloads)
.. |docker_pilon| image:: https://quay.io/repository/biocontainers/pilon/status
   :target: https://quay.io/repository/biocontainers/pilon
.. _`pilon/tags`: https://quay.io/repository/biocontainers/pilon?tab=tags


.. raw:: html

    <script>
        var package = "pilon";
        var versions = ["1.24","1.23","1.23","1.23","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pilon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pilon/README.html