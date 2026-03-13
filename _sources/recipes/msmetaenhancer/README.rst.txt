:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msmetaenhancer'
.. highlight: bash

msmetaenhancer
==============

.. conda:recipe:: msmetaenhancer
   :replaces_section_title:
   :noindex:

   MSMetaEnhancer is a Python tool that adds more annotations \(e.g. SMILES\, InChI\, CAS number\) to MSP files.

   :homepage: https://github.com/RECETOX/MSMetaEnhancer
   :documentation: https://msmetaenhancer.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`msmetaenhancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer/meta.yaml>`_
   :links: biotools: :biotools:`msmetaenhancer`, doi: :doi:`10.21105/joss.04494`

   


.. conda:package:: msmetaenhancer

   |downloads_msmetaenhancer| |docker_msmetaenhancer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiocircuitbreaker: 
   :depends on aiohttp: 
   :depends on asyncstdlib: 
   :depends on frozendict: 
   :depends on matchms: ``>=0.30.0``
   :depends on multidict: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.14``
   :depends on rdkit: 
   :depends on requests: 
   :depends on scipy: 
   :depends on tabulate: 
   :depends on twine: 

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

    pixi global install msmetaenhancer

to add into an existing workspace instead, run::

    pixi add msmetaenhancer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msmetaenhancer

Alternatively, to install into a new environment, run::

    conda create -n envname msmetaenhancer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msmetaenhancer:<tag>

(see `msmetaenhancer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msmetaenhancer| image:: https://img.shields.io/conda/dn/bioconda/msmetaenhancer.svg?style=flat
   :target: https://anaconda.org/bioconda/msmetaenhancer
   :alt:   (downloads)
.. |docker_msmetaenhancer| image:: https://quay.io/repository/biocontainers/msmetaenhancer/status
   :target: https://quay.io/repository/biocontainers/msmetaenhancer
.. _`msmetaenhancer/tags`: https://quay.io/repository/biocontainers/msmetaenhancer?tab=tags


.. raw:: html

    <script>
        var package = "msmetaenhancer";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msmetaenhancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msmetaenhancer/README.html