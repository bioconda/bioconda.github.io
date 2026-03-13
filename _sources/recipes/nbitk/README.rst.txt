:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nbitk'
.. highlight: bash

nbitk
=====

.. conda:recipe:: nbitk
   :replaces_section_title:
   :noindex:

   nbitk\: Naturalis BioInformatics ToolKit

   :homepage: https://pypi.org/project/nbitk/
   :license: APACHE / Apache-2.0
   :recipe: /`nbitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nbitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nbitk/meta.yaml>`_

   


.. conda:package:: nbitk

   |downloads_nbitk| |docker_nbitk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.7-0</code>,  <code>0.6.6-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.12-0``,  ``0.5.11-0``,  ``0.5.10-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on minio: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on pyyaml: 
   :depends on requests: 

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

    pixi global install nbitk

to add into an existing workspace instead, run::

    pixi add nbitk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nbitk

Alternatively, to install into a new environment, run::

    conda create -n envname nbitk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nbitk:<tag>

(see `nbitk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nbitk| image:: https://img.shields.io/conda/dn/bioconda/nbitk.svg?style=flat
   :target: https://anaconda.org/bioconda/nbitk
   :alt:   (downloads)
.. |docker_nbitk| image:: https://quay.io/repository/biocontainers/nbitk/status
   :target: https://quay.io/repository/biocontainers/nbitk
.. _`nbitk/tags`: https://quay.io/repository/biocontainers/nbitk?tab=tags


.. raw:: html

    <script>
        var package = "nbitk";
        var versions = ["0.7.3","0.7.2","0.7.1","0.7.0","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nbitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nbitk/README.html