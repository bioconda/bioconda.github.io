:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scelvis'
.. highlight: bash

scelvis
=======

.. conda:recipe:: scelvis
   :replaces_section_title:
   :noindex:

   SCelVis \- web\-based visualization of single\-cell data

   :homepage: https://github.com/bihealth/scelvis
   :license: MIT / MIT
   :recipe: /`scelvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis/meta.yaml>`_

   


.. conda:package:: scelvis

   |downloads_scelvis| |docker_scelvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.9-0</code>,  <code>0.8.7-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.8.9-0``,  ``0.8.7-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.7.6``
   :depends on attrs: ``>=21.2``
   :depends on click: ``<8.0``
   :depends on dash: 
   :depends on dash-bootstrap-components: 
   :depends on dash-core-components: ``>1.0,<2.0``
   :depends on dash-html-components: ``>1.0,<2.0``
   :depends on dash-renderer: ``>=1.9.1,<2.0``
   :depends on dash-table: ``>=5.0``
   :depends on flask: ``>=2.0``
   :depends on flask-caching: ``>=1.10``
   :depends on fs: ``>=2.4.11``
   :depends on fs.sshfs: ``>=1.0.0``
   :depends on htmllistparse: ``>=0.5``
   :depends on logzero: ``>=1.7.0``
   :depends on numpy: ``<1.21``
   :depends on pandas: ``>=1.3.4``
   :depends on plotly: ``>=5.3.1``
   :depends on python: ``>=3.6``
   :depends on python-irodsclient: ``>=1.1.0``
   :depends on requests: ``>=2.26.0``
   :depends on ruamel.yaml: ``>=0.17.17``
   :depends on s3fs: ``>=2021.11.0``
   :depends on scanpy: 

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

    pixi global install scelvis

to add into an existing workspace instead, run::

    pixi add scelvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scelvis

Alternatively, to install into a new environment, run::

    conda create -n envname scelvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scelvis:<tag>

(see `scelvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scelvis| image:: https://img.shields.io/conda/dn/bioconda/scelvis.svg?style=flat
   :target: https://anaconda.org/bioconda/scelvis
   :alt:   (downloads)
.. |docker_scelvis| image:: https://quay.io/repository/biocontainers/scelvis/status
   :target: https://quay.io/repository/biocontainers/scelvis
.. _`scelvis/tags`: https://quay.io/repository/biocontainers/scelvis?tab=tags


.. raw:: html

    <script>
        var package = "scelvis";
        var versions = ["0.8.9","0.8.7","0.8.4","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scelvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scelvis/README.html