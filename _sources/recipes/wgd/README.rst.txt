:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgd'
.. highlight: bash

wgd
===

.. conda:recipe:: wgd
   :replaces_section_title:
   :noindex:

   wgd v2\: a suite of tools to uncover and date ancient polyploidy and whole\-genome duplication

   :homepage: https://github.com/heche-psb/wgd
   :documentation: https://wgdv2.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`wgd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd/meta.yaml>`_
   :links: biotools: :biotools:`wgd`, doi: :doi:`10.1007/978-1-0716-2561-3_1`, doi: :doi:`10.1093/bioinformatics/btae272`

   


.. conda:package:: wgd

   |downloads_wgd| |docker_wgd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.38-0</code>,  <code>2.0.37-0</code>,  <code>2.0.35-0</code>,  <code>2.0.34-0</code>,  <code>2.0.33-0</code>,  <code>2.0.32-0</code>,  <code>2.0.31-0</code>,  <code>2.0.30-0</code>,  <code>2.0.29-0</code>,  </span></summary>
      

      ``2.0.38-0``,  ``2.0.37-0``,  ``2.0.35-0``,  ``2.0.34-0``,  ``2.0.33-0``,  ``2.0.32-0``,  ``2.0.31-0``,  ``2.0.30-0``,  ``2.0.29-0``,  ``2.0.28-0``,  ``2.0.27-0``,  ``2.0.26-0``,  ``2.0.25-0``,  ``2.0.24-0``,  ``2.0.23-0``,  ``2.0.22-0``,  ``2.0.21-0``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on diamond: 
   :depends on mafft: 
   :depends on mcl: 
   :depends on paml: 
   :depends on python: ``>=3.6,<3.10``

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

    pixi global install wgd

to add into an existing workspace instead, run::

    pixi add wgd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wgd

Alternatively, to install into a new environment, run::

    conda create -n envname wgd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wgd:<tag>

(see `wgd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wgd| image:: https://img.shields.io/conda/dn/bioconda/wgd.svg?style=flat
   :target: https://anaconda.org/bioconda/wgd
   :alt:   (downloads)
.. |docker_wgd| image:: https://quay.io/repository/biocontainers/wgd/status
   :target: https://quay.io/repository/biocontainers/wgd
.. _`wgd/tags`: https://quay.io/repository/biocontainers/wgd?tab=tags


.. raw:: html

    <script>
        var package = "wgd";
        var versions = ["2.0.38","2.0.37","2.0.35","2.0.34","2.0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgd/README.html