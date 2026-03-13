:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solvebio'
.. highlight: bash

solvebio
========

.. conda:recipe:: solvebio
   :replaces_section_title:
   :noindex:

   The SolveBio Python client.

   :homepage: https://github.com/solvebio/solvebio-python
   :documentation: https://docs.solvebio.com
   
   :license: MIT / MIT
   :recipe: /`solvebio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio/meta.yaml>`_

   


.. conda:package:: solvebio

   |downloads_solvebio| |docker_solvebio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.33.0-0</code>,  <code>2.32.0-0</code>,  <code>2.31.2-0</code>,  <code>2.31.1-0</code>,  <code>2.31.0-0</code>,  <code>2.30.1-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.33.0-0``,  ``2.32.0-0``,  ``2.31.2-0``,  ``2.31.1-0``,  ``2.31.0-0``,  ``2.30.1-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.29.2-0``,  ``2.29.1-0``,  ``2.29.0-0``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.25.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.21.0-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.16.0-0``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.7-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.1-0``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.4.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dash-auth: ``<2``
   :depends on dash-core-components: 
   :depends on dash-html-components: 
   :depends on flask: 
   :depends on flask-seasurf: 
   :depends on pycurl: ``>=7.0.0``
   :depends on pyprind: 
   :depends on python: 
   :depends on requests: ``>=2.0.0``
   :depends on six: 

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

    pixi global install solvebio

to add into an existing workspace instead, run::

    pixi add solvebio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install solvebio

Alternatively, to install into a new environment, run::

    conda create -n envname solvebio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/solvebio:<tag>

(see `solvebio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_solvebio| image:: https://img.shields.io/conda/dn/bioconda/solvebio.svg?style=flat
   :target: https://anaconda.org/bioconda/solvebio
   :alt:   (downloads)
.. |docker_solvebio| image:: https://quay.io/repository/biocontainers/solvebio/status
   :target: https://quay.io/repository/biocontainers/solvebio
.. _`solvebio/tags`: https://quay.io/repository/biocontainers/solvebio?tab=tags


.. raw:: html

    <script>
        var package = "solvebio";
        var versions = ["2.34.0","2.33.0","2.32.0","2.31.2","2.31.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solvebio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solvebio/README.html