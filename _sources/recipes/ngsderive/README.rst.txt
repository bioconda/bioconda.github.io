:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsderive'
.. highlight: bash

ngsderive
=========

.. conda:recipe:: ngsderive
   :replaces_section_title:
   :noindex:

   Backwards derive attributes from NGS data

   :homepage: https://github.com/stjudecloud/ngsderive
   :documentation: https://stjudecloud.github.io/ngsderive/
   
   :license: MIT / MIT
   :recipe: /`ngsderive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive/meta.yaml>`_

   


.. conda:package:: ngsderive

   |downloads_ngsderive| |docker_ngsderive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-0</code>,  </span></summary>
      

      ``4.0.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on colorlog: ``>=6.6.0``
   :depends on gtfparse: ``>=1.2.1``
   :depends on pygtrie: ``>=2.5.0``
   :depends on pysam: ``>=0.21``
   :depends on pytabix: ``>=0.1``
   :depends on python: ``>=3.8``
   :depends on rstr: ``>=3.0.0``
   :depends on sortedcontainers: ``>=2.4.0``
   :depends on tabix: ``>=1.11``

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

    pixi global install ngsderive

to add into an existing workspace instead, run::

    pixi add ngsderive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngsderive

Alternatively, to install into a new environment, run::

    conda create -n envname ngsderive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngsderive:<tag>

(see `ngsderive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngsderive| image:: https://img.shields.io/conda/dn/bioconda/ngsderive.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsderive
   :alt:   (downloads)
.. |docker_ngsderive| image:: https://quay.io/repository/biocontainers/ngsderive/status
   :target: https://quay.io/repository/biocontainers/ngsderive
.. _`ngsderive/tags`: https://quay.io/repository/biocontainers/ngsderive?tab=tags


.. raw:: html

    <script>
        var package = "ngsderive";
        var versions = ["4.0.0","3.3.2","3.3.1","3.3.0","3.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsderive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsderive/README.html