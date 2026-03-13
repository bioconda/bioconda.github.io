:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lamassemble'
.. highlight: bash

lamassemble
===========

.. conda:recipe:: lamassemble
   :replaces_section_title:
   :noindex:

   Merge overlapping \"long\" DNA reads into a consensus sequence

   :homepage: https://gitlab.com/mcfrith/lamassemble
   :license: MIT / MIT
   :recipe: /`lamassemble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamassemble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lamassemble/meta.yaml>`_

   


.. conda:package:: lamassemble

   |downloads_lamassemble| |docker_lamassemble|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on last: 
   :depends on mafft: 
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

    pixi global install lamassemble

to add into an existing workspace instead, run::

    pixi add lamassemble

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lamassemble

Alternatively, to install into a new environment, run::

    conda create -n envname lamassemble

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lamassemble:<tag>

(see `lamassemble/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lamassemble| image:: https://img.shields.io/conda/dn/bioconda/lamassemble.svg?style=flat
   :target: https://anaconda.org/bioconda/lamassemble
   :alt:   (downloads)
.. |docker_lamassemble| image:: https://quay.io/repository/biocontainers/lamassemble/status
   :target: https://quay.io/repository/biocontainers/lamassemble
.. _`lamassemble/tags`: https://quay.io/repository/biocontainers/lamassemble?tab=tags


.. raw:: html

    <script>
        var package = "lamassemble";
        var versions = ["1.7.2","1.7.1","1.7.0","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lamassemble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lamassemble/README.html