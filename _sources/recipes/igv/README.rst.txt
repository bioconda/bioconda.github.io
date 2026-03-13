:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv'
.. highlight: bash

igv
===

.. conda:recipe:: igv
   :replaces_section_title:
   :noindex:

   Integrative Genomics Viewer. Fast\, efficient\, scalable visualization tool for genomics
   data and annotations.


   :homepage: https://igv.org/doc/desktop
   :documentation: https://igv.org
   
   :developer docs: https://github.com/igvteam/igv
   :license: MIT / MIT
   :recipe: /`igv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv/meta.yaml>`_
   :links: biotools: :biotools:`igv`, doi: :doi:`10.1038/nbt.1754`, doi: :doi:`10.1093/bioinformatics/btac830`

   


.. conda:package:: igv

   |downloads_igv| |docker_igv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.19.7-0</code>,  <code>2.19.6-0</code>,  <code>2.19.4-0</code>,  <code>2.19.3-0</code>,  <code>2.19.2-0</code>,  <code>2.19.1-1</code>,  <code>2.19.1-0</code>,  <code>2.17.4-0</code>,  <code>2.17.3-0</code>,  </span></summary>
      

      ``2.19.7-0``,  ``2.19.6-0``,  ``2.19.4-0``,  ``2.19.3-0``,  ``2.19.2-0``,  ``2.19.1-1``,  ``2.19.1-0``,  ``2.17.4-0``,  ``2.17.3-0``,  ``2.16.2-0``,  ``2.13.2-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.3-0``,  ``2.12.2-0``,  ``2.12.1-0``,  ``2.12.0-0``,  ``2.11.9-0``,  ``2.11.7-0``,  ``2.11.6-0``,  ``2.11.5-0``,  ``2.11.4-0``,  ``2.11.3-0``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.0-0``,  ``2.9.5-0``,  ``2.9.4-1``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.13-0``,  ``2.8.12-0``,  ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.5.2-0``,  ``2.4.17-0``,  ``2.4.16-0``,  ``2.4.9-1``,  ``2.4.9-0``,  ``2.4.6-0``,  ``2.3.98-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``<22``

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

    pixi global install igv

to add into an existing workspace instead, run::

    pixi add igv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igv

Alternatively, to install into a new environment, run::

    conda create -n envname igv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igv:<tag>

(see `igv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igv| image:: https://img.shields.io/conda/dn/bioconda/igv.svg?style=flat
   :target: https://anaconda.org/bioconda/igv
   :alt:   (downloads)
.. |docker_igv| image:: https://quay.io/repository/biocontainers/igv/status
   :target: https://quay.io/repository/biocontainers/igv
.. _`igv/tags`: https://quay.io/repository/biocontainers/igv?tab=tags


.. raw:: html

    <script>
        var package = "igv";
        var versions = ["2.19.7","2.19.6","2.19.4","2.19.3","2.19.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv/README.html